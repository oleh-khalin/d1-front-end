const td = new Date();
const todayDay = td.getDate();
let todayDayOfWeek = td.getDay();
const todayMonth = td.getMonth();
const todayYear = new Date().getFullYear();
const DaysOfWeekBig = [
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П’ятниця',
  'Субота',
  'Неділя'
];
const DaysOfMonthSmall = [
  'січ',
  'лют',
  'бер',
  'квіт',
  'трав',
  'черв',
  'лип',
  'серп',
  'вер',
  'жовт',
  'лист',
  'груд'
];
let carouselContent = '';
let carouselContentMobile = '';
const lastDateOfCurrentMonth = new Date(todayYear, todayMonth+1, 0).getDate();
const lastDateOfPreviousMonth = new Date(todayYear, todayMonth, 0).getDate();
todayDayOfWeek = todayDayOfWeek - 1;
todayDayOfWeek === -1 ? todayDayOfWeek = 6 : null;
carouselContent += `<li class="glide__slide">
<div class="program-week-wrapper">`;
for(let i=0; i < 7;i++) {
  const dd = todayDay - 7;
  carouselContent += `<div class="program-week-item">
<div class="program-week-item__day">${DaysOfWeekBig[i]}</div>`;if((dd - todayDayOfWeek + i) <= 0) {
    const temp = lastDateOfPreviousMonth + (dd - todayDayOfWeek) + i;
    carouselContent += `
<div class="program-week-item__date">${temp} ${todayMonth - 1 === -1 ? DaysOfMonthSmall[11] : DaysOfMonthSmall[todayMonth - 1]}</div>`;
  } else if((dd - todayDayOfWeek + i) > lastDateOfCurrentMonth) {
    const temp = (dd - todayDayOfWeek + i) - lastDateOfCurrentMonth;
    carouselContent += `
<div class="program-week-item__date">${temp} ${DaysOfMonthSmall[todayMonth+1 === 12 ? 0 : todayMonth+1]}</div>`;
  } else {
    carouselContent += `
<div class="program-week-item__date">${dd - todayDayOfWeek + i} ${DaysOfMonthSmall[todayMonth]}</div>`;
  }
  carouselContent += `
</div>`;
}
carouselContent += `</div>
</li>
<li class="glide__slide">
<div class="program-week-wrapper">`;
carouselContentMobile += `<div class="program-week-wrapper">`;
for(let i=0; i < 7;i++) {
  if(i === todayDayOfWeek) {
    carouselContent += `<div class="program-week-item active">
<div class="program-week-item__day">Сьогодні</div>
<div class="program-week-item__date">${todayDay} ${DaysOfMonthSmall[todayMonth]}</div>
</div>`;
    carouselContentMobile += `<div class="program-week-item active">
<div class="program-week-item__day">Сьогодні</div>
<div class="program-week-item__date">${todayDay} ${DaysOfMonthSmall[todayMonth]}</div>
</div>`;
  } else {
    carouselContent += `<div class="program-week-item">
<div class="program-week-item__day">${DaysOfWeekBig[i]}</div>`;
    carouselContentMobile += `<div class="program-week-item">
<div class="program-week-item__day">${DaysOfWeekBig[i]}</div>`;
    if((todayDay - todayDayOfWeek + i) <= 0) {
      const temp = lastDateOfPreviousMonth + (todayDay - todayDayOfWeek) + i;
      carouselContent += `
<div class="program-week-item__date">${temp} ${todayMonth - 1 === -1 ? DaysOfMonthSmall[11] : DaysOfMonthSmall[todayMonth - 1]}</div>`;
      carouselContentMobile += `
<div class="program-week-item__date">${temp} ${todayMonth - 1 === -1 ? DaysOfMonthSmall[11] : DaysOfMonthSmall[todayMonth - 1]}</div>`;
    } else if((todayDay - todayDayOfWeek + i) > lastDateOfCurrentMonth) {
      const temp = (todayDay - todayDayOfWeek + i) - lastDateOfCurrentMonth;
      carouselContent += `
<div class="program-week-item__date">${temp} ${DaysOfMonthSmall[todayMonth+1 === 12 ? 0 : todayMonth+1]}</div>`;
      carouselContentMobile += `
<div class="program-week-item__date">${temp} ${DaysOfMonthSmall[todayMonth+1 === 12 ? 0 : todayMonth+1]}</div>`;
    } else {
      carouselContent += `
<div class="program-week-item__date">${todayDay - todayDayOfWeek + i} ${DaysOfMonthSmall[todayMonth]}</div>`;
      carouselContentMobile += `
<div class="program-week-item__date">${todayDay - todayDayOfWeek + i} ${DaysOfMonthSmall[todayMonth]}</div>`;
    }
    carouselContent += `
</div>`;
    carouselContentMobile += `
</div>`;
  }
}
carouselContent += `</div>
</li>`;
carouselContentMobile += `</div>`;
//
document.querySelector('.program-week .glide__slides').innerHTML = carouselContent;
document.querySelector('.program-week__mobile').innerHTML = carouselContentMobile;
const programGlide = new Glide('.program-week', {
  startAt: 1,
  perView: 1,
  dragThreshold: false
}).mount();

const programGlideLeft = document.querySelector('.program-week__left');
const programGlideRight = document.querySelector('.program-week__right');
programGlideLeft.addEventListener('click', () => {
  if(programGlide.index === 1) {
    programGlide.go('<');
    programGlideLeft.classList.add('disabled');
    programGlideRight.classList.remove('disabled');
  }
});
programGlideRight.addEventListener('click', () => {
  if(programGlide.index === 0) {
    programGlide.go('>');
    programGlideRight.classList.add('disabled');
    programGlideLeft.classList.remove('disabled');
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const projectPlayerGlide = new Glide('.project-player__bottom', {
    startAt: 0,
    perView: 1,
    dragThreshold: false
  }).mount();

  document.querySelector('.project-player__bottom-arrow-left').addEventListener('click',() => {
    projectPlayerGlide.go('<');
  });

  document.querySelector('.project-player__bottom-arrow-right').addEventListener('click',() => {
    projectPlayerGlide.go('>');
  });

  const projectSingleItems = document.querySelectorAll('.project-player__bottom-item__inner');
  projectSingleItems.forEach(el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('active'))
        return;
      document.querySelector('.project-player__bottom-item__inner.active').classList.remove('active');
      el.classList.add('active');
      console.log(el.getAttribute('data-image') + ' - ' + el.getAttribute('data-video'));
    });
  });
});
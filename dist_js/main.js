document.addEventListener("DOMContentLoaded", function() {

  const body = document.querySelector('body');
  const inner = document.querySelector('.inner');
  const menuMore = document.querySelector('.header-main__menu-more__window');
  const menuMoreClose = document.querySelector('.header-main__menu-more__window-close');
  const menuMoreOpen = document.querySelector('.header-main__menu-more');
  const menuMoreOuter = document.querySelector('.header-main__menu-more__outer');
  const menuMoreOverlay = document.querySelector('.header-main__menu-more__overlay');

  const calendar = document.querySelector('.header-main-calendar__window');
  const calendarInner = document.querySelectorAll('.header-main-calendar__window .header-main-calendar__window-inner');
  const calendarItems = document.querySelector('.header-main-calendar__window .header-main-calendar__window-inner__items');
  const calendarClose = document.querySelector('.header-main-calendar__window-close');
  const calendarOpen = document.querySelector('.header-main-calendar-open');
  const calendarOuter = document.querySelector('.header-main-calendar__outer');
  const calendarOverlay = document.querySelector('.header-main-calendar__overlay');

  menuMore.style.paddingLeft = (body.offsetWidth - inner.offsetWidth)/2 + 'px';
  calendarInner.forEach(el => {
    el.style.paddingRight = 164 + (body.offsetWidth - inner.offsetWidth)/2 + 'px';
  });
  calendarItems.style.paddingRight = (body.offsetWidth - inner.offsetWidth)/2 + 'px';
  calendarClose.style.right = (body.offsetWidth - inner.offsetWidth)/2 + 'px';
  setTimeout(function(){
    if(window.innerWidth > 1024) {
      menuMore.style.marginLeft = -menuMore.offsetWidth + 'px';
      calendar.style.marginRight = -calendar.offsetWidth + 'px';
    } else {
      menuMore.style.marginTop = -menuMore.offsetHeight + 'px';
      calendar.style.marginTop = -calendar.offsetHeight + 'px';
    }
  }, 500);
  menuMoreOpen.addEventListener('click', () => {

    if(document.querySelector('.header-main__menu-search').classList.contains('active')) {
      document.querySelector('.header-main__menu-search').style.minWidth = '0px';
      document.querySelector('.header-main__menu-search input').style.width = '0px';
      document.querySelector('.header-main__menu-search-open').classList.remove('active');
    }

    if(calendarOuter.classList.contains('active')) {
      calendarOuter.classList.remove('active');
      body.classList.remove('lock-screen');
      if (window.innerWidth > 1024) {
        calendar.style.marginRight = -calendar.offsetWidth + 'px';
      } else {
        calendar.style.marginTop = -calendar.offsetHeight + 'px';
      }
    }
    if(!menuMoreOuter.classList.contains('active')) {
      menuMoreOuter.classList.add('active');
      body.classList.add('lock-screen');
      if(window.innerWidth > 1024) {
        menuMore.style.marginLeft = 0;
      } else {
        menuMore.style.marginTop = 0;
        menuMoreOpen.classList.add('active');
      }
    } else {
      menuMoreOuter.classList.remove('active');
      body.classList.remove('lock-screen');
      menuMore.style.marginTop = -menuMore.offsetHeight + 'px';
      menuMoreOpen.classList.remove('active');
    }
  });
  calendarOpen.addEventListener('click', () => {

    if(document.querySelector('.header-main__menu-search').classList.contains('active')) {
      document.querySelector('.header-main__menu-search').style.minWidth = '0px';
      document.querySelector('.header-main__menu-search input').style.width = '0px';
      document.querySelector('.header-main__menu-search-open').classList.remove('active');
    }
    if(menuMoreOuter.classList.contains('active')) {
      menuMoreOuter.classList.remove('active');
      body.classList.remove('lock-screen');
      if (window.innerWidth > 1024) {
        menuMore.style.marginLeft = -menuMore.offsetWidth + 'px';
      } else {
        menuMore.style.marginTop = -menuMore.offsetHeight + 'px';
      }
    }
    menuMoreOpen.classList.remove('active');
    if(!calendarOuter.classList.contains('active')) {
      calendarOuter.classList.add('active');
      body.classList.add('lock-screen');
      if(window.innerWidth > 1024) {
        calendar.style.marginRight = 0;
      } else {
        calendar.style.marginTop = 0;
      }
    } else {
      calendarOuter.classList.remove('active');
      body.classList.remove('lock-screen');
      calendar.style.marginTop = -calendar.offsetHeight + 'px';
    }
  });
  menuMoreClose.addEventListener('click', () => {
    menuMoreOuter.classList.remove('active');
    body.classList.remove('lock-screen');
    if(window.innerWidth > 1024) {
      menuMore.style.marginLeft = -menuMore.offsetWidth + 'px';
    } else {
      menuMore.style.marginTop = -menuMore.offsetHeight + 'px';
    }
  });
  calendarClose.addEventListener('click', () => {
    calendarOuter.classList.remove('active');
    body.classList.remove('lock-screen');
    if(window.innerWidth > 1024) {
      calendar.style.marginRight = -calendar.offsetWidth + 'px';
    } else {
      calendar.style.marginTop = -calendar.offsetHeight + 'px';
    }
  });
  menuMoreOverlay.addEventListener('click', () => {
    menuMoreOuter.classList.remove('active');
    body.classList.remove('lock-screen');
    if(window.innerWidth > 1024) {
      menuMore.style.marginLeft = -menuMore.offsetWidth + 'px';
    } else {
      menuMore.style.marginTop = -menuMore.offsetHeight + 'px';
    }
    menuMoreOpen.classList.remove('active');
  });
  calendarOverlay.addEventListener('click', () => {
    calendarOuter.classList.remove('active');
    body.classList.remove('lock-screen');
    if(window.innerWidth > 1024) {
      calendar.style.marginRight = -calendar.offsetWidth + 'px';
    } else {
      calendar.style.marginTop = -calendar.offsetHeight + 'px';
    }
  });

  window.addEventListener("resize", () => {
    menuMore.style.paddingLeft = (body.offsetWidth - inner.offsetWidth)/2 + 'px';
    calendarInner.forEach(el => {
      el.style.paddingRight = 164 + (body.offsetWidth - inner.offsetWidth)/2 + 'px';
    });
    calendarItems.style.paddingRight = (body.offsetWidth - inner.offsetWidth)/2 + 'px';
    calendarClose.style.right = (body.offsetWidth - inner.offsetWidth)/2 + 'px';
  });

  const appHeight = () => {
    document.querySelector('.header-main__menu-more__window').style.maxHeight = window.innerHeight + `px`;
    document.querySelector('.header-main-calendar__window').style.maxHeight = window.innerHeight + `px`;
  };
  window.addEventListener('resize', appHeight);
  appHeight();


  // Calendar
  var Calendar = function(o) {
    //Store div id
    this.divId = o.ParentID;

    // Days of week, starting on Sunday
    this.DaysOfWeek = o.DaysOfWeek;
    // Months, stating on January
    this.Months = o.Months;
    // Set the current month, year
    var d = new Date();
    this.CurrentMonth = d.getMonth();
    this.CurrentYear = d.getFullYear();

    var f=o.Format;

    if(typeof(f) == 'string') {
      this.f  = f.charAt(0).toUpperCase();
    } else {
      this.f = 'M';
    }

  };

// Goes to next month
  Calendar.prototype.nextMonth = function() {

    if ( this.CurrentMonth == 11 ) {

      this.CurrentMonth = 0;
      this.CurrentYear = this.CurrentYear + 1;

    } else {

      this.CurrentMonth = this.CurrentMonth + 1;

    }

    this.showCurrent();
  };

// Goes to previous month
  Calendar.prototype.previousMonth = function() {

    if ( this.CurrentMonth == 0 ) {

      this.CurrentMonth = 11;
      this.CurrentYear = this.CurrentYear - 1;

    } else {

      this.CurrentMonth = this.CurrentMonth - 1;

    }

    this.showCurrent();
  };

//
  Calendar.prototype.previousYear = function() {

    this.CurrentYear = this.CurrentYear - 1;

    this.showCurrent();
  }

//
  Calendar.prototype.nextYear = function() {
    console.log(" ");

    console.log("Calendar.prototype.nextYear = function() {");

    console.log("this.CurrentYear == " + this.CurrentYear);

    this.CurrentYear = this.CurrentYear + 1;

    console.log("this.CurrentYear - 1 i.e. this.CurrentYear == " + this.CurrentYear);

    this.showCurrent();
  }

// Show current month
  Calendar.prototype.showCurrent = function() {

    this.Calendar(this.CurrentYear, this.CurrentMonth);

  };





// Show month (year, month)
  Calendar.prototype.Calendar = function(y,m) {
    // console.log(m);

    typeof(y) == 'number' ? this.CurrentYear = y : null;

    typeof(y) == 'number' ? this.CurrentMonth = m : null;


    // 1st day of the selected month
    var firstDayOfCurrentMonth = new Date(y, m, 1).getDay();

    var todayDay = new Date().getDate();
    var todayMonth = new Date().getMonth();
    var todayYear = new Date().getFullYear();
    // console.log(todayMonth);
    // console.log(todayDay);

    // Last date of the selected month
    var lastDateOfCurrentMonth = new Date(y, m+1, 0).getDate();

    // Last day of the previous month
    var lastDateOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    // Write selected month and year. This HTML goes into <div id="month"></div>
    var monthandyearhtml = '<span id="monthandyearspan">' + this.Months[m] + ' - ' + y + '</span>';

    var html = '<table>';

    // Write the header of the days of the week
    html += '<tr>';

    for(var i=0; i < 7;i++) {

      html += '<th class="daysheader">' + this.DaysOfWeek[i] + '</th>';
    }

    html += '</tr>';




    var p = dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;

    var cellvalue;

    for (var d, i=0, z0=0; z0<6; z0++) {
      html += '<tr>';

      for (var z0a = 0; z0a < 7; z0a++) {

        d = i + dm - firstDayOfCurrentMonth;

        // Dates from prev month
        // console.log(m, todayMonth, y);
        if(m <= todayMonth && y <= todayYear) {
          if (d < 1) {

            cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;

            html += '<td></td>';

            // Dates from next month
          } else if (d > lastDateOfCurrentMonth) {

            html += '<td></td>';

            // Current month dates
          } else if (m === todayMonth && d === todayDay) {
            html += '<td class="todaydate">' + (d) + '</td>';
          } else if (m === todayMonth && d > todayDay) {
            html += '<td class="futuremonthdates">' + (d) + '</td>';
          } else {
            html += '<td class="currentmonthdates">' + (d) + '</td>';

            p = 1;

          }
        } else {
          if (d < 1) {

            cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;

            html += '<td></td>';

            // Dates from next month
          } else if (d > lastDateOfCurrentMonth) {

            html += '<td></td>';

            // Current month dates
          } else {
            html += '<td class="futuremonthdates">' + (d) + '</td>';
          }
        }

        if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {

          z0 = 10; // no more rows
        }

        i++;

      }

      html += '</tr>';
    }
    html += '</table>';
    document.getElementById("monthandyear").innerHTML = monthandyearhtml;
    document.getElementById(this.divId).innerHTML = html;
  };
  window.onload = function() {
    var c = new Calendar({
      ParentID:"divcalendartable",

      DaysOfWeek:[
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс'
      ],

      Months:['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень' ],

      Format:'dd/mm/yyyy'
    });

    c.showCurrent();

    // Bind next and previous button clicks
    getId('btnPrev').onclick = function(){
      c.previousMonth();
    };

    getId('btnNext').onclick = function(){
      c.nextMonth();
    };
  };

  function getId(id) {
    return document.getElementById(id);
  }


  document.querySelector('.header-main__menu-search-open').addEventListener('click', () => {
    if(window.matchMedia('(max-width: 1024px)').matches) {
      document.querySelector('.header-main__menu-search').style.minWidth = (document.querySelector('.header-main').offsetWidth) + 'px';
      document.querySelector('.header-main__menu-search input').style.width = (document.querySelector('.header-main .inner').offsetWidth) + 'px';
    } else {
      document.querySelector('.header-main__menu-search input').style.width = (document.querySelector('.header-main .inner').offsetWidth *0.72) + 'px';
      document.querySelector('.header-main__menu-search').style.minWidth = (document.querySelector('.header-main .inner').offsetWidth *0.72) + 'px';
    }
    document.querySelector('.header-main__menu-search input').focus();
    document.querySelector('.header-main__menu-search-open').classList.add('active');
  });

  document.querySelector('.header-main__menu-search-close').addEventListener('click', () => {
    document.querySelector('.header-main__menu-search').style.minWidth = '0px';
    document.querySelector('.header-main__menu-search input').style.width = '0px';
    document.querySelector('.header-main__menu-search-open').classList.remove('active');
  });

  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const switchTheme = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
    }
  };

  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
  toggleSwitch.addEventListener('change', switchTheme, false);
});
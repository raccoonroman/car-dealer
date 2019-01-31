"use strict";

function openTestDrive(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("test-drive__content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" test-drive__tab--active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " test-drive__tab--active";
}



$(document).ready(function(){
  $('.test-drive__slides').slick({
		dots: true,
		// adaptiveHeight: true,
		draggable: false,
		swipe: false,
		infinite:false,
		appendArrows: ".test-drive__arrows",
		prevArrow: '<button type="button" class="slick-prev">Önceki Adım</button>',
		nextArrow: '<button type="button" class="slick-next">Sonraki Adım</button>',
		appendDots: ".test-drive__dots",
		dotsClass: "test-drive__dots-list"
		// mobileFirst: true,
		// responsive: [
		// 	{
		// 		breakpoint: 959,
		// 		settings: {
		// 			dots: false,
		// 			arrows: true
		// 		}
		// 	}
		// ]
	});
});


jQuery.datetimepicker.setLocale('tr');

jQuery('#datetimepicker').datetimepicker({
	inline:true,
	minDate:'-1970/01/02',
	allowTimes:[
  '09:00', '09:30', '10:30', '11:00', '11:30', '13:30', '14:30', '15:00', '15:30', '16:30', '17:00'
 ]
 // i18n:{
 //  tr:{
 //   months:[
 //    'Januar','Februar','März','April',
 //    'Mai','Juni','Juli','August',
 //    'September','Oktober','November','Dezember',
 //   ],
 //   dayOfWeek:[
 //    "So.", "Mo", "Di", "Mi",
 //    "Do", "Fr", "Sa.",
 //   ]
 //  }
 // },
 // timepicker:false,
 // format:'d.m.Y'
});

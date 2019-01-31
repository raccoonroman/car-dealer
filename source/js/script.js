"use strict";

function openTestDrive(evt, tabName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("test-drive__content");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink-test-drive");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" test-drive__tab--active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " test-drive__tab--active";
}

function openSevice(evt, tabName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("service__content");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink-service");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" service__tab--active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " service__tab--active";
}



$(document).ready(function(){
  $('.test-drive__slides').slick({
		dots: true,
		adaptiveHeight: true,
		draggable: false,
		swipe: false,
		infinite:false,
		appendArrows: ".test-drive__arrows",
		prevArrow: '<button type="button" class="slick-prev">Önceki Adım</button>',
		nextArrow: '<button type="button" class="slick-next">Sonraki Adım</button>',
		appendDots: ".test-drive__dots",
		dotsClass: "test-drive__dots-list"
	});
});


$(document).ready(function(){
  $('.service__slides').slick({
		dots: true,
		// adaptiveHeight: true,
		draggable: false,
		swipe: false,
		infinite:false,
		appendArrows: ".service__arrows",
		prevArrow: '<button type="button" class="slick-prev">Önceki Adım</button>',
		nextArrow: '<button type="button" class="slick-next">Sonraki Adım</button>',
		appendDots: ".service__dots",
		dotsClass: "service__dots-list"
	});
});


jQuery.datetimepicker.setLocale('tr');

jQuery('#test-drive-datetimepicker').datetimepicker({
	inline:true,
	minDate:'-1970/01/02',
	allowTimes:[
  '09:00', '09:30', '10:30', '11:00', '11:30', '13:30', '14:30', '15:00', '15:30', '16:30', '17:00'
 ]
});


jQuery('#service-datetimepicker').datetimepicker({
	inline:true,
	minDate:'-1970/01/02',
	allowTimes:[
  '09:00', '09:30', '10:30', '11:00', '11:30', '13:30', '14:30', '15:00', '15:30', '16:30', '17:00'
 ]
});

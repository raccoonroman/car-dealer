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
var options=
{
width:1108,//width of slider
height:450,//height of slider
next_prev:true,//will show next and prev links
next_class:'test-drive__slide-btn test-drive__btn-next',//class for next link
prev_class:'test-drive__slide-btn test-drive__btn-prev',//class for prev link
error_class:'alert alert-danger',//class for validation errors
texts:{
next:'Sonraki Adım',//verbiage for next link
prev:'Önceki Adım'//verbiage for prev link
  },
speed:600,//slider speed

};

$('#slider').jFormslider(options);
})

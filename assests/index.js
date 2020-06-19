import { * } from './ajax.js';

 $( document ).ready(function() {
  new WOW().init();


  $('.overlay').hover(function(){ $(this).toggleClass('animated pulse') }); //overlay on project card animation.



});

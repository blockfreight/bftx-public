//jQuery code
jQuery(function($) { 

  'use strict';

  $(document).ready(function () {

    hljs.initHighlightingOnLoad();
    InitLinks();
    initSidebar();

  });

});

function initSidebar() {  
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 72) {
      $("#slider").removeClass("top-sidebar").addClass("fix-sidebar");
    } 
    else if($(this).scrollTop() <= 72) {
      $("#slider").removeClass("fix-sidebar").addClass("top-sidebar");
    }
  });
}

function InitLinks() {
  $('a.nav').click(function(){
    var idscroll = $(this).attr('href');
    $.scrollTo(idscroll, 700);
    return false;
  }); 
}
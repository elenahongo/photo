/// <reference path="../../../../jquery/typings/globals/jquery/index.d.ts" />

$(document).ready(function(){
  $('#fullpage').fullpage({
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    scrollingSpeed: (400),
    autoScrolling: true,
    scrollHorizontally: true,
    continuousVertical: true,
    navigation: true,
    
    afterRender: function(){
      setInterval(function(){
        $.fn.fullpage.moveSectionDown(); 
      }, 4000);
    }

  });
});
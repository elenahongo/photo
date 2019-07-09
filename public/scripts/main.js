var deleteLog = false;
var placeHolder = $('#callbacks-placeholder');

$(document).ready(function(){
  $('#fullpage').fullpage({
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    scrollHorizontally: true,
    continuousVertical: true,
    navigation: true,
    resetSliders: true,
    
    v2compatible: false,
    responsiveWidth: 600,

    onLeave: function(origin, destination, direction) {
      if (deleteLog) {
        placeHolder.html('');
      };
    },

    afterLoad: function(origin, destination, direction) {
      if(origin){
        placeHolder.append('<p>afterLoad</p>');
      }
      deleteLog = true;
    },
    
  });
});
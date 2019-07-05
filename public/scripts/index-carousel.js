
$(document).ready(function () {	
    $('#fullpage').fullpage({	navigation: true,	loopBottom: true,	afterRender: function () {
        setInterval(function () {	$.fn.fullpage.moveSectionDown();
        }, 10500);	
        }	});
        }); 


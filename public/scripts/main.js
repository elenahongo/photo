$(document).ready(() => {
   
  
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  
  $('#product-photo2').on('keypress', event => {
    $('.product-photo').addClass('photo-active')
  }).on('keyup', event => {
    $('.product-photo').removeClass('photo-active')
  })
  
    
  $( "#target" ).keydown(function() {
  alert( "Handler for .keydown() called." );
});

  
}); 

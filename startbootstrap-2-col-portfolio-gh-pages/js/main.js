$(document).ready(function(){


  $('.portfolio').on("click", function(){
    $('html, body').animate({
      scrollTop: $('.portfolio-section').offset().top
    }, 500)
  })

  $('.contact-me').on("click", function(){
    $('html, body').animate({
      scrollTop: $('.contact-me-section').offset().top
    }, 500)
  })

  $('.about-me').on("click", function(){
    $('html, body').animate({
      scrollTop: $('.about-me-section').offset().top
    }, 500)
  })










})

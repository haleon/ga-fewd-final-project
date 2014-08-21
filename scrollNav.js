
function scrollNav() {
  $('.nav a').click(function(e){
    $(".active").removeClass("active");     
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 900);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();
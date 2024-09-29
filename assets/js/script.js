$(document).ready(function() {

    $(window).on('load', function() {
        $('.center').slideUp(1500)
    });

    $('.login').click(function() {
        $('.login').fadeIn(3000);
    });

    // $(window).on('load', function() {
    //     $('.login').slideUp(1500)
    // });

    $('.back_to_top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500)
    });

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop()

        if(scrolling > 200) {
            $('.back_to_top').slideDown(500)
        }
        else{
            $('.back_to_top').slideUp(500)
        }
    });
});



$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });
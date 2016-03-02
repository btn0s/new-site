 $(document).foundation();

 $(document).ready(function() {
   //main
    $('#logo').fadeIn(500);
    $('#one li').each(function(index){
      $(this).delay(1000).animate({opacity: "1", top: "-10px"}, index * 300 + 300);
    });
    $('#social li').delay(1500).animate({opacity: "1", top: "-10px"}, 1000);

    //about
    //$('#coolthingy').delay(500).fadeIn(1000);
    $('#coolthingy').delay(500).animate({opacity: "1", top: "10px"}, 1000);
    $('.left').delay(1000).animate({opacity: "1", top: "-10px"}, 500);
    $('.right').delay(1500).animate({opacity: "1", top: "-10px"}, 500);
    $('#back').delay(2000).animate({opacity: "1", top: "-10px"}, 500);

    //work
  });

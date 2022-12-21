
$(document).ready(function(){

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        if (scroll > 50) {
            $("#navigation").addClass('sticky-on')
        }
        else{
            
            $("#navigation").removeClass('sticky-on')
        }
    })
   $(".nav-link").click(function(){
       $('#navbarSupportedContent').removeClass('show')
       
   })




});
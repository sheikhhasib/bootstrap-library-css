$(document).ready(function () {
    $(document).on("click", ".MobileMenuBar", function () {
        let headerMenu = $('.HeaderMenu').css('display');
        // console.log("headerMenu : ",headerMenu);
        if(headerMenu == 'none'){
            $('.HeaderMenu').css('display','block');
        }else{
            $('.HeaderMenu').css('display','none');
        }
	});


    // Navbar Scroll function
    $(document).ready(function(){       
        var scroll_pos = 0;
        $(document).scroll(function() { 
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 50) {
                $(".header").css('background-color', '#fff');
                $(".header").css('transition', '.5s');
                $(".headerLogo").css('color', '#3074d4');
                $(".headerSection ul li").css('color', '#3074d4');
                $(".dwnloadBtn").css('border', '2px solid #3074d4');
                $(".dwnloadBtn").css('color', '#3074d4');
                $(".MobileMenuBar").css('color', '#3074d4');
                $(".dwnloadBtn").hover(function(){
                    $(this).css("background-color", "#ffab0f");
                    $(this).css("color", "#fff");
                    }, function(){
                    $(this).css("background-color", "#fff");
                    $(this).css("color", "#3074d4");
                  });
            } else {
                $(".header").css('background-color', 'transparent');
                $(".headerLogo").css('color', '#fff');
                $(".headerSection ul li").css('color', '#fff');
                $(".MobileMenuBar").css('color', '#fff');
            }
        });
    });
     // Navbar Scroll function Finish 
});
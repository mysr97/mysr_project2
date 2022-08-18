
$(window).scroll(function () {
    var scrollValue = $(document).scrollTop();

    console.log(scrollValue);

});

        //menu 스크롤 이동시 css 변경
        $(window).on("scroll", function () {
            var s1 = $("#sub1_intro_t").offset().top -500;

            if ($(window).scrollTop() >= s1) {
                $("#menu").css({ "background-color": "rgba(0,0,0,0.7)" });
                $("#menu > .meLi > li a").css({ "color": "white" });
                $("#menu > .meLi > li > a > img").css({"filter" : "invert(100%)"});
                $("#menu > .hambuger > img").attr("src", "img/menu_w.png")
            } else {
                $("#menu").css({ "background-color": "transparent" });
                $("#menu > .meLi > li a").css({ "color": "white" });
                $("#menu > .meLi > li > a > img").css({"filter" : "invert(100%)"});
                $("#menu > .hambuger > img").attr("src", "img/menu.png")
            }
        });
        

        // 햄버거 메뉴
        if (window.matchMedia("(max-width: 1000px)").matches) {
            function openRightMenu() {
                document.getElementById("right_menu").style.width = "100%";
            }/*-- #left_menu의 width를 변경시켜 왼쪽 메뉴가 나타날 수 있도록 함.--*/
            function closeRightMenu() {
                document.getElementById("right_menu").style.width = "0%";
            }
        } 

        //sub1_top 앵커 스크롤 애니메이션
        $(function ($) {
            $("#sub1_top > img").click(function (event) {
                event.preventDefault();
                $('html,body').animate({ scrollTop: $("#sub1_intro_t").offset().top }, 700);
            });
        });
        
        //sub1_intro_t 애니메이션
        $(window).on("scroll", function () {
            var s2 = $("#sub1_intro_t").offset().top / 1.5;

            if ($(window).scrollTop() >= s2) {
                $("#sub1_intro_t > .sit1 > img").animate({right:0, opacity:1},600);
            }

            if ($(window).scrollTop() >= s2*2.4) {
                $("#sub1_intro_t > .sit2 > img").animate({left:-40, opacity:1},600);
            }
        });


        //sub1_intro_bt 애니메이션
        $(window).on("scroll", function(){
            var s3 = $("#sub1_intro_bt").offset().top;

            if ($(window).scrollTop() >= s3) {
            }
        });

        // 
        $(window).on("scroll",function(){
            var his = $("#his_scroll_wr").offset().top;
            var upn = -1 *($(window).scrollTop()-$("#his_scroll_wr").offset().top + 100);

            if ($(window).scrollTop() +100 >= his) {
                $(".his_scroll_in").stop().css({ marginLeft: 0 + upn });
                $(".his_scroll_in").addClass("fix")
            } else {
                $(".his_scroll_in").stop().css({ marginLeft: 0 });
                $(".his_scroll_in").removeClass("fix")
            }
            });

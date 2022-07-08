
        //menu 스크롤 이동시 css 변경
        $(window).on("scroll", function () {
            var ms = $("#sub1_top").offset().top -100;

            if ($(window).scrollTop() >= ms) {
                $("#menu").css({ "background-color": "rgba(0,0,0,0.7)" });
                $("#menu > .meLi > li a").css({ "color": "white" });
                $("#menu > .meLi > li > a > img").css({"filter" : "invert(100%)"});
                $("#menu > .hambuger > img").attr("src", "img/menu_w.png")
            } else {
                $("#menu").css({ "background-color": "transparent" });
                $("#menu > .meLi > li a").css({ "color": "black" });
                $("#menu > .meLi > li > a > img").css({"filter" : "none"});
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
                $('html,body').animate({ scrollTop: $("#sub1_intro_t").offset().top - 100 }, 700);
            }); // 메뉴바 높이만큼 뺌
        });
        

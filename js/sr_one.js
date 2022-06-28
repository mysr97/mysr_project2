
$(window).scroll(function () { 
    var scrollValue = $(document).scrollTop();

    console.log(scrollValue);

});
        //menu 스크롤 이동시 css 변경
        $(window).on("scroll", function () {
            if ($(window).scrollTop() >= 700) {
                $("#menu").css({ "background-color": "rgba(0,0,0,0.7)" });
                $("#menu > .meLi > li a").css({ "color": "white" });
                $("#menu > .meLi > li > a > img").css({"filter" : "invert(100%)"});
            } else {
                $("#menu").css({ "background-color": "transparent" });
                $("#menu > .meLi > li a").css({ "color": "black" });
                $("#menu > .meLi > li > a > img").css({"filter" : "none"});
            }
        });

        //main_top 텍스트,이미지 나타내기
        
        if (window.matchMedia("(max-width: 549.9px)").matches){
            $(function(){
                $("#main_top").animate({opacity:1},500);
                $(".top_text").delay(300).animate({opacity:1, left:50},700);
                $("#main_top > img").delay(200).animate({opacity:1},1000);
            });
        }else if (window.matchMedia("(min-width: 750px)").matches){
            $(function(){
                $("#main_top").animate({opacity:1},500);
                $(".top_text").delay(300).animate({opacity:1, left:100},700);
                $("#main_top > img").delay(200).animate({opacity:1},1000);
            });
        }else if (window.matchMedia("(min-width: 1000px)").matches){
            $(function(){
                $("#main_top").animate({opacity:1},500);
                $(".top_text").delay(300).animate({opacity:1, left:200},700);
                $("#main_top > img").delay(200).animate({opacity:1},1000);
            });
        } else {
            $(function(){
                $("#main_top").animate({opacity:1},500);
                $(".top_text").delay(300).animate({opacity:1, left:150},700);
                $("#main_top > img").delay(200).animate({opacity:1},1000);
            });
        }

        //stage box 스크롤 이동시 위치 변경
        $(window).on("scroll",function(){

            var st_top_num = parseInt($("#main_stage").offset().top / 100);
            var st_max = $("#main_stage").offset().top + 950;
            var st_min = $("#main_stage").offset().top - 250;

            //첫번째 줄
            if ($(window).scrollTop() >= st_max) {
                $(".st_box_sm_wr:nth-of-type(1)").stop().animate({ marginTop: 0 }, "slow");
            } else if ($(window).scrollTop() >= st_min) {
                $(".st_box_sm_wr:nth-of-type(1)").stop().animate({ marginTop: 120 + (-12 * (($(window).scrollTop() / 100) - (st_top_num - 1)))}, "slow");
            } else {
                $(".st_box_sm_wr:nth-of-type(1)").stop().animate({ marginTop: 120 }, "slow");
            }

            //두번째 줄
            if ($(window).scrollTop() >= st_max) {
                $(".st_box_sm_wr:nth-of-type(2)").stop().animate({ marginTop: 0 }, "slow");
            } else if ($(window).scrollTop() >= st_min) {
                $(".st_box_sm_wr:nth-of-type(2)").stop().animate({ marginTop: -360 + (30 * (($(window).scrollTop() / 100) - (st_top_num - 1)))}, "slow");
            } else {
                $(".st_box_sm_wr:nth-of-type(2)").stop().animate({ marginTop: -360 }, "slow");
            }

            //세번째 줄
            if ($(window).scrollTop() >= st_max) {
                $(".st_box_sm_wr:nth-of-type(3)").stop().animate({ marginTop: 0 }, "slow");
            } else if ($(window).scrollTop() >= st_min) {
                $(".st_box_sm_wr:nth-of-type(3)").stop().animate({ marginTop: -240 + (20 * (($(window).scrollTop() / 100) - (st_top_num - 1)))}, "slow");
            } else {
                $(".st_box_sm_wr:nth-of-type(3)").stop().animate({ marginTop: -240 }, "slow");
            }
            });

        //entertainment hover 
        $(function(){
            $(".dbl_ct").hover(function(){
                $(this).children("p").css({opacity:1});
            },function(){
                $(this).children("p").css({opacity:0});
            });
        });

        //slide
        $(function(){
            function prev() {
                $(".m_slide li:last").prependTo(".m_slide");
                $(".m_slide").css({"margin-left":"-100%"});
                $(".m_slide").stop().animate({marginLeft:0},"slow");
            }
            function next() {
                $(".m_slide").stop().animate({"margin-left":"-100%"},"slow",function(){
                    $(".m_slide li:first").appendTo(".m_slide");       
                    $(".m_slide").css({marginLeft:0});
                });
            }

            setInterval(next, 5000);

            $(".prev").click(function(){
                prev()
            });
            
            $(".next").click(function(){
                next()
            });
        });

        //notice menu 클릭시 해당 메뉴 내용 fadeIn 및 메뉴 컬러 변경
        $(function(){
            $(".text_noti_menu1").click(function(){
                $(".text_noti_ct").css('display', 'none');
                $(".m_noti_wr > .text_noti > .text_noti_menu > button").removeClass("bgon")
                $(this).addClass("bgon");
                $(".box1").fadeIn();
            });
            $(".text_noti_menu2").click(function(){
                $(".text_noti_ct").css('display', 'none');
                $(".m_noti_wr > .text_noti > .text_noti_menu > button").removeClass("bgon")
                $(this).addClass("bgon");
                $(".box2").fadeIn();
            });
            $(".text_noti_menu3").click(function(){
                $(".text_noti_ct").css('display', 'none');
                $(".m_noti_wr > .text_noti > .text_noti_menu > button").removeClass("bgon")
                $(this).addClass("bgon");
                $(".box3").fadeIn();
            });
            $(".text_noti_menu4").click(function(){
                $(".text_noti_ct").css('display', 'none');
                $(".m_noti_wr > .text_noti > .text_noti_menu > button").removeClass("bgon")
                $(this).addClass("bgon");
                $(".box4").fadeIn();
            });
            $(".text_noti_menu5").click(function(){
                $(".text_noti_ct").css('display', 'none');
                $(".m_noti_wr > .text_noti > .text_noti_menu > button").removeClass("bgon")
                $(this).addClass("bgon");
                $(".box5").fadeIn();
            });
            $(".text_noti_menu6").click(function(){
                $(".text_noti_ct").css('display', 'none');
                $(".m_noti_wr > .text_noti > .text_noti_menu > button").removeClass("bgon")
                $(this).addClass("bgon");
                $(".box6").fadeIn();
            });
        });

        //main_top 앵커 스크롤 애니메이션
        $(function ($) {
            $("#main_top > a").click(function (event) {
                event.preventDefault();
                $('html,body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 700);
            }); // 메뉴바 높이만큼 뺌
        });

        //circle
        $(function(){
            $(".circle2").children("img").delay(4000).animate({opacity:1},700);
            $(".circle2").children("img").animate({"margin-left":"-40%"},800);
        });



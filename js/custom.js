$(window).ready(function(){

    // 포트폴리오 페이지 화면 전환

    $(".pages-wrap").hide();
    $(".view-all").hide();

    $(".click").click(function(){
        $(".click").removeClass("active");
        $(this).addClass("active");

        if($(".click.one").hasClass("active")){
            $(".view-all").hide();
           

            $(".pages-wrap").show();
        }

        if($(".click.all").hasClass("active")){
          
            $(".pages-wrap").hide();
            $(".view-all").show();
        }
    })

    // 포폴 화면 전환시 백그라운드
    // $(".click.one").click(function(){
    //     $(".works-background").css('height','50%')
    // })

    // $(".click.all").click(function(){
    //     $(".works-background").css('height','60%')
    // })


    $(".click").eq(1).trigger("click");
    
    // 전체 보기 카테고리 파트
    $(".button-group button").click(function(){
        $("button").removeClass("active");
        $(this).addClass("active");
    })



    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.gnb').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    })

    setInterval(function(){
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
    }, 1);


    function hasScrolled(){
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta) 
            return;

        if (st > lastScrollTop && st > navbarHeight){
            // 스크롤 올릴때 (높게)
            $('header').addClass('on');
            
        }else{
            if(lastScrollTop && st < navbarHeight) {
            // 스크롤 내릴때 (낮게)
            $('header').removeClass('on');
            }

        }

        lastScrollTop = st;       
    }
    hasScrolled()
   


    // move scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.move-top').fadeIn(200);
        } else {
            $('.move-top').fadeOut(200);
        }
    });
    
    $(".move-top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });


})
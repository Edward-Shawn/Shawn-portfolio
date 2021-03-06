$(document).ready(function(){

    var activateNav = function () {

        $(".gnb li").click(function () {
          $(".gnb").removeClass("on");
            $(".menu-bg").removeClass("on");

          var liWidth = $(this).width();
          var liLeft = $(this).position().left;
          var liIndex = $(this).index();
          var pagePos = $("section").eq(liIndex).offset().top;
         
    
          $(".gnb li").removeClass("active");
          $(this).addClass("active");
    
          $(this).siblings("span").width(liWidth);
          $(".gnb span").animate({ left: liLeft },200);
    
          $("html,body").animate({ scrollTop: pagePos + -60 }, 300);
          // pagePos 뒤의 + 숫자가 이동 마진 값을 정함
        });
    
        $(".gnb li").eq(0).trigger("click");
      }
    
      activateNav();
    
      //header activate when scorll down and up

      var activateHeader = function () {
        $(window).scroll(function () {
            
          var scroll = $(window).scrollTop();
    
          for (var i = 0; i < $("section").length; i++) {

            var secTop = $("section").eq(i).offset().top;
            var secBtm = secTop + $("section").eq(i).outerHeight();
            var liWidth = $(".gnb li").eq(i).outerWidth();
            var liLeft = $(".gnb li").eq(i).position().left;
            var winHeight = $(window).height();
            var scrollBtm = $(".wrap").height() - winHeight - 1;
            console.log(scrollBtm);
    
            if (scroll >= secTop - 150 && scroll < secBtm - 1) {
              $(".gnb li").eq(i).addClass("active");
              $(".gnb").find("span").width(liWidth);
              $(".gnb").find("span").stop().animate({ left: liLeft }, 200);
            } else {
              $(".gnb li").eq(i).removeClass("active");
            }
    
          }
        });
      }
    
      activateHeader();  

      $(window).resize(function(){
        winWidth = $(window).width();
        if(winWidth > 859){
          var scroll = $(window).scrollTop();
          $("html,body").animate({scrollTop:scroll + 1}, 1);
        }
      });

})
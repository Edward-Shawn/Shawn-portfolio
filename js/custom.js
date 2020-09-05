$(window).ready(function(){

    $(".pages").hide();
    $(".view-all").hide();

    $(".click").click(function(){
        $(".click").removeClass("active");
        $(this).addClass("active");

        if($(".click.one").hasClass("active")){
            $(".view-all").hide();
            $(".pages").show();
        }

        if($(".click.all").hasClass("active")){
            $(".pages").hide();
            $(".view-all").show();
      

        }

       
    })

    
    
    $(".click.one").click(function(){
        $(".works-background").css('height','50%')
    })

    $(".click.all").click(function(){
        $(".works-background").css('height','60%')
    })


    $(".click").eq(1).trigger("click");
    



    $(".button-group button").click(function(){
        $("button").removeClass("active");
        $(this).addClass("active");
    })



   
})
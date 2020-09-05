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
    



    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });


    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    // filter .metal items
    $grid.isotope({ filter: '.one' });
    $grid.isotope({ filter: '.two' });
    $grid.isotope({ filter: '.three' });

    // show all items
    $grid.isotope({ filter: '*' });
})
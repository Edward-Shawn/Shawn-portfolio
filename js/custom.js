$(window).ready(function(){

    $(".click").click(function(){
        $(".click").removeClass("active");
        $(this).addClass("active");

        if($(".click.one").hasClass("active")){
            $(".view-all").css('display','none')
            $(".pages").css('display','block')
        }

        if($(".click.all").hasClass("active")){
            $(".pages").css('display','none')
            $(".view-all").css('display','block')
        }
    })

    




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
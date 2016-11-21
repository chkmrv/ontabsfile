$(function(){

    $('.jh-checkbox').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('checked');
        var ul_check = $(this).closest('span').find('input');
        if (!$(ul_check).is('checked')) {
            $(ul_check).attr('checked', true);
        } else {
            $('input:checkbox').attr('checked', true);
        }
    });

    $('#for_releat-radio').click(function(){
        $('#for_releat-radio').toggleClass('checked');
        $('#for_releat').attr('checked', true);
    });

    $('#date_maker-radio').click(function(){
        $('#date_maker-radio').toggleClass('checked');
        $('#date_maker').attr('checked', true);
    });

    $('.welcome-body').click(function(){
        animateDiv('.dropdown-list');
        $('.dropdown-list').toggleClass('show');
    });

    $('.list-mobile').on('click','a.subcatalog',function(e){ 
        e.preventDefault();
        var ul_list = $(this).closest('li').find('ul:first');
        if (!$(ul_list).is(':animated')) {
            animateDiv(ul_list);
        }
        ul_list.toggleClass('show');  
    })

	$('.top-icon-menu').on('click', 
        (function() {
              
        	var widthMob = $('.mobile-nav').width();
                var tmp = $('.content').css("left");
        	if (tmp == -widthMob+"px") {
        		$('.content').animate({
        			left: "0",
        		}, 500 );
                        $('.mobile-nav').animate({
                               right: -widthMob+"px",
                        }, 500 );
        	} else {
        		$('.content').animate({
	        		left: -widthMob+"px",
	        	}, 500 );
                        $('.mobile-nav').animate({
                               right: "0px",
                        }, 500 );
        	}
                   
        })
    );

    $('.change-password').click(function(e){
            animateDiv('block-change-password');
            $('.block-change-password').toggleClass('show');
            return false;
        });
    function animateDiv(tmp) {
        $(tmp).animate({
            "height": "toggle"
        }, 800);
    }
 });

$(window).resize(function () {
    
    var widthMob = $('.mobile-nav').width();
        var tmp = $('.content').css("left");
    if (tmp == -widthMob+"px") {
        $('.content').animate({
            left: "0",
        }, 500 );
        $('.mobile-nav').animate({
               right: -widthMob+"px",
        }, 500 );
     }
    if ($('.mobile-nav').css('right') == "0px") {
        $('.content').animate({
            left: "0",
        }, 500 );
         $('.mobile-nav').animate({
               right: -widthMob+"px",
        }, 500 );
    }    
    
});
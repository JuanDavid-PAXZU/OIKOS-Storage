$(document).ready(function () {

    /**** desplegar menu principal en movil ****/

    $('.btn_menu_movil').click(function(){
        
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.nav').removeClass('active');
        }else{
            $(this).addClass('active');
            $('.nav').addClass('active');
        }
    });

    /**** desplegar submenu en movil al click ****/
    if($(window).width() < 1051){
        $('nav ul li').click(function(){
            $(this).children('.submenu').slideToggle('fast');
        });
    }

    /****slider hero****/
    var swiper = new Swiper(".slider_banner .swiper-container", {
        simulateTouch: false,
        navigation: {
          nextEl: ".slider_banner .swiper-button-next",
          prevEl: ".slider_banner .swiper-button-prev",
        },
    });

    /****slyder testimonios home****/

    let swiper2 = new Swiper(".cnt_slider_textm .swiper-container", {
        simulateTouch: false,
        navigation: {
          nextEl: ".cnt_slider_textm .swiper-button-next",
          prevEl: ".cnt_slider_textm .swiper-button-prev",
        },
    });
    /******************/

    /*********
    Aplica smaller al header con sccroll
    **********/
    $(function () {
        $('a[href*=\\#]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*----detectar elemento entrar viewport para animacion */

    if ($(window).width() >= 1200) {

        $.fn.isInViewport = function() {
           var elementTop = $(this).offset().top;
           var elementBottom = elementTop + $(this).outerHeight();
    
           var viewportTop = $(window).scrollTop();
           var viewportBottom = viewportTop + $(window).height();
    
           return elementBottom > viewportTop && elementTop < viewportBottom;
         };
    
    
        $(window).on('resize scroll', function() {
    
            $('.in_top, .in_down, .in_left, .in_right, .esp_anim').each(function() {
    
                if($(this).isInViewport()){
    
                    $(this).addClass('act_anim');
                }
    
            });
    
         });
    }else{
        $('.in_top, .in_down, .in_left, .in_right, .esp_anim').addClass('act_anim');
    }


    /* FUNCION INTERNA QUIENES SOMOS - FECHAS */

    let btnFecha = document.querySelectorAll('.fechas a');
    let containerCategoria = document.querySelectorAll('.desc_fechas');
    let categoria = null;

    btnFecha.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            btnFecha.forEach((deletClassBtn) =>{
                deletClassBtn.classList.remove('active');
                e.currentTarget.classList.add('active');
            });

            containerCategoria.forEach((el) => {

                categoria = el.dataset.categoria;

                if(e.currentTarget.dataset.categoria === categoria){
                    el.classList.add('active');
                }else{
                    el.classList.remove('active');
                }
                
            });

        })
    })


    /* FUNCION ARROWS FOOTER */

    function navFooter(){
    
        let btn = document.querySelectorAll('.col_mid_men_pie .h_cl_pie');
        let container = document.querySelectorAll('.menu_pie');
        
        $(btn).click( function(){

            if( $(this).hasClass('active') ){
                $(this).next(container).slideUp();
                $(this).removeClass('active');
            }else{
                $(container).slideUp();
                $(btn).removeClass('active');
                $(this).addClass('active');
                $(this).next().slideToggle();
            }

        });

    }

    if ($(window).width() < 768) {
        navFooter();
    }
    
});



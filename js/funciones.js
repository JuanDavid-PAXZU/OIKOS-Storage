$(document).ready(function () {

    /****slider hero****/
    var swiper = new Swiper(".slider_banner .swiper-container", {
        simulateTouch: false,
        navigation: {
          nextEl: ".slider_banner .swiper-button-next",
          prevEl: ".slider_banner .swiper-button-prev",
        },
    });


    /****carrusel ****/

    


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
});



$(document).ready(function(){
    $('#menu-inicio').click(function(){
        $('#inicio').animatescroll({padding:100});
    });
    $('#menu-servicios').click(function(){
        $('#servicios').animatescroll({padding:150});
    });
    $('#menu-portafolio').click(function(){
        $('#portafolio').animatescroll({padding:20});
    });
    $('#menu-contacto').click(function(){
        $('#contacto').animatescroll();
    });
    $('.carousel').carousel({
        interval: 1000
    });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $('#portafolio1-img').mouseover(function(){
        $('#portafolio-img-1').hide(500);
        $('#portafolio-btn-1').show(600);
    });
    $('#portafolio1-img').mouseleave(function(){
        $('#portafolio-img-1').show(500)
        $('#portafolio-btn-1').hide(200);
    });
    $('#portafolio2-img').mouseover(function(){
        $('#portafolio-img-2').hide(500);
        $('#portafolio-btn-2').show(600);
    });
    $('#portafolio2-img').mouseleave(function(){
        $('#portafolio-img-2').show(500)
        $('#portafolio-btn-2').hide(200);
    });
    $('#portafolio3-img').mouseover(function(){
        $('#portafolio-img-3').hide(500);
        $('#portafolio-btn-3').show(600);
    });
    $('#portafolio3-img').mouseleave(function(){
        $('#portafolio-img-3').show(500)
        $('#portafolio-btn-3').hide(200);
    });
    $('#portafolio4-img').mouseover(function(){
        $('#portafolio-img-4').hide(500);
        $('#portafolio-btn-4').show(600);
    });
    $('#portafolio4-img').mouseleave(function(){
        $('#portafolio-img-4').show(500)
        $('#portafolio-btn-4').hide(200);
    });
    $('#portafolio5-img').mouseover(function(){
        $('#portafolio-img-5').hide(500);
        $('#portafolio-btn-5').show(600);
    });
    $('#portafolio5-img').mouseleave(function(){
        $('#portafolio-img-5').show(500)
        $('#portafolio-btn-5').hide(200);
    });
    $('#portafolio6-img').mouseover(function(){
        $('#portafolio-img-6').hide(500);
        $('#portafolio-btn-6').show(600);
    });
    $('#portafolio6-img').mouseleave(function(){
        $('#portafolio-img-6').show(500)
        $('#portafolio-btn-6').hide(200);
    });
    $('#portafolio7-img').mouseover(function(){
        $('#portafolio-img-7').hide(500);
        $('#portafolio-btn-7').show(600);
    });
    $('#portafolio6-img').mouseleave(function(){
        $('#portafolio-img-7').show(500)
        $('#portafolio-btn-7').hide(200);
    });

    var $button = $.backToTop({

        // background color
        backgroundColor: '#5D5D5D',
    
        // text color
        color: '#FFFFFF',
    
        // container element
        container: this._body, 
    
        // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
        effect: 'spin',
    
        // enable the back to top button
        enabled: true, 
    
        // width/height of the back to top button
        height: 40,  
        width: 40,
    
        // icon
        icon: 'fas fa-chevron-up',
    
        // margins 
        marginX: 20,
        marginY: 20,  
    
        // bottom/top left/right
        position: 'bottom right',           
    
        // trigger position
        pxToTrigger: 600,
    
        // or 'fawesome'
        theme: 'default',
    
        // z-index
        zIndex: 999
        
    });
});
function enviarCorreo(){
    var asuntoCorreo = "Contacto de trabajo";
    var bodyCorreo = "Hola Juliette soy " + $('#nombreCorreo').val() + ", \n" + $('#msjCorreo').val();
    window.open("mailto:juliettecontreras99@gmail.com?subject="+asuntoCorreo+"&body="+bodyCorreo, '_blank');
}
Content-Security-Policy: trusted-types 'none';
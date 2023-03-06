$(document).ready(function(){
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        };
    });
    $('.tap2').click(function(){
        $('.tap1 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap2 .fa-solid').css('color','rgba(13,76,62)');
        $('.tap3 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap4 .fa-regular').css('color','rgba(0,0,0,0.5)');
        $('.tap5 .fa-solid').css('color','rgba(0,0,0,0.5)');
    })
    $('.tap1').click(function(){
        $('.tap1 .fa-solid').css('color','rgba(13,76,62)');
        $('.tap2 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap3 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap4 .fa-regular').css('color','rgba(0,0,0,0.5)');
        $('.tap5 .fa-solid').css('color','rgba(0,0,0,0.5)');
    })
    $('.tap3').click(function(){
        $('.tap1 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap2 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap3 .fa-solid').css('color','rgba(13,76,62)');
        $('.tap4 .fa-regular').css('color','rgba(0,0,0,0.5)');
        $('.tap5 .fa-solid').css('color','rgba(0,0,0,0.5)');
    })
    $('.tap4').click(function(){
        $('.tap1 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap2 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap3 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap4 .fa-regular').css('color','rgba(13,76,62)');
        $('.tap5 .fa-solid').css('color','rgba(0,0,0,0.5)');
    })
    $('.tap5').click(function(){
        $('.tap1 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap2 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap3 .fa-solid').css('color','rgba(0,0,0,0.5)');
        $('.tap4 .fa-regular').css('color','rgba(0,0,0,0.5)');
        $('.tap5 .fa-solid').css('color','rgba(13,76,62)');
    })
})
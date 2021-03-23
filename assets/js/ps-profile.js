/*global $ , document*/

$(document).ready(function () {

    'use strict';

    // Open PS-Page ------------------------------
    var psPage = $(".ps-page");

    $('.open').on('click', function () {
        psPage.toggleClass('hide');
        psPage.toggleClass("page-open");
    });

    $(".page-container").on('click', function () {
        psPage.removeClass('hide');
        psPage.addClass("page-open");
    });


    // Typed -------------------------------------
    var typed = new Typed('#typed', {
        stringsElement: '#typed-services',
        typeSpeed:70,
        backSpeed:70,
        showCursor:false,
        loop: true,
    });

    // Owel Carousel ------------------------------
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop:true
    });


    
    // Portfolio ------------------------------
    // Details ---------------
    var detailsClose = $('.d-header'),
        detailsShow =$('.details-show');

    $(detailsClose).on('click',function () {

        $(this).parent().toggleClass('show');

    });

    $(detailsShow).on('click',function () {

        $(this).parent().siblings(".p-details").toggleClass('show');
    });

    
    
    // Images ---------------
    $('.portfolio-row').magnificPopup({
        delegate: '.image-show', 
        type: 'image',
        gallery:{enabled:true}

    });
    
    
    
    
    // Videos ---------------
    $('.video-show').magnificPopup({  
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
        
    });
    
    // Contact Label--------------------------
    $('.form-control').on('focus', function() {
        $(this).siblings('label').addClass('active');
    });
    
    $('.form-control').on('blur', function() {
        
        if ($(this).val().length == '') {
            $(this).siblings('label').removeClass('active');
        }
        
    });
    
    // Preload--------------------------
    $(window).on('load', function() {
        $('.preloader').fadeOut();
    });
});
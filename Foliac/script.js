;(function ($) {
    // external js: isotope.pkgd.js


// init Isotope
//     var $grid = $('.grid').isotope({
//         itemSelector: '.element-item',
//         layoutMode: 'fitRows',
//         getSortData: {
//             name: '.name',
//             symbol: '.symbol',
//             number: '.number parseInt',
//             category: '[data-category]',
//             weight: function( itemElem ) {
//                 var weight = $( itemElem ).find('.weight').text();
//                 return parseFloat( weight.replace( /[\(\)]/g, '') );
//             }
//         }
//     });
//
// // bind sort button click
//     $('.sort-by-button-group').on( 'click', 'button', function() {
//         var sortValue = $(this).attr('data-sort-value');
//         $grid.isotope({ sortBy: sortValue });
//     });
//
// // change is-checked class on buttons
//     $('.button-group').each( function( i, buttonGroup ) {
//         var $buttonGroup = $( buttonGroup );
//         $buttonGroup.on( 'click', 'button', function() {
//             $buttonGroup.find('.is-checked').removeClass('is-checked');
//             $( this ).addClass('is-checked');
//         });
//     });

    $('.link-button').click(function () {
        $('.modal-window').css('display', 'block');
        $('body').css({'overflow': 'hidden', 'height': '100vh'});
        setTimeout(function() {
            $('.guy').animate({right: '0px'});
        }, 800);
        setTimeout(function() {
            $('.guy').animate({right: '-300px'});
        }, 1500);
    });
    $('.modal-window').click(function (e) {
        if (e.target.className === 'modal-window') {
            $(this).css('display', 'none');
            $('body').css({'overflow': 'auto', 'height': 'auto'});
        }
    });
    $('.close').click(function () {
        $('.modal-window').css('display', 'none');
    });
})(jQuery);





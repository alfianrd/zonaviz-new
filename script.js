jQuery(document).ready(function($) {
    $('#open-navbar-left').on('click', function() {

        console.log('tes');
        $('.navbar-left').css('transform', 'translateX(0%)');
    });
    $('#close-navbar-left').on('click', function() {

        console.log('tes');
        $('.navbar-left').css('transform', 'translateX(-100%)');
    });
});
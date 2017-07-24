/**
 * Created by lfase on 30.06.2017.
 */

jQuery(document).ready(function($) {
    $('#lightSlider').lightSlider({
        item: 2,
        adaptiveHeight: true,
        slideMove:1,
        speed:500,
        slideMargin:30,
        loop:true,
        rtl:false,
        auto:true,
    });
    svg4everybody();
});

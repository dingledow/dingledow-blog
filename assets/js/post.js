/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        var src = $('img.post_header').attr('src');
        var position = $('img.post_header').data('position');

        console.log(position);

        $('div.post_header').css("background-image", "radial-gradient(transparent, rgba(0,0,0,0.3)), url(" + src + ")");
        $('img.post_header').css("display", "none");
        $('div.post_header').css("backgroundPosition", position);

    });

}(jQuery));
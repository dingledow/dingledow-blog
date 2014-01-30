/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        var src = $('img.post_header').attr('src');

        $('div.post_header').css("background-image", "url(" + src + ")");

    });

}(jQuery));
/**
 * Created by gkardas on 17/02/15.
 */
(function ($) {
    $.gImageDetector = function(options){
        var defaults = {
            defaultImagePath : ''
        };
        var options = $.extend(defaults,options);


        $("img").on('error',function(e,ui){
            var target = jQuery(this);
            target.attr('src',options.defaultImagePath);
        });

        $("img").one('load',function(){
            var target = jQuery(this);
            this.naturalWidth = this.naturalWidth || -1;
            if(this.naturalWidth !== -1){
                if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                    replaceImgUrls(staticFileUrl, target);
                    target.attr('src',options.defaultImagePath);
                }
            }
        }).each(function() {
            if(this.complete) $(this).load();
        });



    }
})($);
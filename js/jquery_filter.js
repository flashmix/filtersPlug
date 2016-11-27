(function($) {

    $.fn.jquery_filer = function(conf) {
        var conf = $.extend({
            filter: 'brightness'
        }, conf)

        var start = function() {
            var section = $(this).parent();
            var bgImg = $(this).css('background-image');
            section.append('<div class="filtered">');
            $('.filtered').css('background-image', bgImg);

            switch (conf.filter) {
                case 'grayscale':
                    {
                        $('.filtered').addClass('grayscale');
                    }
                    break;
                case 'blur':
                    {
                        $('.filtered').addClass('blur');
                    }
                    break;
                case 'brightness':
                    {
                        $('.filtered').addClass('brightness');
                    }
                    break;
                case 'opacity':
                    {
                        $('.filtered').addClass('opacity');
                    }
                    break;
            }
        }
        return this.each(start)
    }

}(jQuery))
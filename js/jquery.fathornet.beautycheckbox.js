(function($){
    $.fn.BeautyCheckbox = function(opt){
        
        var settings = $.extend({
            'parentHTML':''
        });
        
        this.each(function(){
            var t = $(this), p = ((settings.parentHTML != '') ? t.parents(settings.parentHTML) : t.parent()), txt = p.text(), el = $('<div class="beautychk-container"><a href="#"><span class="beautychk-icon"></span><span class="beautychk-text">'+txt+'</span></a></div>');
            
            p.hide(0);
            p.after(el);
            
            if (p.find('input[type="checkbox"]')[0].checked) {
                el.find('a').addClass('checked');
            }
        });
        
        function exec(p, t){
            if (t.hasClass('checked')) {
                t.removeClass('checked');
                p.find('input[type="checkbox"]').prop('checked', false);
            }else{
                t.addClass('checked');
                p.find('input[type="checkbox"]').prop('checked', true);
            }
        }
        
        $('.beautychk-container > a').click(function(e){
            var p = $(this).parents('.beautychk-container').prev();
            exec(p, $(this))
            e.preventDefault();
        }).keyup(function(e){
            if(e.keyCode == 32){
                var p = $(this).parents('.beautychk-container').prev();
                exec(p, $(this))
                e.preventDefault();
            }
        });
        
        return this;
    }
}(jQuery));
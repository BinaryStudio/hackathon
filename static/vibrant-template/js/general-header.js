<!-- BEGIN SLIDE-IN MENU ITEMS -->
jQuery(document).ready(function ($) {
    jQuery('.menu ul').slideUp(0);

    jQuery('.menu li.sub').click(function () {

		/* click events */
        var target = jQuery(this).children('a');
        if(target.hasClass('menu-expanded')){
			setTimeout(function(){
	            target.removeClass('menu-expanded');
			},350);
        } else {
            jQuery('.menu-item > a').removeClass('menu-expanded');
            target.addClass('menu-expanded');
        }
        jQuery(this).find('ul:first')
                    .slideToggle(350)
                    .end()
                    .siblings('li')
                    .find('ul')
                    .slideUp(350);
	
    });
});
<!-- END SLIDE-IN MENU ITEMS -->
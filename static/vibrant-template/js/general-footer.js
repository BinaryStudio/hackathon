<!-- BEGIN SHOW/HIDE MAIN MENU -->
jQuery('.menu-button').on('touchstart click', function(e) {
e.preventDefault();

if(e.type == "touchstart") {

	/* touchstart events */
	if(jQuery('#menu').hasClass('menu-active'))
	{

		/* enable scroll */
		setTimeout(function(){
			jQuery('body').removeClass('overflow-hidden');
			jQuery('html').removeClass('overflow-hidden');
		},500);

		/* hide overlay div */
		jQuery('#menu-open-overlay').removeClass('menu-open-overlay-active');

		/* page background color */
		jQuery('.menu-open-background').removeClass('menu-open-background-fade');

		/* menu elements */
		setTimeout(function(){
			jQuery("#menu").removeClass("menu-active");
		},100);

		/* content elements */
		jQuery('.wrapper-outer').removeClass('wrapper-outer-active-position');
		jQuery('.wrapper-outer').removeClass('wrapper-outer-active-scale');

		/* show .showing */
		jQuery('.showing').removeClass('showing-hide');

		/* show .post-nav */
		jQuery('.post-nav').removeClass('post-nav-fade');
		jQuery('.post-nav').removeClass('post-nav-hide');

	} else {

		/* toggle overlay div */
		jQuery('#menu-open-overlay').addClass('menu-open-overlay-active');

		/* page background color */
		jQuery('.menu-open-background').addClass('menu-open-background-fade');

		/* content elements */
		jQuery('.wrapper-outer').addClass('wrapper-outer-active-scale');
		jQuery('.wrapper-outer').addClass('wrapper-outer-active-position');

		/* toggle .showing */
		jQuery('.showing').addClass('showing-hide');
		
		/* toggle .post-nav */
		jQuery('.post-nav').addClass('post-nav-fade');
		setTimeout(function(){
			jQuery('.post-nav').addClass('post-nav-hide');
		},500);

		/* menu elements */
		jQuery('#menu').addClass('menu-active');

		/* disable scroll */
		setTimeout(function(){
			jQuery('body').addClass('overflow-hidden');
			jQuery('html').addClass('overflow-hidden');
		},750);

	}

} else if(e.type == "click") {

	/* click events */
	if(jQuery('#menu').hasClass('menu-active'))
	{

		/* enable scroll */
		setTimeout(function(){
			jQuery('body').removeClass('overflow-hidden');
			jQuery('html').removeClass('overflow-hidden');
		},500);

		/* hide overlay div */
		jQuery('#menu-open-overlay').removeClass('menu-open-overlay-active');

		/* page background color */
		jQuery('.menu-open-background').removeClass('menu-open-background-fade');

		/* menu elements */
		setTimeout(function(){
			jQuery("#menu").removeClass("menu-active");
		},100);

		/* content elements */
		jQuery('.wrapper-outer').removeClass('wrapper-outer-active-position');
		jQuery('.wrapper-outer').removeClass('wrapper-outer-active-scale');

		/* show .showing */
		jQuery('.showing').removeClass('showing-hide');

		/* show .post-nav */
		jQuery('.post-nav').removeClass('post-nav-fade');
		jQuery('.post-nav').removeClass('post-nav-hide');

	} else {

		/* toggle overlay div */
		jQuery('#menu-open-overlay').addClass('menu-open-overlay-active');

		/* page background color */
		jQuery('.menu-open-background').addClass('menu-open-background-fade');

		/* content elements */
		jQuery('.wrapper-outer').addClass('wrapper-outer-active-scale');
		jQuery('.wrapper-outer').addClass('wrapper-outer-active-position');

		/* toggle .showing */
		jQuery('.showing').addClass('showing-hide');
		
		/* toggle .post-nav */
		jQuery('.post-nav').addClass('post-nav-fade');
		setTimeout(function(){
			jQuery('.post-nav').addClass('post-nav-hide');
		},500);

		/* menu elements */
		jQuery('#menu').addClass('menu-active');

		/* disable scroll */
		setTimeout(function(){
			jQuery('body').addClass('overflow-hidden');
			jQuery('html').addClass('overflow-hidden');
		},750);

	}

}
});
<!-- END SHOW/HIDE MAIN MENU -->

<!-- BEGIN HIDE WHEN CLICKED/TAPPED OUTSIDE MENU -->
jQuery('#menu-open-overlay').on('click', function() {
	
	/* enable scroll */
	setTimeout(function(){
		jQuery('body').removeClass('overflow-hidden');
		jQuery('html').removeClass('overflow-hidden');
	},500);

	/* hide overlay div */
	jQuery('#menu-open-overlay').removeClass('menu-open-overlay-active');
		
	/* page background color */
	jQuery('.menu-open-background').removeClass('menu-open-background-fade');

	/* menu elements */
	jQuery("#menu").removeClass("menu-active");

	/* content elements */
	jQuery('.wrapper-outer').removeClass('wrapper-outer-active-position');
	jQuery('.wrapper-outer').removeClass('wrapper-outer-active-scale');
	
	/* show .showing */
	jQuery('.showing').removeClass('showing-hide');
	
	/* show .post-nav */
	jQuery('.post-nav').removeClass('post-nav-fade');
	jQuery('.post-nav').removeClass('post-nav-hide');

});
<!-- END HIDE WHEN CLICKED/TAPPED OUTSIDE MENU -->


<!-- BEGIN AUTO-EXPAND TEXTAREA -->
jQuery(document).ready(function() {
	jQuery( "textarea" ).autogrow();
});
<!-- END AUTO-EXPAND TEXTAREA -->


<!-- BEGIN TEXTAREA/FIELD EMPTY ON CLICK -->
function onBlur(el) {
    if (el.value == '') {
        el.value = el.defaultValue;
    }
}
function onFocus(el) {
    if (el.value == el.defaultValue) {
        el.value = '';
    }
}
<!-- END TEXTAREA/FIELD EMPTY ON CLICK -->
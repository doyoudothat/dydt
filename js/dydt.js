jQuery(document).ready(function() {

	// VSM - Very Simple Menu
	jQuery("a.formula").click(function(e){
        e.preventDefault();
		jQuery("body,html").animate({scrollTop: jQuery(".service").position().top }, "slow");
	});
	jQuery("a.about").click(function(e){
        e.preventDefault();
		jQuery("body,html").animate({scrollTop: jQuery(".aboutus").position().top }, "slow");
	});	
	jQuery("a.contactus").click(function(e){
        e.preventDefault();
		jQuery("body,html").animate({scrollTop: jQuery(".contact").position().top }, "slow");
	});		
});
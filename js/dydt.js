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

jQuery(document).ready(function(){
	jQuery("#contact-frm").submit(function(){
	event.preventDefault();
    var contactnm = jQuery("#contactnm").val();
    var contacttel = jQuery( "#contacttel" ).val();
    var contactem = jQuery( "#contactem" ).val();
    var contactq = jQuery( "#contactq" ).val();
    
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'contactnm='+contactnm+'&contacttel='+contacttel+'&contactem='+contactem+'&contactq='+contactq;

    if(contactem === "" && contactq === "") {
     alert("Please kindly complete the Email and How can we help you fields"); 
    } else {
      // AJAX Code To Submit Form.
      jQuery.ajax({
      type: "POST",
      url: "inc/sendmemail.php",
      data: dataString,
      cache: false,
      success: function(result){
      	jQuery('#contact-frm').hide();
        jQuery('.contactlft').html("<div id='message'></div>");
        jQuery('#message').html('<br/><p>Thank you, we have sent your submission off. We will be in touch with you shortly.</p>');
      }
    });
    }
    return false;
    });
});
<?php


$form_fields = array(
            'contactnm',
            'contacttel',
            'contactem',
            'contactq'
        );
        
         // Entify each field value to go some way to prevent oddities and hacks
         foreach ($form_fields as $this_field_name) {
                $this_field_value = trim($_POST[$this_field_name]);
                        if ($this_field_value) {
                                $GLOBALS[$this_field_name] = htmlentities(str_replace('\\','',$this_field_value),ENT_QUOTES,'UTF-8');
                        } else {
                                $GLOBALS[$this_field_name] = NULL;
                        }
                }
        
                foreach ($form_fields as $this_field_name) {
            $GLOBALS[$this_field_name] = @html_entity_decode($GLOBALS[$this_field_name],ENT_QUOTES,'UTF-8');
        }

    $email_message = 'Hey Do You Do That - ' . $contactnm . ' has submitted the form with email ' . $contactem . ' and they need help with:- 
    ' . $contactq . '. Their phone number is ' . $contacttel ;
    $headers  = "Do You Do That <hey@doyoudothat.co.uk>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html\r\n";

    mail("hey@doyoudothat.co.uk","Someone needs our help!", $email_message,"From: ".$headers.""); // make it so
<?php 
    $toEmail = "rfennell001@gmail.com";
    $mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["message"], $mailHeaders)) {
        print "<p class='success'>Mail Sent. Thank you! I'll respond as soon as possible.</p>";
    } else {
        print "<p class='Error'>Error in Sending Mail.</p>";
    }
?>
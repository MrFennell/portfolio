<?php 
// $name = $_POST['name'];
// $email = $_POST['email'];
// $message = $_POST['message'];
// $formcontent="From: $name \n Message: $message";
// $recipient = "rfennell001@gmail.com";
// $subject = "Webfennell Contact Form";
// $mailheader = "From: $email \r\n";
// mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
// header("Location: http://fennellweb.com/sites/portfolio");
// echo '<script type="text/javascript">alert("Thank you for contacting!");</script>';
    $toEmail = "rfennell001@gmail.com";
    $mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["message"], $mailHeaders)) {
        print "<p class='success'>Mail Sent. Thank you! I'll respond as soon as possible.</p>";
    } else {
        print "<p class='Error'>Error in Sending Mail.</p>";
    }
?>
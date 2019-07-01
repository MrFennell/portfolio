<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "rfennell001@gmail.com";
$subject = "Webfennell Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("Location: http://fennellweb.com/sites/portfolio");
echo '<script type="text/javascript">alert("Thank you for contacting!");</script>';

?>
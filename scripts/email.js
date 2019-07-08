function sendContact() {
    
    var valid;	
    valid = validateContact();
    
    if(valid) {
        jQuery.ajax({
            url: "email.php",
            data:'name='+$("#name").val()+'&email='+
            $("#email").val()+'&subject='+
            $("#subject").val()+'&message='+
            $(message).val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data),
                $("#contactForm").css('display', 'none');
            },
            error:function (){}
        });
    }
}
function validateContact() {
  var valid = true;	
  $(".form-control").css('background-color','#fff');
  $(".info").html('');
  if(!$("#name").val()) {
      $("#name-info").html(" (required)");
      $("#name").css('background-color','#FFFFDF');
      valid = false;
  }
  if(!$("#email").val()) {
      $("#email-info").html(" (required)");
      $("#email").css('background-color','#FFFFDF');
      valid = false;
  }
  if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
      $("#email-info").html(" (invalid email address)");
      $("#email").css('background-color','#FFFFDF');
      valid = false;
  }
  if(!$("#message").val()) {
      $("#message-info").html(" (required)");
      $("#message").css('background-color','#FFFFDF');
      valid = false;
  }
  if(!$("#subject").val()) {
      $("#subject-info").html(" (required)");
      $("#subject").css('background-color','#FFFFDF');
      valid = false;
  }
  return valid;
}
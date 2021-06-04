<?php
    if(isset($_POST['name']))  {
       
        $name = trim($_POST["name"]);
        $surname = trim($_POST["surname"]);
        $email = trim($_POST["email"]);
        $message = trim($_POST["message"]);
        $message .= " /name: ". $name . " /surname: ". $surname ." /email: ". $email ." /message: ". $message;
        $headers =  'From: '.$email. "\r\n" .
        'Reply-To: '.$email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        mail('k.abgaryan@inorain.com',$headers,$message);
        echo "success!";
  }
?>
<!-- put code into htdocs and run mamp-->
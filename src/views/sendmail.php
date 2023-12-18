<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';


$name = $_POST['name'];
// $phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_MESSAGE['message'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->setLanguage('ru', 'phpmailer/language/')


// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'serg310583@mail.ru';                 // Наш логин
$mail->Password = 'S6aaJavigrUdaxS2Q2ZF';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('serg310583@mail.ru', 'Portfolio');   // От кого письмо 
$mail->addAddress('serg31ramblerru1@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные с сайта Портфолио';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>	
	E-mail: ' . $email . '<br>
	Сообщение: ' . $message . '';


if(!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены';
}
$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
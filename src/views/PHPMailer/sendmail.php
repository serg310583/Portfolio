<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message']; // Исправлено здесь

$mail = new PHPMailer(true);

try {
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');

    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'serg310583@mail.ru';
    $mail->Password = 'S6aaJavigrUdaxS2Q2ZF';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('serg310583@mail.ru', 'Portfolio');
    $mail->addAddress('serg310583@yandex.ru');

    $mail->isHTML(true);

    $mail->Subject = 'Данные с сайта Портфолио';
    $mail->Body = '
        Пользователь оставил данные <br> 
        Имя: ' . $name . ' <br>    
        E-mail: ' . $email . '<br>
        Сообщение: ' . $message . '';

    $mail->send();
    $response = ['message' => 'Данные отправлены'];
} catch (Exception $e) {
    $response = ['message' => 'Ошибка: ' . $mail->ErrorInfo];
}

header('Content-type: application/json');
echo json_encode($response);

?>

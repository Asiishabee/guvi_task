<?php
require_once('dbconnection.php');

 $username= mysqli_real_escape_string($connection,$_POST['username']);
 $email=mysqli_real_escape_string($connection,$_POST['email']);
 $password=mysqli_real_escape_string($connection,$_POST['password']);
 $phonenumber=mysqli_real_escape_string($connection,$_POST['phonenumber']);




$stmt=$connection->prepare ('INSERT INTO `user`(`username`, `email`, `password`, `phonenumber`) VALUES (?,?,?,?)');
$stmt->bind_param("ssss", $username, $email,$password,$phonenumber);

$stmt->execute();

echo "success";


?>
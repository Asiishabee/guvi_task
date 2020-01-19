<?php
require_once('dbconnection.php');

 
 $email=mysqli_real_escape_string($connection,$_POST['email']);
 $password=mysqli_real_escape_string($connection,$_POST['password']);
$stmt=$connection->prepare ('SELECT * FROM `user` WHERE email=?   and  password=?  ');  
$stmt->bind_param("ss",  $email,$password);    
 
$stmt->execute();  


$result = $stmt->get_result();

if($result->num_rows === 0) exit('No rows');
    while($row = $result->fetch_assoc()) {
      $userdata['username'] = $row['username'];
      $userdata['email'] = $row['email'];
      $userdata['phonenumber'] = $row['phonenumber'];
    }

$jsondata = json_encode($userdata);

echo ($jsondata);

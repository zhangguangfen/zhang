<?php
/* 
    如果要用login.php处理登陆
    传入用户名必须使用username这个键
    传入密码必须使用password这个键
*/

include './base.php';
require('./modelUser/_connectuser.php');
$uemail = $_GET['email'];//获取前端传递的用户名
$upass = $_GET['password'];//获取前端传递的密码
$sql = "SELECT * FROM `info` WHERE `email`='$uemail' AND `password`='$upass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
mysqli_close($conn);
if($row){
    echo true;
}else{
    echo "用户名或密码错误!";
}




?>
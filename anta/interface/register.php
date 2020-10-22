<?php

// 解决中文乱码 
include './base.php';
require('./modelUser/_connectuser.php');
$uemail = $_POST['email'];//获取前端传递的邮箱地址
$upass = $_POST['password'];//获取前端传递的密码
  
// 2-1 连接数据库
// 2-2 执行sql语句 
$sql = "insert into `info`(`email`,`password`) values('$uemail','$upass')";
$res = mysqli_query($conn,$sql);
mysqli_close($conn);
if($res){
    //echo $res
    //如果$res为true,说明插入成功
    //跳转登录页面
    //header('../pages/login.html');
    echo true;

}else{
    //如果$res为false,说明$sql有语法错误
    echo "服务器错误";
}

?>
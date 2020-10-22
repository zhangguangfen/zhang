<?php
require('./_connectuser.php');

//书写sql语句
$sql = "CREATE TABLE info (
			id VARCHAR(300) NOT NULL PRIMARY KEY,
			email VARCHAR(300) NOT NULL,
			password VARCHAR(300) NOT NULL,
			submission_date TIMESTAMP	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>
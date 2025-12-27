<?php
require("../../class/connect.php");
require("../../class/db_sql.php");
require("../../class/q_functions.php");
require("../../member/class/user.php");
require "../".LoadLang("pub/fun.php");
include('../../data/dbcache/class.php');
require("class.php");
$link=db_connect();
$empire=new mysqlquery();
$editor=1;
$id=(int)$_POST[id];
$classid=(int)$_POST[classid];
if($id && $classid){
	$tbname=$class_r[$classid][tbname];
	$r=$empire->fetch1("select * from {$dbtbpre}ecms_".$tbname." where id='$id'");
	$user=isloginajax();
	if($user[zt]=="nologin"){
		echo "nologin";exit;
	} else {
	  //判断权限
	  if(!$r[id]){echo "noxx";exit;}
	  $arr=getvideoarr($r[quanxian]);
	  $point=$arr[$user[groupid]];
	  $needpoint=$point?$point:$r[point];
	  $time=time();
	  //判断是否已经购买过
	  $s=$empire->fetch1("select * from {$dbtbpre}ecmsshop_buynr where id='$id' and classid='$classid' and userid='$user[userid]' order by vid desc");
	  if($s[vid]){
			echo "havebuy";exit;  
	  }
	  if($user[userfen]<$needpoint){
			echo "nojb";exit;  
	  }
	  $sql=$empire->query("update {$dbtbpre}enewsmember set userfen=userfen-$needpoint where userid='$user[userid]'");
	  if($sql){
		//增加购买记录
		$sql1=$empire->query("insert into {$dbtbpre}ecmsshop_buynr(id,classid,userid,username,buytime,endtime,day,point) values('$id','$classid','$user[userid]','$user[username]','$time','$endtime','$r[day]','$needpoint')");  
		if($sql1){
			echo "购买成功！";exit;	
		} else {
			echo "dberror";exit;	
		}
	  } else {
			echo "dberror";exit;	 
	  }
	}
} else {
	echo "error";exit;
}

db_close();
$empire=null;
?>
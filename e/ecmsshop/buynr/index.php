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
	$add=$empire->fetch1("select * from {$dbtbpre}ecms_".$tbname."_data_".$r['stb']." where id='$id'");
	$user=isloginajax();
	$zt="ok";
	$bfnr = cut_html_str(stripSlashes($add[sfnr]),0, '...');
	if($user[zt]=="nologin"){
		$nr='<div class="nr">'.$bfnr.'</div><ul class="buy">
			<li>查看更多内容所需点数：<em>'.$r[point].'</em> 点</li>
			<li>请 <a href="/e/member/login/" target="_blank">登陆</a> 后再进行购买!</li>
		</ul>';
	} else {
	  $time=time();
	  //判断是否有购买记录
	  $s=$empire->fetch1("select * from {$dbtbpre}ecmsshop_buynr where id='$id' and classid='$classid' and userid='$user[userid]' order by vid desc");
	  if($s[vid]){
		  $nr=stripSlashes($add['sfnr']);
	  } else {
		  //未购买 判断权限
		  $arr=getvideoarr($r[quanxian]);
		  $point=$arr[$user[groupid]];
		  if($point){
			  $nr='<div class="nr">'.$bfnr.'</div><ul class="buy">
				<li>查看更多内容所需点数：<em>'.$point.'</em> 点</li>
				<li><a href="javascript:void()" onclick="buynr('.$classid.','.$id.','.$point.')" class="buybtn">立刻购买</a></li>
				</ul>';
		  } else {
        if(array_key_exists($user[groupid],$arr)){
          $nr=stripSlashes($add['sfnr']);
        } else {
			  $nr='<ul class="buy">
				<li>所需点数：<em>'.$r[point].'</em> 点</li>
				<li><a href="javascript:void()" onclick="buynr('.$classid.','.$id.','.$r[point].')" class="buybtn">立刻购买</a></li>
				</ul>';
				}
		  }
	  }
	}
} else {
	$zt="error";
	$nr='<ul><li>参数错误!</li></ul>';	
}

$arr=array('zt'=>$zt,'nr'=>$nr);
echo json_encode($arr);

db_close();
$empire=null;
?>
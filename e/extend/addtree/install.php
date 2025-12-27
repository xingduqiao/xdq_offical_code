<?php
define('EmpireCMSAdmin','1');
require('../../class/connect.php');
require('../../class/db_sql.php');
require('../../class/functions.php');
$link=db_connect();
$empire=new mysqlquery();

//验证用户
$lur=is_login();
$logininid=$lur['userid'];
$loginin=$lur['username'];
$loginrnd=$lur['rnd'];
$loginlevel=$lur['groupid'];
$loginadminstyleid=$lur['adminstyleid'];
//ehash
$ecms_hashur=hReturnEcmsHashStrAll();

$do=$_GET['do'];

if($do=='uninstall'){
	$menuclassr=$empire->fetch1("select classid from {$dbtbpre}enewsmenuclass where classname='批量栏目' limit 1");
	$empire->query("delete from {$dbtbpre}enewsmenuclass where classid='$menuclassr[classid]'");
	$empire->query("delete from {$dbtbpre}enewsmenu where classid='$menuclassr[classid]'");
	if(unlink("install.off")){
		die('卸载成功！');
	}else{
		die('文件删除失败，权限不够');
	}
}

if(!file_exists("install.off")){
	$empire->query("insert into `{$dbtbpre}enewsmenuclass` values(NULL,'批量栏目','0','0','2','');");
	$menuclassid=$empire->lastid();
	$empire->query("insert into `{$dbtbpre}enewsmenu` values(NULL,'批量添加','../extend/addtree/add.php','0','$menuclassid','2');");
	//锁定安装程序
	$fp=fopen("install.off","w");
	echo "安装成功";
}
if(!file_exists("install.off")){
	die('插件运行失败，有可能是权限不足');
}

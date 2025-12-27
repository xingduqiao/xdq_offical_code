<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
//oicq
if($addr['oicq'])
{
	$addr['oicq']="<a href='http://wpa.qq.com/msgrd?V=1&amp;Uin=".$addr['oicq']."&amp;Site=".$public_r['sitename']."&amp;Menu=yes' target='_blank'><img src='http://wpa.qq.com/pa?p=1:".$addr['oicq'].":4'  border='0' alt='QQ' />".$addr['oicq']."</a>";
}
//表单
$record="<!--record-->";
$field="<!--field--->";
$er=explode($record,$formr['viewenter']);
$count=count($er);
$memberinfo='';
for($i=0;$i<$count-1;$i++)
{
	$er1=explode($field,$er[$i]);
	if(strstr($formr['filef'],",".$er1[1].","))//附件
	{
		if($addr[$er1[1]])
		{
			$val="<a href='".$addr[$er1[1]]."' target='_blank'>".$addr[$er1[1]]."</a>";
		}
		else
		{
			$val="";
		}
	}
	elseif(strstr($formr['imgf'],",".$er1[1].","))//图片
	{
		if($addr[$er1[1]])
		{
			$val="<img src='".$addr[$er1[1]]."' border=0>";
		}
		else
		{
			$val="";
		}
	}
	elseif(strstr($formr['tobrf'],",".$er1[1].","))//多行文本框
	{
		$val=nl2br($addr[$er1[1]]);
	}
	else
	{
		$val=$addr[$er1[1]];
	}
	$memberinfo.="<tr bgcolor='#FFFFFF'><td height=25>".$er1[0].":</td><td>".$val."</td></tr>";
}

$public_diyr['pagetitle']='查看 '.$username.' 的会员资料';
$url="<a href='../../../'>首页</a>&nbsp;>&nbsp;<a href='../cp/'>会员中心</a>&nbsp;>&nbsp;查看会员资料";
require(ECMS_PATH.'e/template/incfile/header.php');
?>
    <div class="app-content-body ">
	    

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">查看 <?=$username?> 的会员资料&nbsp;&nbsp;&nbsp;&nbsp; [ <a href="../msg/AddMsg/?username=<?=$username?>" target="_blank">发短消息</a> 
            ] [ <a href="../friend/add/?fname=<?=$username?>" target="_blank">加为好友</a> 
            ] [ <a href="../../space/?userid=<?=$r[userid]?>" target="_blank">会员空间</a> ] </h1>
</div>
<div class="wrapper-md">

                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                              <tbody>

<tr>
			<td width="44"  class="td5 tdCenter">用户名</td>
			<td width="200" class="td25 tdCenter">     <?=$username?></td>
			
</tr>
                               
                               
<tr>
<td>会员等级:</td>
<td> <?=$level_r[$r[groupid]]['groupname']?></td>

</tr>

<tr>
<td>注册时间:</td>
<td><?=$registertime?></td>

</tr>

<tr>
<td>邮箱:</td>
<td>  <a href="mailto:<?=$email?>"> 
      <?=$email?>
      </a></td>

</tr>
<?=$memberinfo?>

<tr>
<td>&nbsp;</td>
<td> <input type='button' name='Submit2' value='返回' class="btn btn-primary"onclick='history.go(-1)'></td>

</tr>
</tbody>
</table>


                        </div>
                    </div>
                </div>
                <!-- /.row -->


</div>



	</div>
<?php
require(ECMS_PATH.'e/template/incfile/footer.php');
?>

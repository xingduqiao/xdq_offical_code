<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='登录绑定';
$url="<a href=../../>首页</a>&nbsp;>&nbsp;<a href=../member/cp/>会员中心</a>&nbsp;>&nbsp;登录绑定";
require(ECMS_PATH.'e/template/incfile/header.php');
?>

  	<div class="app-content-body ">
	    
                        <form name=userinfoform method=post enctype="multipart/form-data" action=../doaction.php>
    <input type=hidden name=enews value=EditSafeInfo>

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">登录绑定</h1>
</div>
<div class="wrapper-md">

                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                                <tbody>

<tr class="color1">
			<td class="td5 tdCenter" align="center">平台</td>
			<td class="td25 tdCenter" align="center">绑定时间</td>
            <td class="td25 tdCenter" align="center">上次登录</td>
            <td class="td25 tdCenter" align="center">登录次数</td>
            <td class="td25 tdCenter" align="center">操作</td>
		
	
</tr>
                              
     <?php
  while($r=$empire->fetch($sql))
  {
	  $bindr=$empire->fetch1("select id,bindtime,loginnum,lasttime from {$dbtbpre}enewsmember_connect where userid='$user[userid]' and apptype='$r[apptype]' limit 1");
	  if($bindr['id'])
	  {
		  $dourl='<a href="doaction.php?enews=DelBind&id='.$bindr['id'].'" onclick="return confirm(\'确认要解除绑定?\');">解除绑定</a>';
	  }
	  else
	  {
		  $dourl='<a href="index.php?apptype='.$r['apptype'].'&ecms=1">立即绑定</a>';
	  }
  ?>                           
<tr>
<td align="center"><?=$r['appname']?></td>
<td align="center"> <?=$bindr['bindtime']?date('Y-m-d H:i:s',$bindr['bindtime']):'未绑定'?></td>
<td align="center"> <?=$bindr['lasttime']?date('Y-m-d H:i:s',$bindr['lasttime']):'--'?></td>
<td align="center">  <?=$bindr['loginnum']?></td>
<td align="center"><?=$dourl?></td>


</tr>

<?php
  }
  ?>

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

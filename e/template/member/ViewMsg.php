
<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='查看消息';
$url="<a href=../../../../>首页</a>&nbsp;>&nbsp;<a href=../../cp/>会员中心</a>&nbsp;>&nbsp;<a href=../../msg/>消息列表</a>&nbsp;>&nbsp;查看消息";
require(ECMS_PATH.'e/template/incfile/header.php');
?>
    
    

  	<div class="app-content-body ">
	    
         <form name="form1" method="post" action="../../doaction.php">

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3"><?=stripSlashes($r[title])?> </h1>
</div>
<div class="wrapper-md">

                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                                <tbody>

<tr class="color1">
			<td width="93" align="center" class="td5 tdCenter">发送者:</td>
			<td width="469" class="td25 tdCenter"><a href="../../ShowInfo/?userid=<?=$r[from_userid]?>"> 
                <?=$r[from_username]?>
                </a></td>
		
	
</tr>
<tr class="color1">
			<td width="93" align="center" class="td5 tdCenter">发送时间:</td>
			<td width="469" class="td25 tdCenter">   <?=$r[msgtime]?>    </td>
		
	
</tr>
                              
                               
<tr>
<td align="center">内容:</td>
<td>   <?=nl2br(stripSlashes($r[msgtext]))?>       </td>


</tr>
<tr>
<td align="center">&nbsp;</td>
<td> [<a href="#ecms" onclick="javascript:history.go(-1);"><strong>返回</strong></a>] &nbsp;&nbsp;
                [<a href="../AddMsg/?enews=AddMsg&re=1&mid=<?=$mid?>"><strong>回复</strong></a>] &nbsp;&nbsp;
                [<a href="../AddMsg/?enews=AddMsg&mid=<?=$mid?>"><strong>转发</strong></a>] &nbsp;&nbsp;
                [<a href="../../doaction.php?enews=DelMsg&mid=<?=$mid?>" onclick="return confirm('确认要删除?');"><strong>删除</strong></a>]</td>


</tr>



</tbody>
</table>


                        </div>
                    </div>
                </div>
                <!-- /.row -->


</div>



	</div>  </form>
<?php
require(ECMS_PATH.'e/template/incfile/footer.php');
?>

<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='发送消息';
$url="<a href=../../../../>首页</a>&nbsp;>&nbsp;<a href=../../cp/>会员中心</a>&nbsp;>&nbsp;<a href=../../msg/>消息列表</a>&nbsp;>&nbsp;发送消息";
require(ECMS_PATH.'e/template/incfile/header.php');
?>
  	<div class="app-content-body ">
	    
            <form action="../../doaction.php" method="post" name="sendmsg" id="sendmsg">

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">发送消息</h1>
</div>
<div class="wrapper-md">

                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                                <tbody>

<tr class="color1">
			<td width="93" align="center" class="td5 tdCenter">标题:</td>
			<td width="469" class="td25 tdCenter"><input name="title" type="text" id="title2" value="<?=ehtmlspecialchars(stripSlashes($title))?>" size="43" class="form-control"></td>
		
	
</tr>
                              
                               
<tr>
<td align="center">接收者<font color="red">[<a href="#EmpireCMS" onclick="window.open('../../friend/change/?fm=sendmsg&f=to_username','','width=250,height=360');">选择好友</a>]:</td>
<td><input name="to_username" type="text" id="to_username2" value="<?=$username?>" class="form-control"></font></td>


</tr>
<tr>
<td align="center">内容:</td>
<td> <textarea name="msgtext" cols="60" class="form-control" rows="12" id="textarea"><?=ehtmlspecialchars(stripSlashes($msgtext))?></textarea> </td>


</tr>
<tr>
<td align="center">&nbsp;</td>
<td> <input type="submit" name="Submit" value="发送" class="btn btn-primary">
                &nbsp; 
                <input type="reset" name="Submit2" value="重置" class="btn btn-primary"> <input name="enews" type="hidden" id="enews" value="AddMsg"></td>


</tr>


</tbody>
</table>


                        </div>
                    </div>
                </div>
                <!-- /.row -->


</div>



	</div>
 </form><?php
require(ECMS_PATH.'e/template/incfile/footer.php');
?>

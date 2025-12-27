<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='设置空间';
$url="<a href='../../../'>首页</a>&nbsp;>&nbsp;<a href='../cp/'>会员中心</a>&nbsp;>&nbsp;设置空间";
require(ECMS_PATH.'e/template/incfile/header.php');
?>


  	<div class="app-content-body ">
	    
             <form name="setspace" method="post" action="index.php">

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">设置空间</h1>
</div>
<div class="wrapper-md">

                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                                <tbody>

<tr class="color1">
			<td width="93" align="center" class="td5 tdCenter">空间名称:</td>
			<td width="469" class="td25 tdCenter"> <input name="spacename" type="text" class="form-control" id="spacename" value="<?=$addr[spacename]?>">
            </td>
		
	
</tr>
                              
                               
<tr>
<td align="center">空间公告:</td>
<td> <textarea name="spacegg" cols="60" rows="6" class="form-control" id="spacegg"><?=$addr[spacegg]?></textarea></td>


</tr>

<tr>
<td align="center">&nbsp;</td>
<td> 
 <input type="submit" name="Submit" value="提交" class="btn btn-primary">
              <input type="reset" name="Submit2" value="重置" class="btn btn-primary">
              <input name="enews" type="hidden" id="enews" value="DoSetSpace">

</td>


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

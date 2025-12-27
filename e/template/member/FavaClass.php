

<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='收藏夹分类';
$url="<a href=../../../../>首页</a>&nbsp;>&nbsp;<a href=../../cp/>会员中心</a>&nbsp;>&nbsp;<a href=../../fava/>收藏夹</a>&nbsp;>&nbsp;管理分类";
require(ECMS_PATH.'e/template/incfile/header.php');
?>
<script>
function DelFavaClass(cid)
{
var ok;
ok=confirm("确认要删除?");
if(ok)
{
self.location.href='../../doaction.php?enews=DelFavaClass&cid='+cid;
}
}
</script>
 
    <div class="app-content-body ">
	    

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">增加收藏夹分类</h1>
</div>
<div class="wrapper-md">
                <div class="row">
                    <div class="col-lg-12">

                  <form name="form1" method="post" action="../../doaction.php">
                          <div class="form-group input-group">
         
                  <input type="text" id="cname" class="form-control" name="cname" placeholder="分类名称">
                                <span class="input-group-btn"><input type="submit" value="增加分类名称" name="Submit" class="btn btn-primary">   <input name="enews" type="hidden" id="enews" value="AddFavaClass"></span>
                            </div>
                        </form>


                    </div>
                </div>
                <!-- /.row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                 
                  
                                 <tr>
                    <th class="td5"><div align="center">ID</div></th>
                    <th class="td15"><div align="center">分类名称</div></th>
                    <th class="td15"><div align="center">操作</div></th>
                 
         
                  </tr>
    
                                </thead>
            
                                <tbody>
       		<?php
		while($r=$empire->fetch($sql))
		{
		?>  <form name=form method=post action=../../doaction.php>                        
   <tr>
<td rowspan="1"><div align="center"> 
                  <?=$r[cid]?>
                </div></td>
<td rowspan="1"><div align="center"> 
                  <input name="enews" type="hidden" id="enews" value="EditFavaClass">
                  <input name="cid" type="hidden" value="<?=$r[cid]?>">
                  <input name="cname" class="form-control"  type="text" id="cname" value="<?=$r[cname]?>">
                </div></td>
<td><div align="center"> 
                  <input type="submit" name="Submit2" class="btn btn-primary" value="修改">
                  &nbsp; 
                  <input type="button" name="Submit3" class="btn btn-primary" value="删除" onclick="javascript:DelFavaClass(<?=$r[cid]?>);">
                </div></td>

                    
                    </tr>
                    
        
             </form>
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

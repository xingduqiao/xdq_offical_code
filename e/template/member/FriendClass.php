<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='好友分类';
$url="<a href=../../../../>首页</a>&nbsp;>&nbsp;<a href=../../cp/>会员中心</a>&nbsp;>&nbsp;<a href=../../friend/>好友列表</a>&nbsp;>&nbsp;管理分类";
require(ECMS_PATH.'e/template/incfile/header.php');
?>
<script>
function DelFriendClass(cid)
{
var ok;
ok=confirm("确认要删除?");
if(ok)
{
self.location.href='../../doaction.php?enews=DelFriendClass&doing=1&cid='+cid;
}
}
</script>
 
    <div class="app-content-body ">
	    

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">增加好友分类</h1>
</div>
<div class="wrapper-md">
                <div class="row">
                    <div class="col-lg-12">

                    <form name="form1" method="post" action="../../doaction.php">
                          <div class="form-group input-group">
         
           <input name="cname" type="text" class="form-control" placeholder="分类名称" id="cname"> 
          
                                <span class="input-group-btn"> <input type="submit" class="btn btn-primary" name="Submit" value="增加"> 
                <input name="enews" type="hidden" id="enews" value="AddFriendClass">
                <input name="doing" type="hidden" id="doing" value="1"></span>
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
		?>   <form name=form method=post action=../../doaction.php>                      
   <tr>
<td rowspan="1"><div align="center"> 
                  <?=$r[cid]?>
                </div></td>
<td rowspan="1"><div align="center">
                  <input name="doing" type="hidden" id="doing" value="1">
                  <input name="enews" type="hidden" id="enews" value="EditFriendClass">
                  <input name="cid" type="hidden" value="<?=$r[cid]?>">
                  <input name="cname" type="text" id="cname" value="<?=$r[cname]?>">
                </div></td>
<td><div align="center"> 
                  <input type="submit" name="Submit2" value="修改">
                  &nbsp; 
                  <input type="button" name="Submit3" value="删除" onclick="javascript:DelFriendClass(<?=$r[cid]?>);">
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

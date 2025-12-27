<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='好友列表';
$url="<a href=../../../>首页</a>&nbsp;>&nbsp;<a href=../cp/>会员中心</a>&nbsp;>&nbsp;好友列表";
require(ECMS_PATH.'e/template/incfile/header.php');
?>

    <div class="app-content-body ">
	    

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">[<a href="FriendClass/">管理分类</a>] [<a href="add/?fcid=<?=$cid?>">添加好友</a>]</h1>
</div>
<div class="wrapper-md">
                
                <!-- /.row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                 
            <form name=favaform method=post action="../doaction.php" onsubmit="return confirm('确认要操作?');">
            <input type=hidden value=hy name=enews>
                                 <tr>
                    <th class="td5"><div align="center"></div></th>
                    <th class="td15"><div align="center">用户名</div></th>
                    <th class="td15"><div align="center">备注</div></th>
                    <th><div align="center">操作</div></th>
    
         
                  </tr>
    
                                </thead>
            
                                <tbody>
                                
          <?php
			while($r=$empire->fetch($sql))
			{
			?>       
                                
   <tr>
<td rowspan="1"><div align="center"><img src="../../data/images/man.gif" width="16" height="16" border=0></div></td>
<td rowspan="1"><div align="center"><a href="../ShowInfo/?username=<?=$r[fname]?>" target=_blank> 
                  <?=$r[fname]?>
                  </a></div></td>
<td><div align="center"> 
                  <input name="fsay[]" type="text" id="fsay[]" class="form-control" value="<?=stripSlashes($r[fsay])?>" size="32">
                </div></td>
<td><div align="center">[<a href="add/?enews=EditFriend&fid=<?=$r[fid]?>&fcid=<?=$cid?>">修改</a>] 
                  [<a href="../doaction.php?enews=DelFriend&fid=<?=$r[fid]?>&fcid=<?=$cid?>" onclick="return confirm('确认要删除?');">删除</a>]</div></td>

                    
                    </tr>
                    
         <?php
			}
			?>
            
            
              </tbody>
     
               </form>      
                    
                    
                    
</table>
<nav>
  

  <ul class="pagination">
    <form name="form1" method="post" action="">
 <li>选择分类: 
                <select name="cid" id="select" onchange=window.location='../friend/?cid='+this.options[this.selectedIndex].value>
                  <option value="0">显示全部</option>
                  <?=$select?>
                </select> </li>  </form>

                                 </ul></nav>
 <nav>
   <ul class="pagination">                        
         <li><?=$returnpage?></li> </ul></nav>
        
            </div>
                    </div>
                </div>
                <!-- /.row -->
</div>



	</div>
 <?php
require(ECMS_PATH.'e/template/incfile/footer.php');
?>

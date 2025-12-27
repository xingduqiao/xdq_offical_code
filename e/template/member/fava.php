 <?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='收藏夹';
$url="<a href=../../../>首页</a>&nbsp;>&nbsp;<a href=../cp/>会员中心</a>&nbsp;>&nbsp;收藏夹";
require(ECMS_PATH.'e/template/incfile/header.php');
?>
      
 
    <div class="app-content-body ">
	    

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">[<a href="FavaClass/">管理分类</a>]</h1>
</div>
<div class="wrapper-md">
                
                <!-- /.row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                 
                                 <form name=favaform method=post action="../doaction.php" onsubmit="return confirm('确认要操作?');">
            <input type=hidden value=DelFava_All name=enews>
                                 <tr>
                    <th class="td5"><div align="center"></div></th>
                    <th class="td15"><div align="center">标题</div></th>
                    <th class="td15"><div align="center">点击</div></th>
                    <th><div align="center">收藏时间</div></th>
                    <th><div align="center">选择</div></th>
         
                  </tr>
    
                                </thead>
            
                                <tbody>
                                
                                                    
                                
                                 <?php
			while($fr=$empire->fetch($sql))
			{
				if(empty($class_r[$fr[classid]][tbname]))
				{continue;}
				$r=$empire->fetch1("select title,isurl,titleurl,onclick,classid,id from {$dbtbpre}ecms_".$class_r[$fr[classid]][tbname]." where id='$fr[id]' limit 1");
				//标题链接
				$titlelink=sys_ReturnBqTitleLink($r);
				if(!$r['id'])
				{
					$r['title']="此信息已删除";
					$titlelink="#EmpireCMS";
				}
			?>
                                
                                
   <tr>
<td rowspan="1"><div align="center"><img src="../../data/images/dir.gif" border=0></div></td>
<td rowspan="1"><div align="left"><a href="<?=$titlelink?>" target=_blank> 
                  <?=stripSlashes($r[title])?>
                  </a></div></td>
<td><div align="center"> 
                  <?=$r[onclick]?>
                </div></td>
<td><div align="center"> 
                  <?=$fr[favatime]?>
                </div></td>
<td><div align="center"> 
                  <input name="favaid[]" type="checkbox" id="favaid[]2" value="<?=$fr[favaid]?>">
                </div></td>
                    
                    </tr>
                    
                <?php
			}
			?>     
            
            
              </tbody>
     
                    
                    
                    
                    
</table>
<nav>
  <ul class="pagination">
<li><?=$returnpage?>
                &nbsp;&nbsp; <select name="cid">
                  <option value="0">请选择要转移的目标分类</option>
                  <?=$select?>
                </select></li> 
                <li><input type="submit" class="btn btn-primary" name="Submit" value="转移选中" onclick="document.favaform.enews.value='MoveFava_All'"> </li>
                <li><input type="submit" class="btn btn-primary" name="Submit" value="删除选中" onclick="document.favaform.enews.value='DelFava_All'"></li>
              </ul>

  <ul class="pagination">
 <form name="form1" method="post" action="">
 <li> 
                  选择分类: 
                <select name="cid" id="select" onchange=window.location='../fava/?cid='+this.options[this.selectedIndex].value>
                  <option value="0">显示全部</option>
                  <?=$select?>
                </select>
                  
                               
                                </li>
                                 </ul></nav></form>

          </form>     
                      </div>
                    </div>
                </div>
                <!-- /.row -->
</div>



	</div>
 <?php
require(ECMS_PATH.'e/template/incfile/footer.php');
?>

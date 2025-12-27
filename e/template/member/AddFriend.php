<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']=$word;
$url="<a href=../../../../>首页</a>&nbsp;>&nbsp;<a href=../../cp/>会员中心</a>&nbsp;>&nbsp;<a href=../../friend/?cid=".$fcid.">好友列表</a>&nbsp;>&nbsp;".$word;
require(ECMS_PATH.'e/template/incfile/header.php');
?> 



    <div class="app-content-body ">
	    
       <form name="form1" method="post" action="../../doaction.php">
<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3"><?=$word?></h1>
</div>
<div class="wrapper-md">
                <div class="row">
                    <div class="col-lg-12">


                    </div>
                </div>
                <!-- /.row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                        
              
                            <table class="table table-bordered table-hover table-striped">
                     
            
                                <tbody>
       	 <tr>
<td rowspan="1"><div align="center"> 用户名(*):  </div></td>
<td><input name="fname" class="form-control" type="text" id="fname" value="<?=$fname?>">
                </td>
                    
                    </tr>
        
        
        
                          
   <tr>
<td rowspan="1"><div align="center">所属分类[<a href="../FriendClass/" target="_blank">管理分类</a>]：</div></td>
<td><select name="cid" class="form-control">
                  <option value="0">不设置</option>
                  <?=$select?>
                </select>
                </td>
                    
                    </tr>
   
   <tr>
<td rowspan="1"><div align="center">备注：</div></td>
<td><input name="fsay" class="form-control" type="text" id="fname3" value="<?=stripSlashes($r[fsay])?>" size="38"></td>
                    
                    </tr>
                    
   <tr>
<td rowspan="1"><div align="center"> 
                &nbsp;
                </div></td>
<td><input type="submit" name="Submit" class="btn btn-primary" value="提交">
                <input type="reset" name="Submit2" class="btn btn-primary" value="重置">
                <input name="enews" type="hidden" id="enews" value="<?=$enews?>">
                <input name="fid" type="hidden" id="fid" value="<?=$fid?>">
                <input name="fcid" type="hidden" id="fcid" value="<?=$fcid?>">
                <input name="oldfname" type="hidden" id="oldfname" value="<?=$r[fname]?>"></td>         
                    </tr>
              </tbody>
                  
</table>

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

<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='增加收藏夹';
$url="<a href=../../../../>首页</a>&nbsp;>&nbsp;<a href=../../cp/>会员中心</a>&nbsp;>&nbsp;<a href=../../fava/>收藏夹</a>&nbsp;>&nbsp;增加收藏夹";
require(ECMS_PATH.'e/template/incfile/header.php');
?>
    <div class="app-content-body ">
	    

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">增加收藏夹分类</h1>
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
                        
                         <form name="form1" method="POST" action="../../doaction.php">
                            <table class="table table-bordered table-hover table-striped">
                     
            
                                <tbody>
       	 <tr>
<td rowspan="1"><div align="center"> <input name="enews" type="hidden" id="enews" value="AddFava">
                  增加收藏夹 
                  <input name="from" type="hidden" id="from2" value="<?=$from?>">
                  <input name="classid" type="hidden" id="classid2" value="<?=$classid?>">
                  <input name="id" type="hidden" id="id2" value="<?=$id?>">
                  [<a href="../FavaClass/" target="_blank">增加收藏分类</a>] </div></td>

                    
                    </tr>
        
        
        
                          
   <tr>
<td rowspan="1"><div align="center">收藏页面：<a href='<?=$titleurl?>' target=_blank><?=stripSlashes($r[title])?></a></div></td>

                    
                    </tr>
   
   <tr>
<td rowspan="1"><div align="center">选择收藏分类: 
                  <select name="cid" id="select">
                    <option value="0">不设置</option>
                    <?=$select?>
                  </select>
                </div></td>

                    
                    </tr>
                    
   <tr>
<td rowspan="1"><div align="center"> 
                  <input type="submit" name="Submit" class="btn btn-primary" value="收藏">
                  &nbsp;&nbsp; 
                  <input type="button" name="Submit2" value="返回" class="btn btn-primary" onclick="javascript:history.go(-1)">
                </div></td>

                    
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

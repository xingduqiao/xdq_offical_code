
<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='消息列表';
$url="<a href=../../../>首页</a>&nbsp;>&nbsp;<a href=../cp/>会员中心</a>&nbsp;>&nbsp;消息列表&nbsp;&nbsp;(<a href='AddMsg/?enews=AddMsg'>发送消息</a>)";
require(ECMS_PATH.'e/template/incfile/header.php');
?>
<script>
function CheckAll(form)
  {
  for (var i=0;i<form.elements.length;i++)
    {
    var e = form.elements[i];
    if (e.name != 'chkall')
       e.checked = form.chkall.checked;
    }
  }
</script> 

    <div class="app-content-body ">
	    

<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">消息列表&nbsp;&nbsp;[<a href="AddMsg/?enews=AddMsg">发送消息</a>]</h1>
</div>
<div class="wrapper-md">
                
                <!-- /.row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="table-responsive">
                           <form name="listmsg" method="post" action="../doaction.php" onsubmit="return confirm('确认要删除?');">
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                 
         
                                 <tr>
                    <th class="td5"><div align="center"></div></th>
                    <th class="td15"><div align="center">标题</div></th>
                    <th class="td15"><div align="center">发送者</div></th>
                    <th><div align="center">发送时间</div></th>
                    <th><div align="center">操作</div></th>
    
         
                  </tr>
    
                                </thead>
            
                                <tbody>
                                
         <?php
			while($r=$empire->fetch($sql))
			{
				$img="haveread";
				if(!$r[haveread])
				{$img="nohaveread";}
				//后台管理员
				if($r['isadmin'])
				{
					$from_username="<a title='后台管理员'><b>".$r[from_username]."</b></a>";
				}
				else
				{
					$from_username="<a href='../ShowInfo/?userid=".$r[from_userid]."' target='_blank'>".$r[from_username]."</a>";
				}
				//系统信息
				if($r['issys'])
				{
					$from_username="<b>系统消息</b>";
					$r[title]="<b>".$r[title]."</b>";
				}
			?>                
   <tr>
<td rowspan="1"><div align="center"> 
                  <input name="mid[]" type="checkbox" id="mid[]2" value="<?=$r[mid]?>">
                </div></td>
<td rowspan="1"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr> 
                    <td width="9%"><div align="center"><img src="../../data/images/<?=$img?>.gif" border=0></div></td>
                    <td width="91%"><a href="ViewMsg/?mid=<?=$r[mid]?>"> 
                      <?=stripSlashes($r[title])?>
                      </a></td>
                  </tr>
                </table></td>
<td><div align="center"> 
                  <?=$from_username?>
                </div></td>
<td><div align="center"> 
                  <?=$r[msgtime]?>
                </div></td>
<td><div align="center">&nbsp;[<a href="../doaction.php?enews=DelMsg&mid=<?=$r[mid]?>" onclick="return confirm('确认要删除?');">删除</a>]</div></td>

                    
                    </tr>
      <tr>
        <?php
			}
			?>
<td rowspan="1"><div align="center"> 
                  <input type=checkbox name=chkall value=on onclick=CheckAll(this.form)>
                </div></td>
<td rowspan="1"><input type="submit" name="Submit2" value="删除选中" class="btn btn-primary"> 
                <input name="enews" type="hidden" value="DelMsg_all"> </td>
<td></td>
<td></td>
<td></td>

                    
                    </tr>
       <tr> 
              <td colspan="5"><div align="center">说明：<img src="../../data/images/nohaveread.gif" width="14" height="11"> 
                代表未阅读消息，<img src="../../data/images/haveread.gif" width="15" height="12"> 
                代表已阅读消息.</div></td>
</tr>              
  
            
              </tbody>

                    
                    
                    
</table>

          <nav>
  <ul class="pagination">
<li> <?=$returnpage?>  </li>  </ul>
</nav>   
          
            </div>
                    </div>
                </div>
                <!-- /.row -->
</div>


 </form>
	</div>
<?php
require(ECMS_PATH.'e/template/incfile/footer.php');
?>

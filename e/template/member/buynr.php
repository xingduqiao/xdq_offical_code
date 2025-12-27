<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?>
<?php
$public_diyr['pagetitle']='文章购买记录';
require(ECMS_PATH.'e/template/incfile/header.php');
?>
<div class="hymain">
  <div class="block">
    <? require(ECMS_PATH.'e/template/incfile/leftside.php');?>
    <div class="fr rmain">
      <h3>文章购买记录</h3>
      <div class="tips" style="position:relative; padding-left:30px;"><i class="icon icon-1"></i>
      您购买的文章记录都可以在这里看到呦!
	  </div>
      <div class="addresslist">
        <table>
        <thead>
        <tr>
        <th class="left">标题</th>
        <th class="w70">扣除点数</th>
        <th class="row w6">购买时间</th>
        </tr>
        </thead>
        <tbody>
		<?php
		while($r=$empire->fetch($sql))
		{
			$tbname=$class_r[$r[classid]][tbname];
			if(empty($tbname)){continue;}
			$s=$empire->fetch1("select * from {$dbtbpre}ecms_".$tbname." where id='$r[id]'");
			$titlelink=sys_ReturnBqTitleLink($s);
			if(!$s['id'])
				{
					$s['title']="此视频已失效";
					$titlelink="#";
				}
		?>
        <tr>
        <td class="left"><a href="<?=$titlelink?>" target="_blank"><?=$s['title']?></a></td>
        <td><?=$r[point]?></td>
        <td class="row f-tar"><?=format_datetime($r[buytime],'Y-m-d')?></td>
        </tr>
        <?php
		}
		?>
        <? if ($returnpage){?>
        <tr>
        <td colspan="3" class=""><?=$returnpage?></td>
        </tr>
        <? } ?>
        </tbody>
        </table>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</div>

<?php
require(ECMS_PATH.'e/template/incfile/footer.php');
?>
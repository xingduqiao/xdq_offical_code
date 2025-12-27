<?php
if(!defined('InEmpireCMS'))
{
	exit();
}
?><!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="format-detection" content="telephone=no" />
<title>[!--pagetitle--]_<?=$public_r[sitename]?></title>
<meta name="keywords" content="[!--pagekey--]" />
<meta name="description" content="[!--pagedes--]" />
<meta name="robots" content="All">

    <link rel="stylesheet" type="text/css" href="[!--news.url--]skin/default/style.css">
    <link rel="stylesheet" type="text/css" href="[!--news.url--]skin/default/responsive.css">
    <script src="[!--news.url--]skin/default/jquery.min.js"></script>
    
    
    <!--[if lt IE 9]>
		    <script type="text/javascript" src="js/css3-mediaqueries.js"></script>
		    <style type="text/css">
		        html{ margin-left: 0 !important;}
		    </style>
		<![endif]-->
</head>

<body>

<header class="header">
        <div class="head-wrap">
            <h1 class="head-logo"  style="" >
                <a href="/">
                    <img src="[!--news.url--]skin/default/logo.png" class="img1" alt="<?=$public_r[sitename]?>"   /><img src="[!--news.url--]skin/default/logo.png" class="img2" alt="<?=$public_r[sitename]?>"  /></a>
            </h1>
            <nav class="nav clearfix">
                <ul>
                    
                  <?php
    $i=0;
    if($GLOBALS[navclassid]==""){
        echo  '<li  class="active"><a href="[!--news.url--]"  target="_self"  class="yj-link">首页</a></li>';
        }
    else {
        echo  '<li><a href="[!--news.url--]"  target="_self"  class="yj-link">首页</a></li>';
        }
?>
				  
				    
 <?php
$ecms_bq_sql=sys_ReturnEcmsLoopBq("select * from [!db.pre!]enewsclass where bclassid=0 order by myorder limit 10",14,24,0);
$bqno=0;
while($bqr=$empire->fetch($ecms_bq_sql))
{
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;



$classurl=sys_ReturnBqClassname($bqr,9);//取得栏目地址
$bgcolor="";
if($GLOBALS[navclassid])
{
$fcr=explode('|',$class_r[$GLOBALS[navclassid]][featherclass]);
$topbclassid=$fcr[1]?$fcr[1]:$GLOBALS[navclassid];//取得当前栏目的一级栏目ID
if($bqr[classid]==$topbclassid)
{
$bgcolor="active";
}
}

?>       
                        
 <li class=<?=$bgcolor?>><a href="<?=$public_r[newsurl]?><?=$bqr[classpath]?>/"  target="_self"  class="yj-link"><?=sub($bqr[classname],0,54,false)?></a>
                               
				 <?php
if(!$bqr[islast]) //判断是否终极栏目
{
?>			
							
							    <div class='ej-list'>
								
<?php
$ecms_bq_sql2=sys_ReturnEcmsLoopBq("select * from [!db.pre!]enewsclass where bclassid=$bqr[classid] order by myorder limit 8",14,24,0);
$bqno2=0;

while($bqr2=$empire->fetch($ecms_bq_sql2))
{
$bqsr2=sys_ReturnEcmsLoopStext($bqr2);
$bqno2++;
?> 	
<p><a href="<?=$public_r[newsurl]?><?=$bqr2[classpath]?>/"><?=sub($bqr2[classname],0,54,false)?></a></p>
								
								
<?php
}
?> 
	
								
								</div>  
								
								
<?php
}
?> 
								  
                            </li>

                                
<?php
}
?> 
              
                                

                        

                   
                </ul>
            </nav>
            <div class="head-search">
			<form action="[!--news.url--]e/search/index.php" method="post" name="searchform" id="searchform">
			<input type="hidden" name="show" value="title" />
<input type="hidden" name="tempid" value="1" />
                <input type="text" name="keyboard" placeholder="内容搜索" id="txt_key" onKeyDown="keydownEvent()"  />
 <button type="submit"  name='submit' class="search-icon" > </button>
			</form>	
				
            </div>
        </div>
    </header>



    <div class="menu-handler">
        <span></span>
    </div>
    <section class="menuBox" id="menuBox">
        <ul class="menuMoblie" id="menuMoblie">

                    <li><a href="[!--news.url--]"   target="_self"   class="nav-link clearfix"  >首页</a>
                            
                    </li>
     <?php
$ecms_bq_sql=sys_ReturnEcmsLoopBq("select * from [!db.pre!]enewsclass where bclassid=0 order by myorder limit 10",14,24,0);
$bqno=0;
while($bqr=$empire->fetch($ecms_bq_sql))
{
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;

?>            
<li><a href="<?=$public_r[newsurl]?><?=$bqr[classpath]?>/"   target="_self"   class="nav-link clearfix"  ><?=sub($bqr[classname],0,54,false)?></a>
                        <div class='subnav clearfix'>
						

						<?php
$ecms_bq_sql2=sys_ReturnEcmsLoopBq("select * from [!db.pre!]enewsclass where bclassid=$bqr[classid] order by myorder limit 8",14,24,0);
$bqno2=0;

while($bqr2=$empire->fetch($ecms_bq_sql2))
{
$bqsr2=sys_ReturnEcmsLoopStext($bqr2);
$bqno2++;
?> 	
<p class="item"><a href="<?=$public_r[newsurl]?><?=$bqr2[classpath]?>/"><?=sub($bqr2[classname],0,54,false)?></a></p>
																
<?php
}
?> 
						
						
						</div>    
                    </li>
<?php
}
?> 
  

                

          
        </ul>
    </section>
    <!--menuBox end-->
    <p class="mtop"></p>

    <!-- banner -->
    
  <section class="inside-pages-banner">
   <div class="ipb-pic"><img src="[!--news.url--]skin/default/nyban[!--bclass.id--].jpg" /></div>
            <div class="ipb-words">
                <h1 class="iwt1">[!--class.name--]</h1>
                <span class="iwt2">NEWS</span>
            </div>
        </section>
        <!-- tab -->
        <p id="dinwei-box"></p>
        <section class="inside-pages-tab"    >
            <div class="ipt-link clearfix">
                
                
<?php
$bclassid=$class_r[$GLOBALS[navclassid]][bclassid]; //获取当前父栏目ID
?>
 <?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq("select classid, classname, classpath from `[!db.pre!]enewsclass` where bclassid='$bclassid' order by `classid` asc ",5,24,0,0,0);
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?>  
          <?php
$classurl=sys_ReturnBqClassname($bqr,9);//取得栏目地址
$bgcolor=””;
if($GLOBALS[navclassid])
{
$fcr=explode(‘|’,$class_r[$GLOBALS[navclassid]][featherclass]);
$topbclassid=$fcr[1]?$fcr[1]:$GLOBALS[navclassid];//取得当前栏目的一级栏目ID
if($bqr[classid]==$topbclassid)
{
$bgcolor=active;
}
}
?>  	
  <a href="<?=$bqsr[classurl]?>" class=<?=$bgcolor?>><?=$bqr[classname]?></a>

   <?php
}
}
?>

               
               
            </div>
        </section>
        


    <section class="industry-news1-wrap">
        <ul class="news1-list">

            
[!--empirenews.listtemp--] 
 <!--list.var1-->
[!--empirenews.listtemp--]


        </ul>
        <!-- 分页 -->
        <div class="pages-list"> [!--show.listpage--]</div>
    </section>


     <footer class="footer-wrap">
        <div class="w1200">
            <div class="footer-link">
                <p class="fl-tit">友情链接：</p>
                <div class="fl-list">
                    
<? @sys_GetSitelink(8,30,0,0,0);?>
                   
                    
                </div>
            </div>
            <div class="footer-company-infor clearfix">
                <div class="fci-left">
                    <p>主办单位：杭州星渡桥信息技术有限公司 <a href="http://www.xingduqiao.com/e/manage/" target="_blank">后台登录</a> </p><p>地址：浙江省杭州市滨江区浦沿街道南环路4280号1幢328室 &nbsp; 电话：<a href="tel:0571-57172897">0571-57172897</a> &nbsp; 邮箱：
366428886@qq.com</p><p>网址：
www.xingduqiao.com</p><p>手机：
18072828713


19143584687
</p><p><a href= https://beian.miit.gov.cn/ target="_blank" >浙ICP备2021039508号-1</a> &nbsp; &nbsp; <a href="http://www.eqbang.com" target="_blank" >亿企邦</a></p>
                </div>
                <div class="fci-right clearfix">
                     <div class="fr-ewm"><div class="ewm-pic"><img src="[!--news.url--]skin/default/gongzhonghao.png" class="vm" /></div><p><?=$public_r[sitename]?>微信公众号</p></div> 
					 
					 <div class="fr-ewm"><div class="ewm-pic"><img src="[!--news.url--]skin/default/weixin.jpg" class="vm" /></div><p><?=$public_r[sitename]?>联系微信</p></div>
					
					<div class="fr-ewm"><div class="ewm-pic"><img src="[!--news.url--]skin/default/weixin2.jpg" class="vm" /></div><p><?=$public_r[sitename]?>联系微信</p></div> 
					 
                </div>
            </div>
        </div>
    </footer>



<script src="[!--news.url--]skin/default/plugin.js"></script>

<script src="[!--news.url--]skin/default/page.js"></script>

    <script type="text/javascript">
        $(".acb1-list ul li:even").addClass("al-fl");
        $(".acb1-list ul li:odd").addClass("al-fr");
    </script>

<script type="text/javascript">
    function toserch_key() {
        var key = $('#txt_key').val();
        if (key == '') {
            $('#txt_key').focus();
            return false;
        }

        window.location.href = "/e/search/result/?searchid=1";
    }
    function keydownEvent() {

        var e = window.event || arguments.callee.caller.arguments[0];

        if (e && e.keyCode == 13) {

            toserch_key();

        }

    }
    jQuery(function () {
        $('#txt_key').keyup(function (event) {

            if (event.keyCode == "13") {
                toserch_key();
                return false;
            }

        });

    });
</script>






</body>
</html>
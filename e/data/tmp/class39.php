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
<title>物业费质价相符估算系统_<?=$public_r[sitename]?></title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta name="robots" content="All">

    <link rel="stylesheet" type="text/css" href="/skin/default/style.css">
    <link rel="stylesheet" type="text/css" href="/skin/default/responsive.css">
    <script src="/skin/default/jquery.min.js"></script>
    
    
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
                    <img src="/skin/default/logo.png" class="img1" alt="<?=$public_r[sitename]?>"   /><img src="/skin/default/logo.png" class="img2" alt="<?=$public_r[sitename]?>"  /></a>
            </h1>
            <nav class="nav clearfix">
                <ul>
                    
                  <?php
    $i=0;
    if($GLOBALS[navclassid]==""){
        echo  '<li  class="active"><a href="/"  target="_self"  class="yj-link">首页</a></li>';
        }
    else {
        echo  '<li><a href="/"  target="_self"  class="yj-link">首页</a></li>';
        }
?>
				  
				    
 <?php
$ecms_bq_sql=sys_ReturnEcmsLoopBq("select * from [!db.pre!]enewsclass where bclassid=0 order by myorder limit 9",14,24,0);
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
			<form action="/e/search/index.php" method="post" name="searchform" id="searchform">
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

                    <li><a href="/"   target="_self"   class="nav-link clearfix"  >首页</a>
                            
                    </li>
     <?php
$ecms_bq_sql=sys_ReturnEcmsLoopBq("select * from [!db.pre!]enewsclass where bclassid=0 order by myorder limit 9",14,24,0);
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
            <div class="ipb-pic"><img src="/skin/default/nyban37.jpg" /></div>
            <div class="ipb-words">
                <h1 class="iwt1">物业费质价相符估算系统</h1>
                <span class="iwt2">Xing Du Qiao</span>
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
        


    
    <!-- 内容 -->
    <section class="about1-cont-bg">
        <div class="about1-cont-box">
            <h2 class="acb1-t1"  ><?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq("select bname from phome_enewsclass where classid='$GLOBALS[navclassid]'",1,24,0);
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?> <?=$bqr[bname]?> <?php
}
}
?></h2>
            <!--<span class="acb1-t2"  ></span>-->
            <div class="pageC content"  >
               
			 <?=ReturnClassAddField(0,'eclasspagetext')?>   
            </div>
       
            
        </div>
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
                    <p>主办单位：杭州星渡桥信息技术有限公司 <a href="http://www.xingduqiao.com/e/manage/" target="_blank">后台登录</a> </p><p>地址：浙江省杭州市滨江区浦沿街道南环路4280号1幢328室 &nbsp; 电话：<a href="tel:4006869186">400-686-9186</a> &nbsp; 邮箱：
366428886@qq.com</p><p>网址：
www.xingduqiao.com</p><p>手机：
18072828713


19143584687
</p><p><a href="https://www.miit.gov.cn/" target="_blank" >浙ICP备2021039508号-1</a> &nbsp; &nbsp; <a href="http://www.eqbang.com" target="_blank" >亿企邦</a></p>
                </div>
                <div class="fci-right clearfix">
                     <div class="fr-ewm"><div class="ewm-pic"><img src="/skin/default/gongzhonghao.png" class="vm" /></div><p><?=$public_r[sitename]?>微信公众号</p></div> 
					 
					 <div class="fr-ewm"><div class="ewm-pic"><img src="/skin/default/weixin.jpg" class="vm" /></div><p><?=$public_r[sitename]?>联系微信</p></div>
					
					<div class="fr-ewm"><div class="ewm-pic"><img src="/skin/default/weixin2.jpg" class="vm" /></div><p><?=$public_r[sitename]?>联系微信</p></div> 
					 
                </div>
            </div>
        </div>
    </footer>

<style type="text/css">
<!--
.sidebar-right {
    text-align: center;
    width: 141px;
    height: 463px;
    position: fixed;
    right: 0;
    top: 45%;
    transform: translateY(-50%);
    z-index: 1000;
    background-image: url(http://jzb.yuzosf.top/images/xuanfu_bg.png);
    background-size: cover; padding-bottom:20px;
}

.sidebar-right>img {
    margin-top: 14px;
}

.sidebar-right>h4 {
    margin-top: 16px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 18px;
}

.sidebar-right ul {
    margin-top: 15px; 
}

.sidebar-right ul li {
    display: inline-block;
    width: 109px;
    height: 34px;
    background: #FFFFFF;
    border-radius: 4px;
    line-height: 34px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #bc2930;
    cursor: pointer; list-style-type:none; margin:0px auto;
}
.sidebar-right ul li img{ width:20px; vertical-align:middle; margin-right:3px;}

.sidebar-right ul li:hover {
    color: #bc2930;
    background: #ffff00;
    font-weight: bold;
}

.sidebar-right ul li+li {
    margin-top: 12px;
}

.sidebar-right p {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 12px;
    margin-top: 16px;
}

.sidebar-right h5 {
    font-size: 18px;
    font-family: DINPro;
    font-weight: bold;
    color: #FFFFFF;
    margin-top: 6px;
}

.sidebar-right .go-top{
  margin-top: 10px;
  display: none;
}
.sidebar-right .go-top img{
  cursor: pointer;
}
-->
</style>
<div class="sidebar-right" >
  <img src="http://jzb.yuzosf.top/images/cebian_ren.png" alt="">
  <h4>在线客服</h4>
  <ul style="padding:0px; ">
    <li  onClick="window.open('https://wpa.qq.com/msgrd?v=3&uin=366428886&site=qq&menu=yes', '_blank');"><img src="http://jzb.yuzosf.top/images/qq2.png">客服一</li>
   <li  onClick="window.open('https://wpa.qq.com/msgrd?v=3&uin=1991995617&site=qq&menu=yes', '_blank');"><img src="http://jzb.yuzosf.top/images/qq2.png">客服二</li>
  <li  onClick="window.open('https://wpa.qq.com/msgrd?v=3&uin=1196334462&site=qq&menu=yes', '_blank');"><img src="http://jzb.yuzosf.top/images/qq2.png">客服三</li>
  <li  onClick="window.open('https://wpa.qq.com/msgrd?v=3&uin=1726247323&site=qq&menu=yes', '_blank');"><img src="http://jzb.yuzosf.top/images/qq2.png">客服四</li>
  </ul>
  <p>7*24小时服务热线</p>
  <h5>4006869186</h5>
  <div class="go-top">
    <img src="http://jzb.yuzosf.top/images/top.png" alt="">
  </div>
</div>

<script src="/skin/default/plugin.js"></script>

<script src="/skin/default/page.js"></script>

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

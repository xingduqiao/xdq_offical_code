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
    
<title><?=$public_r[sitename]?></title>
<meta name="keywords" content="杭州星渡桥信息技术有限公司" />
<meta name="description" content="杭州星渡桥信息技术有限公司由原杭州市房管局李老师牵头创立，目前拥有物业管理专家和科学技术人才34人。是一家专业以综合物业服务为主的高品质民营企业。" />

<meta name="robots" content="All">

    <link rel="stylesheet" type="text/css" href="/skin/default/style.css">
    <link rel="stylesheet" type="text/css" href="/skin/default/responsive.css">
   <script src="/skin/default/jquery.min.js"></script>
    
    
    <!--[if lt IE 9]>
		    <script type="text/javascript" src="http://www.cdpma.cn/js/css3-mediaqueries.js"></script>
		    <style type="text/css">
		        html{ margin-left: 0 !important;}
		    </style>
		<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>

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
    
    <!-- banner -->
    <section class="banner-wrap banner-height">
        <div class="banner">
    <div class="item">
                        <a href="">
                            <img src="/skin/default/banner0.jpg" class="pimg" /></a>
                    </div>
            
                    <div class="item">
                        <a href="">
                            <img src="/skin/default/banner1.jpg" class="pimg" /></a>
                    </div>


                
                    <div class="item">
                        <a href="">
                            <img src="/skin/default/banner2.jpg" class="pimg" /></a>
                    </div>


                
                    <div class="item">
                        <a href="">
                            <img src="/skin/default/banner3.jpg" class="pimg" /></a>
                    </div>


                



        </div>
        <!-- 视频 -->
        <div class="trailer" style="display:none">
            <img class="markimg" src="" alt="" />
            <div class="video">
                <span class="play-icon"></span>
            </div>
            <div class="video-name eT"><b></b></div>
            <div class="vbBox">
                <div class="videobox" id="videobox1"></div>
            </div>
        </div>
    </section>

    <!-- 视频弹窗 -->
    <div class="vwrap">
        <div class="videobtg"></div>
        <div class="videobox">
            <div id="videobox"></div>
            <div class="closes"><i></i></div>
        </div>
    </div>





    <!-- 内容 -->
    <section class="index-content">
        <!-- 第一块 -->
        <section class="w1200 index-news-bot clearfix">
            <!-- 新闻图片轮播 -->
            <section class="inb-banner clearfix">

             <?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq('5,7,13',5,0,1,'','newstime DESC');
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?>		   


                        <div class="ib-item">
                            <a href="<?=$bqsr['titleurl']?>">
                                <div>
                                    <img src="<?=$bqr[titlepic]?>" class="pimg" alt="<?=$bqr['title']?>" /></div>
                                <article class="binbox">
                                    <p><?=$bqr['title']?></p>
                                </article>
                            </a>
                        </div>

<?php
}
}
?>

                    




            </section>
            <!-- 新闻 -->
            <div class="inb-news">
                <!-- 行业动态 -->
                <div class="in-bot1">
                    <div class="ib-title clearfix">
                        <h4 class="it-bt"><?=$class_r[25]['classname']?></h4>
                        <a href="/<?=$class_r[25]['classpath']?>/" class="it-more">more&nbsp;></a>
                    </div>
                    <ul class="ib-list ib-t1">
                        
					   	 <?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq(25,4,0,0,'','newstime DESC');
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?>		
                                <li class="clearfix">
                                    <p class="il-words"><em></em><?=$bqr['title']?></p>
                                    <span class="il-time"><?=date("Y-m-d",$bqr[newstime])?></span>
                                    <a href="<?=$bqsr['titleurl']?>" class="linkA" target="_blank"></a>
                                </li>
          <?php
}
}
?>
	
                            


                    </ul>
                </div>
                <!-- 通知公告 -->
                <div class="in-bot1 in-pb ">
                    <div class="ib-title clearfix">
                        <h4 class="it-bt"><?=$class_r[24]['classname']?></h4>
                        <a href="/<?=$class_r[24]['classpath']?>/" class="it-more">more&nbsp;></a>
                    </div>
                    <ul class="ib-list ib-t2">
                        
     		   	 <?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq(24,4,0,0,'','newstime DESC');
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?>		
                                <li class="clearfix">
                                    <p class="il-words"><em></em><?=$bqr['title']?></p>
                                    <span class="il-time"><?=date("Y-m-d",$bqr[newstime])?></span>
                                    <a href="<?=$bqsr['titleurl']?>" class="linkA" target="_blank"></a>
                                </li>
          <?php
}
}
?>
                            
                    </ul>
                </div>
            </div>
        </section>
        <!-- 第二块 -->
        <section class="index-vip-bg">
            <div class="w1200 index-vip-bot">
                <ul class="clearfix">

                    
                            <li>
                                <div class="ivb-pic">
                                    <img src="/skin/default/1.jpg" /></div>
                                <div class="ivb-txt">
                                    <em class="ivb-line"></em>
                                    <h4 class="ivb-t1">Team <br>lineup</h4>
                                    <b class="ivb-t2"><?=$class_r[2]['classname']?></b>
                                </div>
                                <div class="ivb-enter"></div>
                                <a href="/<?=$class_r[2]['classpath']?>/" class="linkA"  target="_blank"></a>
                            </li>

                        
                            <li>
                                <div class="ivb-pic">
                                    <img src="/skin/default/2.jpg" /></div>
                                <div class="ivb-txt">
                                    <em class="ivb-line"></em>
                                    <h4 class="ivb-t1">Product<br>Center</h4>
                                    <b class="ivb-t2"><?=$class_r[3]['classname']?></b>
                                </div>
                                <div class="ivb-enter"></div>
                                <a href="/<?=$class_r[3]['classpath']?>/" class="linkA" target="_blank"></a>
                            </li>

                        
                            <li>
                                <div class="ivb-pic">
                                    <img src="/skin/default/3.jpg" /></div>
                                <div class="ivb-txt">
                                    <em class="ivb-line"></em>
                                    <h4 class="ivb-t1">Order <br>Service</h4>
                                    <b class="ivb-t2"><?=$class_r[6]['classname']?></b>
                                </div>
                                <div class="ivb-enter"></div>
                                <a href="/<?=$class_r[6]['classpath']?>/" class="linkA" target="_blank"></a>
                            </li>

                        
                            <li>
                                <div class="ivb-pic">
                                    <img src="/skin/default/4.jpg" alt="会员登录" /></div>
                                <div class="ivb-txt">
                                    <em class="ivb-line"></em>
                                    <h4 class="ivb-t1">Member<br>Login</h4>
                                    <b class="ivb-t2">会员登录</b>
                                </div>
                                <div class="ivb-enter"></div>
                                <a href="../e/member/login/" class="linkA" target="_blank"></a>
                            </li>

                        

                </ul>
            </div>
        </section>
        <!-- 第三块 -->
        <section class="w1200 index-cont3 clearfix">
            <div class="clearfix">
                <!-- 业界资讯/会员风采 -->
                <div class="ic3-news">
                    <div class="in3-tab clearfix">
                        <h5 class="it3 yjhy" id="it3_tab">
                            <a href="javascript:;" class="active"><?=$class_r[4]['classname']?></a>
                            <a href="javascript:;"><?=$class_r[13]['classname']?></a>
                        </h5>
                        <a href="/<?=$class_r[4]['classpath']?>/" class="more-it3">more&nbsp;></a>
                    </div>
                    <div id="ic3_news_cont">
                        <ul class="in3-list in3_cont" style="display: block;">

                            

	   	 <?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq(4,7,0,0,'','newstime DESC');
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?>	
                                    <li class="clearfix">
                                        <a href="<?=$bqsr['titleurl']?>" target="_blank">
                                            <p class="il3-cont"><em class="il3-y"></em><?=$bqr['title']?></p>
                                            <span class="il3-time"><?=date("Y-m-d",$bqr[newstime])?></span>
                                        </a>
                                    </li>

          <?php
}
}
?>
                                




                        </ul>
                        <ul class="in3-list in3_cont">
                            

   	 <?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq(13,7,0,0,'','newstime DESC');
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?>	
                                    <li class="clearfix">
                                        <a href="<?=$bqsr['titleurl']?>"  target="_blank">
                                            <p class="il3-cont"><em class="il3-y"></em><?=$bqr['title']?></p>
                                            <span class="il3-time"><?=date("Y-m-d",$bqr[newstime])?></span>
                                        </a>
                                    </li>

          <?php
}
}
?>


                                
                        </ul>
                    </div>
                </div>
                <!-- 服务模块 -->
                <div class="ic3-service clearfix">

                    

                            <div class="is3-item">
                                <a href="/<?=$class_r[9]['classpath']?>/">
                                    <div class="ii3-pic">
                                        <img src="/skin/default/pic2.png"/></div>
                                    <p class="ii3-bg"></p>
                                    <div class="ii3-cont">
                                        <i class="ic3-icon1"></i>
                                        <h6 class="ic3-tit"><?=$class_r[9]['classname']?></h6>
                                        <span class="ic3-en">About us</span>
                                    </div>
                                </a>
                            </div>


                        

                            <div class="is3-item">
                                <a href="/<?=$class_r[15]['classpath']?>/">
                                    <div class="ii3-pic">
                                        <img src="/skin/default/pic3.png" /></div>
                                    <p class="ii3-bg"></p>
                                    <div class="ii3-cont">
                                        <i class="ic3-icon2"></i>
                                        <h6 class="ic3-tit"><?=$class_r[15]['classname']?></h6>
                                        <span class="ic3-en">Company culture</span>
                                    </div>
                                </a>
                            </div>


                        

                            <div class="is3-item">
                                <a href="/<?=$class_r[16]['classpath']?>/">
                                    <div class="ii3-pic">
                                        <img src="/skin/default/pic4.png" /></div>
                                    <p class="ii3-bg"></p>
                                    <div class="ii3-cont">
                                        <i class="ic3-icon3"></i>
                                        <h6 class="ic3-tit"><?=$class_r[16]['classname']?></h6>
                                        <span class="ic3-en">Service area</span>
                                    </div>
                                </a>
                            </div>


                        

                            <div class="is3-item">
                                <a href="/<?=$class_r[17]['classpath']?>/">
                                    <div class="ii3-pic">
                                        <img src="/skin/default/pic5.png"  /></div>
                                    <p class="ii3-bg"></p>
                                    <div class="ii3-cont">
                                        <i class="ic3-icon4"></i>
                                        <h6 class="ic3-tit"><?=$class_r[17]['classname']?></h6>
                                        <span class="ic3-en">Organization</span>
                                    </div>
                                </a>
                            </div>


                        


                </div>
            </div>
            <!-- 图片背景 -->
            <section class="index-cont3-pic" > 
 <a href="/<?=$class_r[8]['classpath']?>/" target="_blank"> <img src="/skin/default/sycpxz.jpg"   />                </a>
            </section>
			
			
			<section class="w1200"><!-- 内容 -->

<ul class="ms22-list clearfix" style="margin-top:10px">
	<li><a href="/<?=$class_r[10]['classpath']?>/" target="_parent">
	<div class="fw-pic"><img src="/skin/default/fc-pic1.jpg" /></div>
	<div class="fw-cover-bg">
	<div class="fc-bot">
	 <i class="fc-icon1"   ></i>
	<h5 class="fc-txt1">业主大会</h5><span class="fc-txt2">Meeting</span>
	<p class="fc-txt3"><span>业主委员会工作</span><span>规章制度起草工作</span><span>经营性收益工作 </span> <span>定期临时会议</span> <span>日常工作管理</span><span>.....</span></p></div></div></a></li>
	<li><a href="/<?=$class_r[11]['classpath']?>/" target="_parent">
	<div class="fw-pic"><img src="/skin/default/fc-pic2.jpg" /></div>
	<div class="fw-cover-bg">
	<div class="fc-bot">
	 <i class="fc-icon2"   ></i>
	<h5 class="fc-txt1">物业承接检查</h5><span class="fc-txt2">Property </span>
	<p class="fc-txt3"><span>查验目的</span> <span> 查验依据</span> <span>查验意义</span> <span> 查验范围和内容</span><span>.....</span></p></div></div></a></li>
	<li><a href="/<?=$class_r[12]['classpath']?>/" target="_parent">
	<div class="fw-pic"><img src="/skin/default/fc-pic3.jpg" /></div>
	<div class="fw-cover-bg">
	<div class="fc-bot">
	 <i class="fc-icon3"   ></i>
	<h5 class="fc-txt1">物业考评</h5><span class="fc-txt2">Evaluation</span>
	<p class="fc-txt3"><span>明确评估基本事项</span>
<span>搜集整理项目资料</span>
<span>拟定评估作业方案</span>
<span>评估人员现场考评</span>
<span>确定评估结果</span>
<span>撰写评估报告</span></p></div></div></a></li>
	<li><a href="/<?=$class_r[13]['classpath']?>/" target="_parent">
	<div class="fw-pic"><img src="/skin/default/fc-pic4.jpg" /></div>
	<div class="fw-cover-bg">
	<div class="fc-bot">
	 <i class="fc-icon4"   ></i>
	<h5 class="fc-txt1">行业指导培训</h5><span class="fc-txt2">Training</span>
	<p class="fc-txt3"><span>信访处置</span> <span>两金审批</span> <span>装修监管</span> <span>专业跟踪团队</span><span>.....</span></p></div></div></a></li>
	<li><a href="/<?=$class_r[14]['classpath']?>/" target="_parent">
	<div class="fw-pic"><img src="/skin/default/fc-pic5.jpg" /></div>
	<div class="fw-cover-bg">
	<div class="fc-bot">
	 <i class="fc-icon5"   ></i>
	<h5 class="fc-txt1">服务案例</h5><span class="fc-txt2">Case</span>
	<p class="fc-txt3"><span>业主大会案例</span> <span>业主委员会选举案例</span> <span>续聘选聘案例</span> <span> 满意度测评案例</span><span>.....</span></p></div></div></a></li>
</ul></section>
			
		<!--<div class="cp">
			<ul>
			<li> <a href="/yzdh/"><img src="/skin/default/cp1.png"/></a></li>
			<li> <a href="/wycjcy/"><img src="/skin/default/cp2.png"/></a></li>
			<li> <a href="/wykp/"><img src="/skin/default/cp3.png"/></a></li>
			<li> <a href="/hyzdpx/"><img src="/skin/default/cp4.png"/></a></li>
			<li> <a href="/fwal/"><img src="/skin/default/cp5.png"/></a></li>
			
			</ul>
			</div>-->
        </section>
        <!-- 第四块 -->
        <section class="index-cont4-bg">
            <div class="w1200">
                <div class="index-cont4-bot clearfix">
                    <!-- 左侧菜单栏 -->
                    <div class="ic4-menu clearfix">

                        
                                <a href="/<?=$class_r[24]['classpath']?>/" class="im4-bg1 clearfix">
                                    <i class="im4-icon1 im4icon"></i>
                                    <span class="im4-txt"><?=$class_r[24]['classname']?></span>
                                    <strong class="im4-more">+</strong>
                                </a>
                            
                                <a href="/<?=$class_r[25]['classpath']?>/" class="im4-bg2 clearfix">
                                    <i class="im4-icon2 im4icon"></i>
                                    <span class="im4-txt"><?=$class_r[25]['classname']?></span>
                                    <strong class="im4-more">+</strong>
                                </a>
                            
                                <a href="/<?=$class_r[26]['classpath']?>/" class="im4-bg3 clearfix">
                                    <i class="im4-icon3 im4icon"></i>
                                    <span class="im4-txt"><?=$class_r[26]['classname']?></span>
                                    <strong class="im4-more">+</strong>
                                </a>
                            
                                <a href="/<?=$class_r[27]['classpath']?>/" class="im4-bg4 clearfix">
                                    <i class="im4-icon4 im4icon"></i>
                                    <span class="im4-txt"><?=$class_r[27]['classname']?></span>
                                    <strong class="im4-more">+</strong>
                                </a>
                            



                    </div>
                    <!-- 学习资料 -->
                    <div class="ic4-study-list">
                        <div class="in3-tab clearfix">
                            <h5 class="it3">
   <a href="/<?=$class_r[26]['classpath']?>/" class="active"><?=$class_r[26]['classname']?></a>
                            </h5>
                            <a href="/<?=$class_r[26]['classpath']?>/" class="more-it3">more&nbsp;></a>
                        </div>
                        <ul class="in3-list">


   	 <?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq(26,7,0,0,'','newstime DESC');
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?>	
                                    <li class="clearfix">
                                        <a href="<?=$bqsr['titleurl']?>" target="_blank">
                                            <p class="il3-cont"><em class="il3-y"></em><?=$bqr['title']?></p>
                                            <span class="il3-time"><?=date("Y-m-d",$bqr[newstime])?></span>
                                        </a>
                                    </li>

          <?php
}
}
?>

       

                        </ul>
                    </div>
                    <!-- 轮播 -->
                    <div class="ic4-banner-bot">
                        <div class="ibb4-title clearfix">
                            <h6><?=$class_r[7]['classname']?></h6>
                            <a href="/<?=$class_r[7]['classpath']?>/">more&nbsp;></a>
                        </div>
                        


                        <div class="ixbanner clearfix">

 <?php
$bqno=0;
$ecms_bq_sql=sys_ReturnEcmsLoopBq(7,10,0,1,'','newstime DESC');
if($ecms_bq_sql){
while($bqr=$empire->fetch($ecms_bq_sql)){
$bqsr=sys_ReturnEcmsLoopStext($bqr);
$bqno++;
?>
   <div class='ixitem'><div class='iximg'><img src='<?=$bqr['titlepic']?>' alt="<?=$bqr['title']?>"/></div><p class='ixtxt'><?=$bqr['title']?></p><a href="<?=$bqsr['titleurl']?>"   class="linkA" target="_blank"></a></div>
							
				   	

          <?php
}
}
?>		
						
                        </div>




                        
                    </div>
                    </div>
                </div>
           
        </section>
    </section>



    <!-- 底部 -->

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
                     <div class="fr-ewm"><div class="ewm-pic"><img src="/skin/default/gongzhonghao.png" class="vm" /></div><p><?=$public_r[sitename]?>微信公众号</p></div> 
					 
					 <div class="fr-ewm"><div class="ewm-pic"><img src="/skin/default/weixin.jpg" class="vm" /></div><p><?=$public_r[sitename]?>联系微信</p></div>
					
					<div class="fr-ewm"><div class="ewm-pic"><img src="/skin/default/weixin2.jpg" class="vm" /></div><p><?=$public_r[sitename]?>联系微信</p></div> 
					 
                </div>
            </div>
        </div>
    </footer>



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







    <script src="/skin/default/index.js"></script>
    <script type="text/javascript" src="/skin/default/player.mini.js"></script>
    <script type="text/javascript">
        var Video = {
            load: function (objs) {
                var objplay = jwplayer(objs.vcontainer).setup({
                    flashplayer: 'js/video/flashplay.swf',
                    html5player: 'js/video/html5player.js',
                    file: '',
                    image: '',
                    width: '100%',
                    height: '100%',
                    aspectratio: '16:9',
                    stretching: 'fill',
                    controls: 'true',
                    autostart: objs.isautoplay
                });
                return objplay;
            }
        }
        jQuery(function () {
            jQuery('.trailer').click(function () {
                Video.load({
                    vcontainer: 'videobox', //视频容器
                    isautoplay: 'true'
                });
                jQuery(".vwrap").fadeIn();
            });
            jQuery(".vwrap .closes,.vwrap .videobtg").click(function () {
                jQuery(".vwrap").hide();
                $('#videobox').html("");
            });
            //var setting = {
            //    "response": true,
            //    "scale": 0.8,
            //    afterClickBtnFn: function(i) {
            //        $(".dnSlide-item").eq(i).find('span').fadeIn().parents('li').siblings().find('span').fadeOut();
            //    }
            //};
            //$(window).on('load', function () {
            //    $('.dnSlide-main').dnSlide(setting);
            //})

        });
    </script>
   <script language="javascript" src="/AdShows/d719e8d6-fd0a-42b2-a56a-6f94e6bd974e.js"></script>


</body>


</html>
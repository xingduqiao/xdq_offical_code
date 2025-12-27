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
<title>订购服务_<?=$public_r[sitename]?></title>
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
        
        
        <section class="inside-pages-banner">
            <div class="ipb-pic"><img src="/skin/default/team.jpg" /></div>
            <div class="ipb-words">
                <h1 class="iwt1">订购服务</h1>
                <span class="iwt2">TEAM</span>
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
        


<style>
.button {
    background-color: #4CAF50; /* 绿色 */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 24px 2px 4px;
    cursor: pointer;
	border-radius:25px;
-moz-border-radius:25px; /* 老的 Firefox */
}

.button2 {background-color: #2581c2;} /* 蓝色 */
.button2:hover{background-color:#ff6600;}
</style>
    <!-- 内容 -->
		<section class="about1-cont-bg">
			<div class="about1-cont-box">
			    <h2 class="acb1-t1"  >订购服务</h2>
	
			    
				<!-- 章程列表 -->
				<div class="about2-list">
					<ul>
                        
                  
				   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品1、筹备成立首次业主大会</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：从申请成立业主大会筹备组开始，讲解筹备组的人员组成、代表产生等筹备组的准备工作，首次业主大会召开等工作流程及实操方法。草拟通过《管理规约》、《议事规则》、《业主委员会选举办法》等规章制度及会议公告、公示的起草工作。最终协助小区筹备成立小区业主委员会</p>
										<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>
                                    </div>
                                </li>

                         
				   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品2、续聘选聘物业服务企业</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：主要讲解启动物业服务企业选(续)聘的时机，采用续聘或直接启动选聘的基本工作流程及注意事项等。《物业服务合同》应当包括哪些内容、其如何细化方便业主委员会监督物业服务企业按照其履行合同内容并达到约定标准等。最终协助小区选出业主认可的物业服务企业</p>
					<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>
                                    </div>
                                </li>
								
								   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品3、筹划组织业主委员会换届与委员补选工作</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：主要讲解业主委员会换届启动、组织，业主委员会委员补选，补选时间，业主委员会委员不足总数二分之一或者集体辞职时，召集业主大会会议选举新一届业主委员会等。</p>
			<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>
                                    </div>
                                </li>
								
								
								   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品4、其他业主大会会议</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：《车辆管理规定》等规章制度及会议公告、公示的起草工作，剖析各类文件的作用与目的，解读相关条款的运用，梳理起草时注意事项，确保各文件便于大家理解，执行操作性强，不会因条款问题产生不必要的误会。最终协助小区完成会议召开</p>
		<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>
                                    </div>
                                </li>
								
								
								
								   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品5、小区专业顾问服务</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：一对一帮助小区调解日常物业管理问题，解答涉及问题的相关法律法规，保证小区的业主大会的规范性和合法性，为小区的日常管理保驾护航业务培训，对小区业主委员会、物业企业、全体业主进行物业相关的国家政策法律法规、小区规章制度、物业服务标准、案例分析的专题培训并解析业主委员会和业主关切的问题.</p>
		<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>
                                    </div>
                                </li>
								
								
								
								   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品6、小区秘书服务</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：派驻专职秘书1名，负责日常文件收发、业主大会和业主委员会会议安排、通知与记录、业主意见建议收集并根据业主委员会的决定回复、与物业服务企业对接人沟通联系、资料整理与归档、小区公众号的运营与维护等。</p>
			<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>	
                                    </div>
                                </li>
								
								
								
								   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品7、物业服务质量评估与监理</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：定制本小区的物业服务标准；编制服务规范，考核细则及管理手段，定期对秩序、卫生、绿化、设备、客户服务等物业管理模块进行系统监督检查，出具书面《评估报告》。</p>
		<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>	
                                    </div>
                                </li>		 
						 
						 
								   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品8、承接查验</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：新建物业交付项目和物业管理机构更迭承接查验。公司建立了承接查验标准化工作体系，以服务市场为导向，配置了电梯查验事业部、消防查验事业部、物业共用部位、共用设备、共用设施的专业人才，其目的是满足客户的需求，通过承接查验和报告，让物业资产得到有效保值和升值，让业主的生活环境越来越美好！</p>
		<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>	
                                    </div>
                                </li>		 
						 
						 				   <li>
                                    <p class="al2-chapter clearfix">
                                        <b class="ac2-l">产品9、小区招标代理服务</b>
                                        <i class="ac2-r btn-plus"></i>
                                    </p>
                                    <div class="al2-cont pageC">
                                        <p style="text-indent:2em;">服务标准和内容：公司内有工程、绿化、消防、监控、电梯等专业化团队，为小区量身定制招标管理方案，从而选出高性价比的服务供应商</p>
					<p><button class="button button2" onClick="window.open('../e/tool/feedback/?bid=2', '_blank');">订购产品</button></p>
                                    </div>
                                </li>		 
						 		 
						 

					
					
					</ul>
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





</body>


</html>
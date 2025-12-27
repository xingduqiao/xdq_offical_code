<?php
//使用密码控制



define ( 'EmpireCMSAdmin', '1' );
require('../../class/connect.php');
require ("../../class/db_sql.php");
require ("../../class/functions.php");
require ("../../class/t_functions.php");
require ("../../data/dbcache/class.php");
require '../'.LoadLang('pub/fun.php');
require ("../../data/dbcache/MemberLevel.php");
if(empty($_GET['pwd']) || $_GET['pwd'] != "48456412"){
 
   die('密码不对或未设置密码！');
}
echo "开启审核";
$link = db_connect ();
$empire = new mysqlquery ();
$enews = $_POST ['enews'];


//-------------编辑区------------------------
$id="36";
//参数 

//$id="36";

//-------------编辑区------------------------

if (empty ($id)) {
   die('没有填写要审核的栏目id');
}

$idarr=explode(",",$id);




foreach ($idarr as $value)
{
    if(!empty($value)){
    $str.="'".$value."',";
    }
}

		if( strrchr($str,",")==","){
	      $str = substr($str,0,strlen($str)-1);
	    
	}

$classidstr="classid in (".$str.")";   




$news_num =(int)$_GET['num'];
if($news_num<1){
    $news_num=2;
    
}

$class_list = $empire->query ( "SELECT classid,islast,tbname from {$dbtbpre}enewsclass where $classidstr" );
$class = array ();
$pclass = array ();
while ( $r = $empire->fetch ( $class_list ) ) {
    if ($r ['islast'] == '0') {
        array_push ($pclass,$r['classid'] );
        // 非终极栏目不可以发不信息,所以不参与信息审核
    } else {
        array_push ($class,  $r['tbname'].",".$r['classid']);
    }
}




$suiji=mt_rand(0,count($class)-1);

$data=explode(",",$class[$suiji]);

ecmscheck ($data[1], $data[0], $news_num);
  //ReIndex();

    //刷新首页  
    /*** * @param  $classid* @param  $table* @param  $num*/
    function ecmscheck($classid, $table, $num) {
        global $empire, $class_r, $dbtbpre;
        $time = time ();
        // 每周一审核的设置为推荐
        $isgood = '0';
        $day = strftime ( "%A" );
        if ($day == 'Monday') {
            $isgood = '1';
        }
        $res = $empire->query ( "select id from {$dbtbpre}ecms_" . $table . "_check where classid =" . $classid . " ORDER BY `truetime` ASC LIMIT {$num}" );
        while ( $r = $empire->fetch ( $res ) ) {
            $data [] = $r ['id'];
        }
        CheckNews_auto ( $classid, $data );
    }
    /*** 审核信息* @param  $classid* @param  $id*/
    function CheckNews_auto($classid, $id) {
        global $empire, $class_r, $dbtbpre, $emod_r, $adddatar;
        $classid = ( int ) $classid;
        $count = count ( $id );
        $time = time();
        //每周一审核的设置为推荐
        $isgood = strftime('%A') == 'Monday'?1:0;
        for ($i = 0; $i < $count; $i ++) {
            $infoid = ( int ) $id [$i];
            $infor = $empire->fetch1 ( "select * from {$dbtbpre}ecms_" . $class_r [$classid] [tbname] . "_check where id='$infoid' limit 1" );
  
            $res = $empire->query("update {$dbtbpre}ecms_".$class_r[$classid][tbname]."_check set truetime='$time',newstime='$time',lastdotime='$time',isgood='$isgood' where id='$infoid' limit 1");
            $sql = $empire->query ( "update {$dbtbpre}ecms_" . $class_r [$classid] [tbname] . "_index set checked=1,truetime='$time',newstime='$time',lastdotime='$time' where id='$infoid'" );
            // 未审核表转换
            MoveCheckInfoData ( $class_r [$classid] [tbname], 0, $infor ['stb'], "id='$infoid'" );
            // 更新栏目信息数
            AddClassInfos ( $infor ['classid'], '', '+1' );
            // 刷新信息
            GetHtml ( $infor ['classid'], $infor ['id'], $infor, 0 );
            echo '信息 '.$infor ['id'].' 内容页已经更新<hr/>';
            // 刷新列表
            ReListHtml ( $infor ['classid'], 1 );
            echo '终极栏目 '.$infor ['classid'].' 已经更新<hr/>';
        }
    }
    
       function ReIndex(){
    $indextemp=GetIndextemp();
    //取得模板
    NewsBq($classid,$indextemp,1,0);
    echo '首页已经刷新';
   }
   ReIndex();

db_close(); //关闭MYSQL链接
$empire=null; //注消操作类变量

?>
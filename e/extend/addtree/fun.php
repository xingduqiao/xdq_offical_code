<?php
//增加栏目
function AddTree($add,$userid,$username){
	global $empire,$dbtbpre;
	//增加外部栏目
	if($add[ecmsclasstype])
	{
		AddWbClass($add,$userid,$username);
	}
	$add[classpath]=trim($add[classpath]);
	if(!$add[classname]||!$add[classpath]||!$add[modid])
	{
		printerror("EmptyClass","");
	}
	if($add[islast]&&(!$add[newstempid]||!$add[listtempid]))
	{
		printerror("LastMustChange","");
	}
	//操作权限
	CheckLevel($userid,$username,$classid,"class");
	$add=DoPostClassVar($add);
	//目录已存在
	if(strstr($add[classpath],".")||strstr($add[classpath],"/")||strstr($add[classpath],"\\"))
	{
		printerror("badpath","");
	}
	$classpath=$add[pripath].$add[classpath];
	if(file_exists("../../".$classpath))
	{
		printerror("ReClasspath","");
	}
	$addtime=time();
	$ecms_fclast=time();
	//取得表名
	$tabler=GetModTable($add[modid]);
	$tabler[tid]=(int)$tabler[tid];
	//增加大栏目
	if(!$add[islast])
	{
		if(empty($add[bclassid]))//主栏目
		{
			$sonclass="";
			$featherclass="";
	    }
		else//中级栏目
		{
			//取得上一级父栏目
			$r=$empire->fetch1("select featherclass,islast,wburl from {$dbtbpre}enewsclass where classid='$add[bclassid]'");
			if($r[islast])//是否终极栏目
			{
				printerror("BclassNotLast","");
			}
			if($r[wburl])
			{
				printerror("BclassNotWb","");
			}
			if(empty($r[featherclass]))
			{
				$r[featherclass]="|";
			}
			$featherclass=$r[featherclass].$add[bclassid]."|";
			$sonclass="";
	    }
		//建立目录
		CreateClassPath($classpath);
		$sql=$empire->query("insert into {$dbtbpre}enewsclass(bclassid,classname,is_zt,sonclass,lencord,link_num,newstempid,onclick,listtempid,featherclass,islast,classpath,classtype,newspath,filename,filetype,openpl,openadd,newline,hotline,goodline,classurl,groupid,myorder,filename_qz,hotplline,modid,checked,firstline,bname,islist,searchtempid,tid,tbname,maxnum,checkpl,down_num,online_num,listorder,reorder,intro,classimg,jstempid,addinfofen,listdt,showclass,showdt,checkqadd,qaddlist,qaddgroupid,qaddshowkey,adminqinfo,doctime,classpagekey,dtlisttempid,classtempid,nreclass,nreinfo,nrejs,nottobq,ipath,addreinfo,haddlist,sametitle,definfovoteid,wburl,qeditchecked,wapstyleid,repreinfo,pltempid,cgroupid,yhid,wfid,cgtoinfo,bdinfoid,repagenum,keycid,addtime,oneinfo,addsql,wapislist,fclast) values($add[bclassid],'$add[classname]',0,'$sonclass',$add[lencord],$add[link_num],$add[newstempid],0,$add[listtempid],'$featherclass',$add[islast],'$classpath','$add[classtype]','$add[newspath]',$add[filename],'$add[filetype]',$add[openpl],$add[openadd],$add[newline],$add[hotline],$add[goodline],'$add[classurl]',$add[groupid],$add[myorder],'$add[filename_qz]',$add[hotplline],$add[modid],$add[checked],$add[firstline],'$add[bname]',$add[islist],$add[searchtempid],$tabler[tid],'$tabler[tbname]',$add[maxnum],$add[checkpl],$add[down_num],$add[online_num],'$add[listorder]','$add[reorder]','$add[intro]','$add[classimg]',$add[jstempid],$add[addinfofen],$add[listdt],$add[showclass],$add[showdt],$add[checkqadd],$add[qaddlist],'$add[qaddgroupid]',$add[qaddshowkey],$add[adminqinfo],$add[doctime],'$add[classpagekey]','$add[dtlisttempid]','$add[classtempid]',$add[nreclass],$add[nreinfo],$add[nrejs],$add[nottobq],'$add[ipath]',$add[addreinfo],$add[haddlist],$add[sametitle],$add[definfovoteid],'',$add[qeditchecked],$add[wapstyleid],'$add[repreinfo]','$add[pltempid]','$add[cgroupid]','$add[yhid]','$add[wfid]','$add[cgtoinfo]','$add[bdinfoid]','$add[repagenum]','$add[keycid]','$addtime','$add[oneinfo]','$add[addsql]','$add[wapislist]','$ecms_fclast');");
		$lastid=$empire->lastid();
		//副表
		$ret_cr=ReturnClassAddF($add,0);
		$empire->query("replace into {$dbtbpre}enewsclassadd(classid,classtext,eclasspagetext".$ret_cr[0].") values('$lastid','".eaddslashes2($add[classtext])."','$add[eclasspagetext]'".$ret_cr[1].");");
		//统计表
		$empire->query("replace into {$dbtbpre}enewsclass_stats(classid) values('$lastid');");
		//更新附件
		UpdateTheFileOther(1,$lastid,$add['filepass'],'other');
		TogNotReClass(1);
		GetClass();
		if($add[islist]==0||$add[islist]==2)
		{
			$classtemp=$add[islist]==2?GetClassText($lastid):GetClassTemp($add['classtempid']);
			NewsBq($lastid,$classtemp,0,1);
		}
		elseif($add[islist]==3)//栏目绑定信息
		{
			ReClassBdInfo($lastid);
		}
		DelListEnews();//删除缓存文件
		//GetSearch($add[modid]);//更新缓存
		if($sql)
		{
			//删除导航缓存
			$empire->query("delete from {$dbtbpre}enewsclassnavcache where navtype='listclass' or navtype='listenews' or navtype='jsclass' or (navtype='modclass' and modid='$add[modid]')");
			DelFiletext("../d/js/js/addinfo".$add[modid].".js");
			$cache_enews='doclass,doinfo,domod,dostemp';
			$cache_ecmstourl=urlencode("AddClass.php?enews=AddClass&from=".ehtmlspecialchars($add[from]).hReturnEcmsHashStrHref2(0));
			$cache_mess='AddClassSuccess';
			$cache_mid=$add[modid];
			$cache_url="CreateCache.php?enews=$cache_enews&mid=$cache_mid&ecmstourl=$cache_ecmstourl&mess=$cache_mess".hReturnEcmsHashStrHref2(0);
			insert_dolog("classid=".$lastid."<br>classname=".$add[classname]);//操作日志
		}
		else
		{
			printerror("DbError","");
		}
    }
	//增加终级栏目
	else
	{
		//文件前缀
		$add[filename_qz]=RepFilenameQz($add[filename_qz]);
		if(empty($add[bclassid]))//主类别为终级栏目时
		{
			$sonclass="";
			$featherclass="";
	    }
		else//子栏目
		{
			//取得上一级父栏目
			$r=$empire->fetch1("select featherclass,islast,wburl from {$dbtbpre}enewsclass where classid='$add[bclassid]'");
			//是否终极类别
			if($r[islast])
			{
				printerror("BclassNotLast","");
			}
			if($r[wburl])
			{
				printerror("BclassNotWb","");
			}
			if(empty($r[featherclass])){
				$r[featherclass]="|";
			}
			$featherclass=$r[featherclass].$add[bclassid]."|";
			$sonclass="";
		}
		//建立栏目目录
		CreateClassPath($classpath);
		$sql=$empire->query("insert into {$dbtbpre}enewsclass(bclassid,classname,sonclass,is_zt,lencord,link_num,newstempid,onclick,listtempid,featherclass,islast,classpath,classtype,newspath,filename,filetype,openpl,openadd,newline,hotline,goodline,classurl,groupid,myorder,filename_qz,hotplline,modid,checked,firstline,bname,islist,searchtempid,tid,tbname,maxnum,checkpl,down_num,online_num,listorder,reorder,intro,classimg,jstempid,addinfofen,listdt,showclass,showdt,checkqadd,qaddlist,qaddgroupid,qaddshowkey,adminqinfo,doctime,classpagekey,dtlisttempid,classtempid,nreclass,nreinfo,nrejs,nottobq,ipath,addreinfo,haddlist,sametitle,definfovoteid,wburl,qeditchecked,wapstyleid,repreinfo,pltempid,cgroupid,yhid,wfid,cgtoinfo,bdinfoid,repagenum,keycid,addtime,oneinfo,addsql,wapislist,fclast) values($add[bclassid],'$add[classname]','$sonclass',0,$add[lencord],$add[link_num],$add[newstempid],0,$add[listtempid],'$featherclass',$add[islast],'$classpath','$add[classtype]','$add[newspath]',$add[filename],'$add[filetype]',$add[openpl],$add[openadd],$add[newline],$add[hotline],$add[goodline],'$add[classurl]',$add[groupid],$add[myorder],'$add[filename_qz]',$add[hotplline],$add[modid],$add[checked],$add[firstline],'$add[bname]',$add[islist],$add[searchtempid],$tabler[tid],'$tabler[tbname]',$add[maxnum],$add[checkpl],$add[down_num],$add[online_num],'$add[listorder]','$add[reorder]','$add[intro]','$add[classimg]',$add[jstempid],$add[addinfofen],$add[listdt],$add[showclass],$add[showdt],$add[checkqadd],$add[qaddlist],'$add[qaddgroupid]',$add[qaddshowkey],$add[adminqinfo],$add[doctime],'$add[classpagekey]','$add[dtlisttempid]','$add[classtempid]',$add[nreclass],$add[nreinfo],$add[nrejs],$add[nottobq],'$add[ipath]',$add[addreinfo],$add[haddlist],$add[sametitle],$add[definfovoteid],'',$add[qeditchecked],$add[wapstyleid],'$add[repreinfo]','$add[pltempid]','$add[cgroupid]','$add[yhid]','$add[wfid]','$add[cgtoinfo]','$add[smallbdinfoid]','$add[repagenum]','$add[keycid]','$addtime','$add[oneinfo]','$add[addsql]','$add[wapislist]','$ecms_fclast');");
		$lastid=$empire->lastid();
		//副表
		$ret_cr=ReturnClassAddF($add,0);
		$empire->query("replace into {$dbtbpre}enewsclassadd(classid,classtext,eclasspagetext".$ret_cr[0].") values('$lastid','".eaddslashes2($add[classtext])."','$add[eclasspagetext]'".$ret_cr[1].");");
		//统计表
		$empire->query("replace into {$dbtbpre}enewsclass_stats(classid) values('$lastid');");
		//修改父栏目的子栏目
		if($add[bclassid])
		{
			$b_r=$empire->fetch1("select sonclass,featherclass from {$dbtbpre}enewsclass where classid='$add[bclassid]'");
			if(empty($b_r[sonclass]))
			{
				$b_r[sonclass]="|";
			}
			$new_sonclass=$b_r[sonclass].$lastid."|";
			$update=$empire->query("update {$dbtbpre}enewsclass set sonclass='$new_sonclass' where classid='$add[bclassid]'");
			//更改父类别的父栏目的子栏目
			$where=ReturnClass($b_r[featherclass]);
			if(empty($where)){
				$where="classid=0";
			}
			$bsql=$empire->query("select sonclass,classid from {$dbtbpre}enewsclass where ".$where);
			while($br=$empire->fetch($bsql))
			{
				if(empty($br[sonclass]))
				{
					$br[sonclass]="|";
				}
				$new_sonclass=$br[sonclass].$lastid."|";
				$update=$empire->query("update {$dbtbpre}enewsclass set sonclass='$new_sonclass' where classid='$br[classid]'");
            }
	    }
		//更新附件
		UpdateTheFileOther(1,$lastid,$add['filepass'],'other');
		DelListEnews();//删除缓存文件
		TogNotReClass(1);
		GetClass();
		GetSearch($add[modid]);//更新缓存
		if($sql)
		{
			//删除导航缓存
			$empire->query("delete from {$dbtbpre}enewsclassnavcache where navtype='listclass' or navtype='listenews' or navtype='jsclass' or (navtype='modclass' and modid='$add[modid]')");
			DelFiletext("../../../d/js/js/addinfo".$add[modid].".js");
			$cache_enews='doclass,doinfo,domod,dostemp';
			$cache_ecmstourl=urlencode("AddClass.php?enews=AddClass&from=".ehtmlspecialchars($add[from]).hReturnEcmsHashStrHref2(0));
			$cache_mess='AddLastClassSuccess';
			$cache_mid=$add[modid];
			insert_dolog("classid=".$lastid."<br>classname=".$add[classname]);//操作日志
			echo 'ok';
		}
		else
		{
			printerror("DbError","history.go(-1)");
		}
    }
}
//删除栏目缓存文件
function Delcache(){
	global $empire,$dbtbpre,$logininid,$loginin;
	//验证权限
	CheckLevel($logininid,$loginin,0,"changedata");

	DelListEnews();
	//删除导航缓存
	$empire->query("delete from {$dbtbpre}enewsclassnavcache");
	$cache_enews='doclass,doinfo,douserinfo,domod,dostemp';
	$cache_ecmstourl=urlencode("history.go(-1)");
	$cache_mess='DelListEnewsSuccess';
	$cache_url="../../admin/CreateCache.php?enews=$cache_enews&ecmstourl=$cache_ecmstourl&mess=$cache_mess".hReturnEcmsHashStrHref2(0);
	//操作日志
	insert_dolog("");
	//printerror("DelListEnewsSuccess","history.go(-1)");
	echo'<meta http-equiv="refresh" content="0;url='.$cache_url.'">';
	db_close();
	$empire=null;
	exit();
}
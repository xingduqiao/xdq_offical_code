<?php
@include("../../inc/header.php");

/*
		SoftName : EmpireBak
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

E_D("DROP TABLE IF EXISTS `phome_enewsmemberadd`;");
E_C("CREATE TABLE `phome_enewsmemberadd` (
  `userid` int(10) unsigned NOT NULL DEFAULT '0',
  `truename` varchar(20) NOT NULL DEFAULT '',
  `jbname` varchar(25) NOT NULL DEFAULT '',
  `jbrsfz` varchar(120) NOT NULL DEFAULT '',
  `mycall` varchar(30) NOT NULL DEFAULT '',
  `comemail` varchar(30) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `qysh` varchar(100) NOT NULL DEFAULT '',
  `spacestyleid` smallint(6) NOT NULL DEFAULT '0',
  `jbrtel` varchar(200) NOT NULL DEFAULT '',
  `khhmc` varchar(100) NOT NULL DEFAULT '',
  `company` varchar(255) NOT NULL DEFAULT '',
  `frsfz` varchar(255) NOT NULL DEFAULT '',
  `userpic` varchar(200) NOT NULL DEFAULT '',
  `spacename` varchar(255) NOT NULL DEFAULT '',
  `spacegg` text NOT NULL,
  `viewstats` int(11) NOT NULL DEFAULT '0',
  `regip` varchar(20) NOT NULL DEFAULT '',
  `lasttime` int(10) unsigned NOT NULL DEFAULT '0',
  `lastip` varchar(20) NOT NULL DEFAULT '',
  `loginnum` int(10) unsigned NOT NULL DEFAULT '0',
  `regipport` varchar(6) NOT NULL DEFAULT '',
  `lastipport` varchar(6) NOT NULL DEFAULT '',
  `comzh` varchar(100) NOT NULL DEFAULT '',
  `yyzz` varchar(100) NOT NULL DEFAULT '',
  `qyzzzs` varchar(100) NOT NULL DEFAULT '',
  `sqwts` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8");
E_D("replace into `phome_enewsmemberadd` values('1','','','','','','','','1','','','','','','','','0',0x3132372e302e302e31,'1645448047',0x3131352e3230342e3233312e323334,'14',0x3539373234,0x3630313832,'','','','');");
E_D("replace into `phome_enewsmemberadd` values('2','','','','','','','','1','','','','','','','','0',0x33392e3137302e38382e313833,'1646980088',0x33392e3137302e38382e313833,'4',0x3533363737,0x3536333434,'','','','');");

@include("../../inc/footer.php");
?>
<?php
@include("../../inc/header.php");

/*
		SoftName : EmpireBak
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

E_D("DROP TABLE IF EXISTS `phome_enewssearch`;");
E_C("CREATE TABLE `phome_enewssearch` (
  `searchid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `keyboard` varchar(255) NOT NULL DEFAULT '',
  `searchtime` int(10) unsigned NOT NULL DEFAULT '0',
  `searchclass` varchar(255) NOT NULL DEFAULT '',
  `result_num` int(10) unsigned NOT NULL DEFAULT '0',
  `searchip` varchar(20) NOT NULL DEFAULT '',
  `classid` varchar(255) NOT NULL DEFAULT '',
  `onclick` int(10) unsigned NOT NULL DEFAULT '0',
  `orderby` varchar(30) NOT NULL DEFAULT '0',
  `myorder` tinyint(1) NOT NULL DEFAULT '0',
  `checkpass` varchar(32) NOT NULL DEFAULT '',
  `tbname` varchar(60) NOT NULL DEFAULT '',
  `tempid` smallint(5) unsigned NOT NULL DEFAULT '0',
  `iskey` tinyint(1) NOT NULL DEFAULT '0',
  `andsql` text NOT NULL,
  `trueclassid` smallint(5) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`searchid`),
  KEY `checkpass` (`checkpass`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8");
E_D("replace into `phome_enewssearch` values('1',0xe789a9e4b89a,'1634289613',0x7469746c65,'189',0x3132372e302e302e31,'','3',0x6e65777374696d65,'0',0x3463313837653663396561316333623163316235616432343633383430323765,0x6e657773,'1','0',0x20616e642028287469746c65204c494b45202725e789a9e4b89a25272929,'0');");
E_D("replace into `phome_enewssearch` values('2',0xe7a791e68a80,'1634296031',0x7469746c65,'77',0x3132372e302e302e31,'','17',0x6e65777374696d65,'0',0x3863316432626634613537643534333363633932366263306535396332303164,0x6e657773,'1','0',0x20616e642028287469746c65204c494b45202725e7a791e68a8025272929,'0');");
E_D("replace into `phome_enewssearch` values('3',0xe59f8ee5b882,'1634296080',0x7469746c65,'2',0x3132372e302e302e31,'','2',0x6e65777374696d65,'0',0x3932383662616539356337366163386561333933373134326535396361646166,0x6e657773,'1','0',0x20616e642028287469746c65204c494b45202725e59f8ee5b88225272929,'0');");
E_D("replace into `phome_enewssearch` values('4',0xe6a188e4be8b,'1634295080',0x7469746c65,'1',0x3132372e302e302e31,'','1',0x6e65777374696d65,'0',0x3934313161376435373066666262363364613939323137363735373134326131,0x6e657773,'1','0',0x20616e642028287469746c65204c494b45202725e6a188e4be8b25272929,'0');");

@include("../../inc/footer.php");
?>
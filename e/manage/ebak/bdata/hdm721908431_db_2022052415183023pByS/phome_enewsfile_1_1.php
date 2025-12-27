<?php
@include("../../inc/header.php");

/*
		SoftName : EmpireBak
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

E_D("DROP TABLE IF EXISTS `phome_enewsfile_1`;");
E_C("CREATE TABLE `phome_enewsfile_1` (
  `fileid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pubid` bigint(16) unsigned NOT NULL DEFAULT '0',
  `filename` char(60) NOT NULL DEFAULT '',
  `filesize` int(10) unsigned NOT NULL DEFAULT '0',
  `path` char(20) NOT NULL DEFAULT '',
  `adduser` char(30) NOT NULL DEFAULT '',
  `filetime` int(10) unsigned NOT NULL DEFAULT '0',
  `classid` smallint(5) unsigned NOT NULL DEFAULT '0',
  `no` char(60) NOT NULL DEFAULT '',
  `type` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `onclick` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `id` int(10) unsigned NOT NULL DEFAULT '0',
  `cjid` int(10) unsigned NOT NULL DEFAULT '0',
  `fpath` tinyint(1) NOT NULL DEFAULT '0',
  `modtype` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`fileid`),
  KEY `id` (`id`),
  KEY `type` (`type`),
  KEY `classid` (`classid`),
  KEY `pubid` (`pubid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8");
E_D("replace into `phome_enewsfile_1` values('1','1000010000000340',0x34346361376661373638353865613035313162376266613038396265626634652e6a7067,'435328',0x323032312f31322d3331,0x61646d696e,'1640932230','33',0xe8af9de58aa12e6a7067,'1','0','340','0','1','0');");
E_D("replace into `phome_enewsfile_1` values('6','1000010000000340',0x62383163383233633036333032643533333339633939653733333039303165322e6a7067,'160490',0x323032312f31322d3331,0x61646d696e,'1640934635','33',0xe585ace58fb86c6f676f342e6a7067,'1','0','340','0','1','0');");
E_D("replace into `phome_enewsfile_1` values('7','1000010000000340',0x736d616c6c62383163383233633036333032643533333339633939653733333039303165322e6a7067,'2764',0x323032312f31322d3331,0x61646d696e,'1640934635','33',0x5b735de585ace58fb86c6f676f342e6a7067,'1','0','340','0','1','0');");

@include("../../inc/footer.php");
?>
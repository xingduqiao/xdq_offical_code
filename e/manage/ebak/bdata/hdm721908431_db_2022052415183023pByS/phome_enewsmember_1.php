<?php
@include("../../inc/header.php");

/*
		SoftName : EmpireBak
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

E_D("DROP TABLE IF EXISTS `phome_enewsmember`;");
E_C("CREATE TABLE `phome_enewsmember` (
  `userid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(20) NOT NULL DEFAULT '',
  `password` char(32) NOT NULL DEFAULT '',
  `rnd` char(20) NOT NULL DEFAULT '',
  `email` char(50) NOT NULL DEFAULT '',
  `registertime` int(10) unsigned NOT NULL DEFAULT '0',
  `groupid` smallint(5) unsigned NOT NULL DEFAULT '0',
  `userfen` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `userdate` int(10) unsigned NOT NULL DEFAULT '0',
  `money` float(11,2) NOT NULL DEFAULT '0.00',
  `zgroupid` smallint(5) unsigned NOT NULL DEFAULT '0',
  `havemsg` tinyint(1) NOT NULL DEFAULT '0',
  `checked` tinyint(1) NOT NULL DEFAULT '0',
  `salt` char(8) NOT NULL DEFAULT '',
  `userkey` char(12) NOT NULL DEFAULT '',
  `ingid` smallint(5) unsigned NOT NULL DEFAULT '0',
  `agid` smallint(5) unsigned NOT NULL DEFAULT '0',
  `isern` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username` (`username`),
  KEY `groupid` (`groupid`),
  KEY `ingid` (`ingid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8");
E_D("replace into `phome_enewsmember` values('1',0x313233343536,0x3431666239346532376238336663663862636334663539336338363037636339,0x6c43775a594b70507a786a3637494a454f37486b,0x323633333430313337394071712e636f6d,'1634177899','1','3','0','0.00','0','0','1',0x4e5669586972,0x446e46497253494b76597646,'0','0','0');");
E_D("replace into `phome_enewsmember` values('2',0x61646d696e,0x3566306535623036613661383533633935626439646531316166336661323163,0x3941347544707277326a55726a735658547a504d,0x3837323931393330364071712e636f6d,'1640745024','2','0','0','0.00','0','0','1',0x4f66566d356a,0x6348364a6662736e34324c73,'0','0','0');");

@include("../../inc/footer.php");
?>
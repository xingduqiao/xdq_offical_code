<?php
@include("../../inc/header.php");

/*
		SoftName : EmpireBak
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

E_D("DROP TABLE IF EXISTS `phome_enewsfeedback`;");
E_C("CREATE TABLE `phome_enewsfeedback` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bid` smallint(5) unsigned NOT NULL DEFAULT '0',
  `title` varchar(120) NOT NULL DEFAULT '',
  `saytext` text NOT NULL,
  `name` varchar(30) NOT NULL DEFAULT '',
  `email` varchar(80) NOT NULL DEFAULT '',
  `mycall` varchar(30) NOT NULL DEFAULT '',
  `homepage` varchar(160) NOT NULL DEFAULT '',
  `company` varchar(80) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `saytime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `job` varchar(36) NOT NULL DEFAULT '',
  `ip` varchar(20) NOT NULL DEFAULT '',
  `filepath` varchar(20) NOT NULL DEFAULT '',
  `filename` text NOT NULL,
  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `username` varchar(20) NOT NULL DEFAULT '',
  `haveread` tinyint(1) NOT NULL DEFAULT '0',
  `eipport` varchar(6) NOT NULL DEFAULT '',
  `cpxz` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `bid` (`bid`),
  KEY `haveread` (`haveread`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8");
E_D("replace into `phome_enewsfeedback` values('1','2',0xe8a5bfe9878ee4b883e6bf91efbc9ae6b885e6b581e4b880e888ace79a84e7ac91e5aeb9e6b281e4babae5bf83e884be,0xe69e97e58e85,0xe78e8be4ba94,'',0x32313433343133,'','','','2021-11-05 11:17:43','',0x3132372e302e302e31,'','','0','','1',0x3631383537,'');");
E_D("replace into `phome_enewsfeedback` values('2','2','','',0xe5bca0e5bcba,'',0x32313433343133,'','','','2021-11-05 11:27:57','',0x3132372e302e302e31,'','','0','','1',0x3632353133,0x7ce4baa7e59381312ee7adb9e5a487e68890e7ab8be9a696e6aca1e4b89ae4b8bbe5a4a7e4bc9a7ce4baa7e59381362ee5b08fe58cbae7a798e4b9a6e69c8de58aa17c);");
E_D("replace into `phome_enewsfeedback` values('3','2','','',0xe5b08fe4ba91,'',0x313338343635343635343435,'','','','2021-11-05 11:59:36','',0x3132372e302e302e31,'','','0','','1',0x3634373730,0x7ce4baa7e59381332ee7adb9e58892e7bb84e7bb87e4b89ae4b8bbe5a794e59198e4bc9ae68da2e5b18ae4b88ee5a794e59198e8a1a5e98089e5b7a5e4bd9c7ce4baa7e59381382ee689bfe68ea5e69fa5e9aa8c7ce4baa7e59381392ee5b08fe58cbae68b9be6a087e4bba3e79086e69c8de58aa17c);");
E_D("replace into `phome_enewsfeedback` values('4','2','','',0xe590b4e58588e7949f,'',0x3138363134303935373736,'','','','2022-02-12 23:13:34','',0x3132332e3132332e3232322e313635,'','','0','','0',0x3134363537,0x7ce4baa7e59381312ee7adb9e5a487e68890e7ab8be9a696e6aca1e4b89ae4b8bbe5a4a7e4bc9a7ce4baa7e59381322ee7bbade88198e98089e88198e789a9e4b89ae69c8de58aa1e4bc81e4b89a7ce4baa7e59381332ee7adb9e58892e7bb84e7bb87e4b89ae4b8bbe5a794e59198e4bc9ae68da2e5b18ae4b88ee5a794e59198e8a1a5e98089e5b7a5e4bd9c7ce4baa7e59381342ee585b6e4bb96e4b89ae4b8bbe5a4a7e4bc9ae4bc9ae8aeae7ce4baa7e59381352ee5b08fe58cbae4b893e4b89ae9a1bee997aee69c8de58aa17ce4baa7e59381362ee5b08fe58cbae7a798e4b9a6e69c8de58aa17ce4baa7e59381372ee789a9e4b89ae69c8de58aa1e8b4a8);");
E_D("replace into `phome_enewsfeedback` values('5','2','','',0xe4bf9ee5bca0e69997,'',0x3135333235383832383739,'','','','2022-04-19 15:16:42','',0x33362e32382e3231312e3933,'','','0','','0',0x3337373539,0x7ce4baa7e59381312ee7adb9e5a487e68890e7ab8be9a696e6aca1e4b89ae4b8bbe5a4a7e4bc9a7c);");

@include("../../inc/footer.php");
?>
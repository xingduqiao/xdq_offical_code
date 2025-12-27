<?php
@include("../../inc/header.php");

/*
		SoftName : EmpireBak
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

E_D("DROP TABLE IF EXISTS `phome_enewsfeedbackf`;");
E_C("CREATE TABLE `phome_enewsfeedbackf` (
  `fid` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `f` varchar(30) NOT NULL DEFAULT '',
  `fname` varchar(30) NOT NULL DEFAULT '',
  `fform` varchar(20) NOT NULL DEFAULT '',
  `fzs` varchar(255) NOT NULL DEFAULT '',
  `myorder` smallint(6) NOT NULL DEFAULT '0',
  `ftype` varchar(30) NOT NULL DEFAULT '',
  `flen` varchar(20) NOT NULL DEFAULT '',
  `fformsize` varchar(12) NOT NULL DEFAULT '',
  `fvalue` text NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8");
E_D("replace into `phome_enewsfeedbackf` values('1',0x7469746c65,0xe6a087e9a298,0x74657874,'','7',0x56415243484152,0x313230,'','');");
E_D("replace into `phome_enewsfeedbackf` values('2',0x73617974657874,0xe58685e5aeb9,0x7465787461726561,'','8',0x54455854,'','','');");
E_D("replace into `phome_enewsfeedbackf` values('3',0x6e616d65,0xe5a793e5908d,0x74657874,'','1',0x56415243484152,0x3330,'','');");
E_D("replace into `phome_enewsfeedbackf` values('4',0x656d61696c,0xe982aee7aeb1,0x74657874,'','3',0x56415243484152,0x3830,'','');");
E_D("replace into `phome_enewsfeedbackf` values('5',0x6d7963616c6c,0xe794b5e8af9d,0x74657874,'','4',0x56415243484152,0x3330,'','');");
E_D("replace into `phome_enewsfeedbackf` values('6',0x686f6d6570616765,0xe7bd91e7ab99,0x74657874,'','5',0x56415243484152,0x313630,'','');");
E_D("replace into `phome_enewsfeedbackf` values('7',0x636f6d70616e79,0xe585ace58fb8e5908de7a7b0,0x74657874,'','2',0x56415243484152,0x3830,'','');");
E_D("replace into `phome_enewsfeedbackf` values('8',0x61646472657373,0xe88194e7b3bbe59cb0e59d80,0x74657874,'','6',0x56415243484152,0x323535,'','');");
E_D("replace into `phome_enewsfeedbackf` values('9',0x6a6f62,0xe8818ce58aa1,0x74657874,'','1',0x56415243484152,0x3336,'','');");
E_D("replace into `phome_enewsfeedbackf` values('10',0x6370787a,0xe4baa7e59381e98089e68ba9,0x636865636b626f78,'','0',0x56415243484152,0x313030,'',0xe4baa7e59381312ee7adb9e5a487e68890e7ab8be9a696e6aca1e4b89ae4b8bbe5a4a7e4bc9a7ce4baa7e59381322ee7bbade88198e98089e88198e789a9e4b89ae69c8de58aa1e4bc81e4b89a7ce4baa7e59381332ee7adb9e58892e7bb84e7bb87e4b89ae4b8bbe5a794e59198e4bc9ae68da2e5b18ae4b88ee5a794e59198e8a1a5e98089e5b7a5e4bd9c7ce4baa7e59381342ee585b6e4bb96e4b89ae4b8bbe5a4a7e4bc9ae4bc9ae8aeae7ce4baa7e59381352ee5b08fe58cbae4b893e4b89ae9a1bee997aee69c8de58aa17ce4baa7e59381362ee5b08fe58cbae7a798e4b9a6e69c8de58aa17ce4baa7e59381372ee789a9e4b89ae69c8de58aa1e8b4a8e9878fe8af84e4bcb0e4b88ee79b91e790867ce4baa7e59381382ee689bfe68ea5e69fa5e9aa8c7ce4baa7e59381392ee5b08fe58cbae68b9be6a087e4bba3e79086e69c8de58aa1);");

@include("../../inc/footer.php");
?>
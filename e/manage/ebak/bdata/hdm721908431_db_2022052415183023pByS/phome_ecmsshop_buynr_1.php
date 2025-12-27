<?php
@include("../../inc/header.php");

/*
		SoftName : EmpireBak
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

E_D("DROP TABLE IF EXISTS `phome_ecmsshop_buynr`;");
E_C("CREATE TABLE `phome_ecmsshop_buynr` (
  `vid` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `classid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `buytime` int(11) NOT NULL,
  `endtime` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  PRIMARY KEY (`vid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8");
E_D("replace into `phome_ecmsshop_buynr` values('1','322','27','1',0x313233343536,'1640316912','0','0','3');");
E_D("replace into `phome_ecmsshop_buynr` values('2','321','27','1',0x313233343536,'1640317687','0','0','4');");

@include("../../inc/footer.php");
?>
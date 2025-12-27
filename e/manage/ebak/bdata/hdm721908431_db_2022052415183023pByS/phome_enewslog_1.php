<?php
@include("../../inc/header.php");

/*
		SoftName : EmpireBak
		Author   : wm_chief
		Copyright: Powered by www.phome.net
*/

E_D("DROP TABLE IF EXISTS `phome_enewslog`;");
E_C("CREATE TABLE `phome_enewslog` (
  `loginid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL DEFAULT '',
  `logintime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `loginip` varchar(20) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `password` varchar(30) NOT NULL DEFAULT '',
  `loginauth` tinyint(1) NOT NULL DEFAULT '0',
  `ipport` varchar(6) NOT NULL DEFAULT '',
  PRIMARY KEY (`loginid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=utf8");
E_D("replace into `phome_enewslog` values('1',0x61646d696e,'2021-10-14 08:56:39',0x3132372e302e302e31,'1','','0',0x3530363639);");
E_D("replace into `phome_enewslog` values('2',0x61646d696e,'2021-10-14 10:43:36',0x3132372e302e302e31,'1','','0',0x3535313534);");
E_D("replace into `phome_enewslog` values('3',0x61646d696e,'2021-10-14 10:59:52',0x3132372e302e302e31,'1','','0',0x3539383139);");
E_D("replace into `phome_enewslog` values('4',0x61646d696e,'2021-10-14 13:29:38',0x3132372e302e302e31,'1','','0',0x3530333934);");
E_D("replace into `phome_enewslog` values('5',0x61646d696e,'2021-10-14 13:54:32',0x3132372e302e302e31,'1','','0',0x3530393530);");
E_D("replace into `phome_enewslog` values('6',0x61646d696e,'2021-10-14 14:01:12',0x3132372e302e302e31,'1','','0',0x3531393336);");
E_D("replace into `phome_enewslog` values('7',0x61646d696e,'2021-10-15 14:49:40',0x3132372e302e302e31,'1','','0',0x3634353538);");
E_D("replace into `phome_enewslog` values('8',0x61646d696e,'2021-10-15 16:46:29',0x3132372e302e302e31,'1','','0',0x3439383132);");
E_D("replace into `phome_enewslog` values('9',0x61646d696e,'2021-10-15 18:45:26',0x3132372e302e302e31,'1','','0',0x3634313039);");
E_D("replace into `phome_enewslog` values('10',0x61646d696e,'2021-10-18 07:30:35',0x3132372e302e302e31,'1','','0',0x3633393530);");
E_D("replace into `phome_enewslog` values('11',0x61646d696e,'2021-10-26 16:44:39',0x3132372e302e302e31,'1','','0',0x3634393030);");
E_D("replace into `phome_enewslog` values('12',0x61646d696e,'2021-10-26 19:18:57',0x3132372e302e302e31,'1','','0',0x3630313532);");
E_D("replace into `phome_enewslog` values('13',0x61646d696e,'2021-10-26 20:07:59',0x3232332e3130342e31342e3838,'1','','0',0x3432353232);");
E_D("replace into `phome_enewslog` values('14',0x61646d696e,'2021-11-01 10:20:49',0x3231382e32362e3135392e3335,'1','','0',0x3131333838);");
E_D("replace into `phome_enewslog` values('15',0x61646d696e,'2021-11-04 14:31:18',0x3231382e32362e3135392e313339,'1','','0',0x3134363937);");
E_D("replace into `phome_enewslog` values('16',0x61646d696e,'2021-11-04 14:48:36',0x3132372e302e302e31,'1','','0',0x3630353339);");
E_D("replace into `phome_enewslog` values('17',0x61646d696e,'2021-11-04 20:48:48',0x3132372e302e302e31,'1','','0',0x3534313239);");
E_D("replace into `phome_enewslog` values('18',0x61646d696e,'2021-11-05 08:11:53',0x3132372e302e302e31,'1','','0',0x3539333731);");
E_D("replace into `phome_enewslog` values('19',0x61646d696e,'2021-11-05 11:01:27',0x3132372e302e302e31,'1','','0',0x3630373532);");
E_D("replace into `phome_enewslog` values('20',0x61646d696e,'2021-11-05 13:22:28',0x3132372e302e302e31,'1','','0',0x3439333739);");
E_D("replace into `phome_enewslog` values('21',0x61646d696e,'2021-11-05 14:51:09',0x3132372e302e302e31,'1','','0',0x3535323439);");
E_D("replace into `phome_enewslog` values('22',0x61646d696e,'2021-12-22 17:54:32',0x3131372e3133362e342e3538,'1','','0',0x36323938);");
E_D("replace into `phome_enewslog` values('23',0x61646d696e,'2021-12-23 08:10:10',0x3131372e3133362e342e313931,'1','','0',0x3338383233);");
E_D("replace into `phome_enewslog` values('24',0x61646d696e,'2021-12-23 10:40:31',0x3131372e3133362e342e313931,'1','','0',0x3338383335);");
E_D("replace into `phome_enewslog` values('25',0x61646d696e,'2021-12-23 11:24:53',0x3131372e3133362e342e313931,'1','','0',0x3339373031);");
E_D("replace into `phome_enewslog` values('26',0x61646d696e,'2021-12-24 10:43:14',0x3231382e32362e3135392e313532,'1','','0',0x3232353531);");
E_D("replace into `phome_enewslog` values('27',0x61646d696e,'2021-12-27 11:37:47',0x3231382e32362e3135382e3834,'1','','0',0x3436363636);");
E_D("replace into `phome_enewslog` values('28',0x61646d696e,'2021-12-27 14:58:04',0x3231382e32362e3135382e3238,'1','','0',0x38323436);");
E_D("replace into `phome_enewslog` values('29',0x61646d696e,'2021-12-28 14:27:37',0x33392e3137302e38382e313833,'0','','0',0x3631333037);");
E_D("replace into `phome_enewslog` values('30',0x61646d696e,'2021-12-28 14:28:03',0x33392e3137302e38382e313833,'0','','0',0x3631333037);");
E_D("replace into `phome_enewslog` values('31',0x61646d696e,'2021-12-28 14:28:31',0x33392e3137302e38382e313833,'0','','0',0x3631333037);");
E_D("replace into `phome_enewslog` values('32',0x61646d696e,'2021-12-28 14:30:13',0x33392e3137302e38382e313833,'0','','0',0x3631333037);");
E_D("replace into `phome_enewslog` values('33',0x61646d696e,'2021-12-28 14:52:14',0x33392e3137302e38382e313833,'1','','0',0x3631383731);");
E_D("replace into `phome_enewslog` values('34',0x61646d696e,'2021-12-28 20:22:11',0x3132322e3233332e3131312e3533,'1','','0',0x3536313536);");
E_D("replace into `phome_enewslog` values('35',0x61646d696e,'2021-12-29 10:16:02',0x33392e3137302e38382e313833,'1','','0',0x3533333930);");
E_D("replace into `phome_enewslog` values('36',0x61646d696e,'2021-12-29 10:36:26',0x3231382e32362e3135392e3834,'1','','0',0x3536313433);");
E_D("replace into `phome_enewslog` values('37',0x61646d696e,'2021-12-29 10:39:53',0x33392e3137302e38382e313833,'1','','0',0x3533383636);");
E_D("replace into `phome_enewslog` values('38',0x61646d696e,'2021-12-29 11:56:52',0x33392e3137302e38382e313833,'1','','0',0x3536343036);");
E_D("replace into `phome_enewslog` values('39',0x61646d696e,'2021-12-31 10:53:18',0x33392e3137302e38382e313833,'1','','0',0x3533393436);");
E_D("replace into `phome_enewslog` values('40',0x61646d696e,'2021-12-31 11:51:16',0x3231382e32362e3135382e3332,'1','','0',0x3231363935);");
E_D("replace into `phome_enewslog` values('41',0x61646d696e,'2021-12-31 13:45:39',0x3231382e32362e3135382e3332,'1','','0',0x3233393739);");
E_D("replace into `phome_enewslog` values('42',0x61646d696e,'2021-12-31 13:50:20',0x33392e3137302e38382e313833,'1','','0',0x3631323138);");
E_D("replace into `phome_enewslog` values('43',0x61646d696e,'2021-12-31 14:22:35',0x33392e3137302e38382e313833,'1','','0',0x3632303736);");
E_D("replace into `phome_enewslog` values('44',0x61646d696e,'2021-12-31 14:32:47',0x33392e3137302e38382e313833,'1','','0',0x3535393032);");
E_D("replace into `phome_enewslog` values('45',0x61646d696e,'2021-12-31 14:38:40',0x33392e3137302e38382e313833,'1','','0',0x3632383734);");
E_D("replace into `phome_enewslog` values('46',0x61646d696e,'2021-12-31 14:58:51',0x33392e3137302e38382e313833,'1','','0',0x3633353437);");
E_D("replace into `phome_enewslog` values('47',0x61646d696e,'2022-01-06 15:23:33',0x33392e3137302e38382e313833,'0','','0',0x3632393039);");
E_D("replace into `phome_enewslog` values('48',0x61646d696e,'2022-01-06 15:23:58',0x33392e3137302e38382e313833,'1','','0',0x3632393039);");
E_D("replace into `phome_enewslog` values('49',0x61646d696e,'2022-01-10 15:37:30',0x33392e3137302e38382e313833,'1','','0',0x3633333234);");
E_D("replace into `phome_enewslog` values('50',0x61646d696e,'2022-01-10 15:41:27',0x33392e3137302e38382e313833,'1','','0',0x3633343239);");
E_D("replace into `phome_enewslog` values('51',0x61646d696e,'2022-01-12 09:26:04',0x33392e3137302e38382e313833,'1','','0',0x3537333738);");
E_D("replace into `phome_enewslog` values('52',0x61646d696e,'2022-02-21 20:35:59',0x3131332e32372e34342e3932,'1','','0',0x3434383736);");
E_D("replace into `phome_enewslog` values('53',0x61646d696e,'2022-03-11 14:41:30',0x3131332e32372e34342e313036,'1','','0',0x3237373835);");
E_D("replace into `phome_enewslog` values('54',0x61646d696e,'2022-03-11 16:27:44',0x3131332e32372e34342e313036,'1','','0',0x3236373734);");
E_D("replace into `phome_enewslog` values('55',0x61646d696e,'2022-03-11 17:10:22',0x33392e3137302e38382e313833,'1','','0',0x3538373734);");
E_D("replace into `phome_enewslog` values('56',0x61646d696e,'2022-05-24 15:15:00',0x3131332e32372e34372e313133,'1','','0',0x3439343730);");

@include("../../inc/footer.php");
?>
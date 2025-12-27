/*
淮安叉叉网络科技有限公司（Ecmsshop开发中心）是国内CMS+电商系统及服务提供的领导品牌，业内首家基于帝国cms模板,插件开发的企业，是中国最专业、最具开发实力的独立CMS+电商服务商。叉叉网络始终秉承"为企业实现形象展示及电子商务"之理念，专注于网站管理系统以及电子商务软件的研发，为传统企业及平台电商提供电子商务及CMS系统的解决方案。

yecha
QQ:372009617

*/
$(function(){
	if($(".buynr").length>0){
		loadnr();
	}
})

function loadnr(){
	var classid=$(".buynr").attr("classid"),id=$(".buynr").attr("xxid");
		$.post("/e/ecmsshop/buynr/",{id:id,classid:classid},function(data,status){
			var obj = eval( "(" + data + ")" );
			if(obj.zt=="ok"){
				$(".buynr").html(obj.nr);
			}
	})
}

function buynr(classid,id,point){
	layer.confirm('<p class="pop_info_show">购买完整内容需要扣除'+point+'点<br>您是否确认购买!</p>', {
        icon: 3,
		title:"购买内容",
		area: '320px',
        btn: ['购买','取消']
    }, function(){
       	$.post("/e/ecmsshop/buynr/buy.php",{id:id,classid:classid},function(data){
        switch(data){
              case "error":
              layer.msg('提交参数错误');
              break;
              case "nologin":
              layer.msg('您还未登录,无法购买', function(){
                location.href='/e/member/login/';
              });
              break;
              case "noxx":
              layer.msg('未找到该文章!');
              break;
			  case "dberror":
              layer.msg('数据库出错，请联系管理员!');
              break;
			  case "havebuy":
              layer.alert('<p class="pop_info_show">您已购买过，无需重复购买!</p>', {icon: 1,time:3000});
              break;
              case "nojb":
              layer.alert('<p class="pop_info_show">您的点数不足,无法购买!</p>', {icon: 5,time:3000});
              break;
              default:
              layer.alert('<p class="pop_info_show">'+data+'</p>', {icon:1,time:2000,end: function(){
                loadnr();
              }});
        }
      })
    }, function(){
        layer.msg('已取消', {shift: 6});
    });
}
jQuery(".banner").slick({
	slide: ".item",
	autoplay: true,
	arrows: false,
	dots: true,
	infinite: true,
	speed: 1000,
	autoplaySpeed: 5000,
	pauseOnHover: false,
	fade: true,
	cssEase: 'linear'
});
jQuery(".inb-banner").slick({
	autoplay: true,
	arrows: false,
	dots: true,
	infinite: true,
	speed: 1000,
	autoplaySpeed: 5000,
	pauseOnHover: false,
	fade: true,
	cssEase: 'linear'
});


var $banner = jQuery(".banner"),
	$bannerItem = $banner.find(".item"),
	$bannerImg = jQuery(".banner .item .pimg");
$bannerItem.first().removeClass("slick-active");
setTimeout(function() {
	$bannerItem.first().addClass("slick-active");
}, 1);


jQuery(function() {
	jQuery(window).scroll(function() {});
})
// 微信二维码
//$(".wechat-ewm").click(function() {
//	$(".wechat-ewm-bg").fadeIn();
//});
//$(".close-ewm").click(function() {
//	$(".wechat-ewm-bg").fadeOut();
//});

// vip收缩模块
$(".index-vip-bot ul li").hover(function() {
	$(this).children(".ivb-enter").addClass("ie-show");
	$(this).removeClass('sx-w').addClass("wf-w").siblings().addClass('sx-w');
}, function() {
	$(this).children(".ivb-enter").removeClass("ie-show");
	$(".index-vip-bot ul li").removeClass("wf-w sx-w");
});
// 优选推荐
jQuery(".ixbanner").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding: '0',
	arrows: false,
	speed: 800,
	autoplaySpeed: 2000,
	dots: false,
	infinite: true,
	centerMode: false,
	autoplay: true,
	focusOnSelect: true
});

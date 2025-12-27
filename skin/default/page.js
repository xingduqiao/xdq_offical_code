var isMobile = false,
	mobile = false,
	win_width = 0,
	win_height = 0,
	navItem = 0,
	atH = 80,
	$menuBtn = jQuery('.menu-handler'),
	$menuOverlay = jQuery('.menu-overlay'),
	menuM = jQuery(".menuMoblie"),
	pageNavNum = 0,
	scrollNav = 0;

var pageInit = {
		init: function() {
			win_width = $(window).width();
			win_height = $(window).height();
			if(win_width <= 1024) {
				isMobile = true;
				atH = 54;
			} else if(win_width > 1024) {
				isMobile = false;
				atH = 86;
				menu.close();
			};
		},
		setImgMax: function(img, imgW, imgH, tW, tH) {
			var tWidth = tW || win_width;
			var tHeight = tH || win_height;
			var coe = imgH / imgW;
			var coe2 = tHeight / tWidth;
			if(coe < coe2) {
				var imgWidth = tHeight / coe;
				img.css({
					height: tHeight,
					width: imgWidth,
					left: -(imgWidth - tWidth) / 2,
					top: 0
				});
			} else {
				var imgHeight = tWidth * coe;
				img.css({
					height: imgHeight,
					width: tWidth,
					left: 0,
					top: -(imgHeight - tHeight) / 2
				});
			};
		},
		setScroll: function(anchorCur) {
			if(jQuery(anchorCur).length >= 1) {
				jQuery("html,body").animate({
					scrollTop: jQuery(anchorCur).offset().top - atH
				}, 0);
			}
		},
		setErmbox: function(obj, title) {
			obj.click(function() {
				var str = '<div class="ermsblack"><div class="ermSBox"><div class="img"><img src="' + obj.attr("data-img") + '"/></div><div class="t">' + title + '</div></div></div>';
				$("body").append(str);
				jQuery(".ermsblack").fadeIn();
				jQuery(".ermSBox").animate({
					marginTop: "-132"
				}, 400);
				$(".ermSBox .close").click(function() {
					$(".ermsblack").remove();
				});
				jQuery(".ermsblack").click(function() {
					$(".ermsblack").remove();
				});
				return false;
			})
		},
		setSplit: function(el) {
			var n = el;
			for(var e = 0, t = n.length; e < t; e++) {
				var a = n[e],
					r = a.textContent.trim();
				a.innerHTML = "";
				i(a, r)
			}

			function i(n, e) {
				for(var t in e) {
					var a = document.createElement("span");
					a.innerHTML = e[t] === " " ? "&nbsp;" : e[t];
					n.appendChild(a);
				}
			}
		},
		setTimeDelay: function(el, time, delay, reverse) {
			var _span = el;
			_span.each(function(i) {
				var _i = $(this).find('span');
				_i.each(function(j) {
					if(reverse) {
						j = _i.length - j - 1;
					}
					$(this).css({
						'animation-delay': delay + time * j + 'ms',
						'-webkit-animation-delay': delay + time * j + 'ms'
					})
				})
			})
		},
		showbox: function(htmlAddress) {
			$.ajax({
				url: htmlAddress,
				dataType: "html",
				success: function(data) {
					if(data == "" || data == null) {
						return;
					} else {
						if(jQuery(".sm-content").length >= 1) {
							jQuery('html').removeClass('sm-show');
							jQuery('.sm-content').remove();
						};
						$('.sm-modal .vertical-inner').append(data);
						$("html").addClass("sm-showb");
						setTimeout(function() {
							$("html").addClass("sm-show");
						}, 50);
						jQuery('.sm-close').bind('click', function(e) {
							jQuery('html').removeClass('sm-show');
							setTimeout(function() {
								$("html").removeClass("sm-showb");
								jQuery('.sm-content').remove();
							}, 400);
						});
						jQuery('.sm-modal .vertical-inner').bind('click', function(e) {
							if($(e.target).hasClass('vertical-inner')) {
								jQuery('html').removeClass('sm-show');
								setTimeout(function() {
									$("html").removeClass("sm-showb");
									jQuery('.sm-content').remove();
								}, 400);
							}
						});
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					jQuery('html').removeClass('sm-show');
					setTimeout(function() {
						$("html").removeClass("sm-showb");
						jQuery('.sm-content').remove();
					}, 400);
				}
			});
		},
		pbanner: function() {
			if(jQuery('.pbanner').length >= 1) {
				if(!isMobile) {
					jQuery('.pbanner').css("height", jQuery(".pbanner .load-img").height());
				} else {
					jQuery('.pbanner').css("height", "auto");
				}
			};
			jQuery('.pbanner-c .en,.pbanner-c .zh').each(function(i) {
				pageInit.setSplit(jQuery(this));
				pageInit.setTimeDelay($(this), 80, 350, false);
			});
		}
	},
	nav = {
		init: function() {}
	},
	menu = {
		init: function() {
			jQuery(".menu-handler").click(function() {
				if(navItem == 0) {
					jQuery(this).addClass("active");
					jQuery("html").addClass("menuOpen");
					navItem = 1;
				} else {
					jQuery(this).removeClass("active");
					jQuery("html").removeClass("menuOpen");
					navItem = 0;
				}
			});
			$(document).on("click", ".menuMoblie .nav-link", function(e) {
				var mnavcur = $(this);
				var mnavbox = $(this).parents("li");
				if(mnavbox.find(".subnav").length > 0) {
					if(mnavbox.hasClass("cur")) {
						mnavbox.find(".subnav").stop(false, false).slideUp();
						mnavbox.removeClass("cur");
					} else {
						jQuery(".menuMoblie li").removeClass("cur");
						jQuery(".subnav").stop(false, false).slideUp();
						mnavbox.find(".subnav").stop(false, false).slideDown();
						mnavbox.addClass("cur");
						e.preventDefault();
					}
				}
			});
			$(document).on("click", ".menuMoblie a", function(e) {
				var $this = jQuery(this);
				var hash = $this.attr("href").split("#")[1];
				if(hash && jQuery("#" + hash).length >= 1) {
					e.preventDefault();
					jQuery("html,body").animate({
						scrollTop: jQuery("#" + hash).offset().top - atH
					}, 0);
					menu.close();
				}
			});
			$(".pusher-black").click(function() {
				if(navItem == 1) {
					menu.close();
				};
			});
		},
		close: function() {
			$menuBtn.removeClass("active");
			jQuery("html").removeClass("menuOpen");
			navItem = 0;
		}
	},
	pbanner = {
		init: function() {
			if(jQuery(".load-img").length >= 1) {
				_PreLoadImg([
					jQuery(".load-img").attr("src")
				], function() {
					pageInit.pbanner();
				});
				jQuery(window).resize(function() {
					pageInit.pbanner();
				});
			}
		}
	},
	pageNav = {
		init: function() {
			jQuery(".page-nav-btn a").click(function(e) {
				var $this = jQuery(this);
				var hash = $this.attr("href").split("#")[1];
				if(hash && jQuery("#" + hash).length >= 1) {
					e.preventDefault();
					jQuery("html,body").animate({
						scrollTop: jQuery("#" + hash).offset().top - atH
					}, 800, 'easeInOutExpo');
				}
			});
			var $sec_nav = $('.page-nav-box');
			if($sec_nav.length) {
				var $sec_n = $sec_nav.find('.page-nav-btn'),
					$current_item = $sec_nav.find('.active').parent();
				if(isMobile && $current_item.length >= 1) {
					$sec_n.stop().animate({
						scrollLeft: $current_item.position().left
					});
				}
				$(window).resize(function() {
					if(isMobile && $current_item.length >= 1) {
						$sec_n.stop().animate({
							scrollLeft: $current_item.offset().left + $sec_n.scrollLeft()
						});
					}
				});
			}
		}
	};
jQuery(window).resize(function() {
	pageInit.init();
	pbanner.init();
	var sawidth = $(".sd-bottom-banner").width();
	$(".bottom-dw-bg ").width((win_width - sawidth) / 2);
});
pageInit.init();
$(document).ready(function() {
	nav.init();
	menu.init();
	pbanner.init();
	pageNav.init();
	pageInit.setErmbox(jQuery('.ermItem'), "扫描此二维码关注我们");
});
var sawidth = $(".sd-bottom-banner").width();
$(".bottom-dw-bg ").width((win_width - sawidth) / 2);
jQuery(".vwrap .close,.vwrap .videobtg").click(function() {
	jQuery(".vwrap").hide();
	$('#videobox').html("");
});
$(window).on('load', function() {
	var head_height = $(".header").height();
	var hash = location.href.split("#")[1];
	if(hash) {
		jQuery("html,body").animate({
			scrollTop: jQuery("#" + hash).offset().top - head_height
		}, 500);
	}
});

// 头部
var index_head = $(".nav ul li.active").index();
var length_ = $(".nav ul li.active").length;
$(".nav ul li").hover(function() {
	$(this).addClass("active").siblings().removeClass('active');
}, function() {
	if(length_ > 0) {
		$(".nav ul li").removeClass('active').eq(index_head).addClass('active');
	} else {
		$(".nav ul li").removeClass('active');
	}
});

// 内页TAB
var indexn1_ = $(".ipt-link a.active").index();
$(".ipt-link a").hover(function() {
	$(this).addClass("active").siblings().removeClass('active');
}, function() {
	$(".ipt-link a").removeClass("active").eq(indexn1_).addClass('active');
});

// 内页tab定位
jQuery(function() {
	var indexs = $(".ipt-link a.active").index();
	var now = $(".ipt-link a").width() * indexs;
	$(".inside-pages-tab").animate({
		scrollLeft: now
	});

});
jQuery(window).scroll(function() {
	// 内页TAB固定
	//	if(jQuery(".inside-pages-tab").length>0){
	//		if($(window).scrollTop() > jQuery(".inside-pages-tab").offset().top-$(".header").height()) { 
	//			$('.inside-pages-tab').addClass("fix-head");
	//		}else{
	//			$('.inside-pages-tab').removeClass("fix-head");
	//		}
	//	}
});

// 关于页面-章程
$(".al2-chapter").click(function() {
	$(this).toggleClass("active").siblings(".al2-cont").stop().slideToggle(500);
	$(this).parents("li").siblings().find(".al2-cont").slideUp(500);
	$(this).parents("li").siblings().find(".al2-chapter").removeClass("active");
});

// 信息公开TAB
var index1_ = $(".idt1-left a.active").index();
$(".idt1-left a").hover(function() {
	$(this).addClass("active").siblings().removeClass('active');
}, function() {
	$(".idt1-left a").removeClass("active").eq(index1_).addClass('active');
});

// 首页新闻类型切换
$("#it3_tab a").click(function() {
	var it3_index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('#ic3_news_cont .in3_cont').eq(it3_index).show().siblings().hide();
});

jQuery(".dw-banner").slick({
	autoplay: true,
	arrows: true,
	dots: false,
	infinite: true,
	speed: 1000,
	autoplaySpeed: 5000,
	pauseOnHover: false,
	fade: true,
	cssEase: 'linear',
	prevArrow: $('.dp-icon'),
	nextArrow: $('.dn-icon')
}).on({
	'beforeChange': function(event, slick, currentSlide, nextSlide) {
		jQuery('.dp-num span.star').text(nextSlide + 1);
	}
});
var max = jQuery(".dw-banner .ib-item").length;
$('.dp-num span.end').text(max);


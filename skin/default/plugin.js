$(window).on('load',function(){
	jQuery('.target').delay(300).scrollClass();
});

/*********************************************************************************************/
// 渐入效果
/*********************************************************************************************/
(function(jQuery){
    $.fn.scrollClass = function(config){
    	var num=50;
        var defaults = {};
        var config = jQuery.extend(defaults, config);
        var target = this;
        function addAction(){
            var length = target.length;
            for(var i=0; i<length; i++){
                if(target.eq(i).hasClass('action')) continue;
                var in_position = target.eq(i).offset().top + 100;
                var window_bottom_position = jQuery(window).scrollTop() + jQuery(window).height();
                if(in_position < window_bottom_position){
                    target.eq(i).addClass('action');
                }
            }
        }
        addAction();

        jQuery(window).on('scroll', function(){
            addAction();
        });
        return target;
    };
} )(jQuery);


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.7
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{if(typeof exports!=="undefined"){module.exports=factory(require("jquery"))}else{factory(jQuery)}}}(function($){var Slick=window.Slick||{};Slick=(function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<a data-role="none" class="slick-prev" aria-label="Previous" tabindex="0"><i></i></a>',nextArrow:'<a data-role="none" class="slick-next" aria-label="Next" tabindex="0"><i></i></a>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(slider,i){return $('<a type="button" data-role="none" role="button" tabindex="0"></a>')},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden="hidden";_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange="visibilitychange";_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data("slick")||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=="undefined"){_.hidden="mozHidden";_.visibilityChange="mozvisibilitychange"}else{if(typeof document.webkitHidden!=="undefined"){_.hidden="webkitHidden";_.visibilityChange="webkitvisibilitychange"}}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true)}return Slick}());Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({"tabindex":"0"})};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof(index)==="boolean"){addBefore=index;index=null}else{if(index<0||(index>=_.slideCount)){return false}}_.unload();if(typeof(index)==="number"){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack)}else{if(addBefore){$(markup).insertBefore(_.$slides.eq(index))}else{$(markup).insertAfter(_.$slides.eq(index))}}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack)}else{$(markup).appendTo(_.$slideTrack)}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr("data-slick-index",index)});_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed)}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback)}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback)}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-(_.currentLeft)}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]="translate("+now+"px, 0px)";
_.$slideTrack.css(animProps)}else{animProps[_.animType]="translate(0px,"+now+"px)";_.$slideTrack.css(animProps)}},complete:function(){if(callback){callback.call()}}})}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]="translate3d("+targetLeft+"px, 0px, 0px)"}else{animProps[_.animType]="translate3d(0px,"+targetLeft+"px, 0px)"}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call()},_.options.speed)}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider)}return asNavFor};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==="object"){asNavFor.each(function(){var target=$(this).slick("getSlick");if(!target.unslicked){target.slideHandler(index,true)}})}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+" "+_.options.speed+"ms "+_.options.cssEase}else{transition[_.transitionType]="opacity "+_.options.speed+"ms "+_.options.cssEase}if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed)}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer)}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&(_.currentSlide+1)===(_.slideCount-1)){_.direction=0}else{if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1}}}}_.slideHandler(slideTo)}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass("slick-arrow");_.$nextArrow=$(_.options.nextArrow).addClass("slick-arrow");if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");_.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows)}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows)}if(_.options.infinite!==true){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")}}else{_.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true","tabindex":"-1"})}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass("slick-dotted");dot=$("<ul />").addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($("<li />").append(_.options.customPaging.call(this,_,i)))}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+":not(.slick-cloned)").addClass("slick-slide");_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr("data-slick-index",index).data("originalStyling",$(element).attr("style")||"")});_.$slider.addClass("slick-slider");_.$slideTrack=(_.slideCount===0)?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();_.$slideTrack.css("opacity",0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1}$("img[data-lazy]",_.$slider).not("[src]").addClass("slick-loading");_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass("draggable")}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>1){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement("div");for(b=0;b<_.options.rows;b++){var row=document.createElement("div");for(c=0;c<_.options.slidesPerRow;c++){var target=(a*slidesPerSection+((b*_.options.slidesPerRow)+c));if(originalSlides.get(target)){row.appendChild(originalSlides.get(target))}}slide.appendChild(row)}newSlides.appendChild(slide)}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({"width":(100/_.options.slidesPerRow)+"%","display":"inline-block"})}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;
var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==="window"){respondToWidth=windowWidth}else{if(_.respondTo==="slider"){respondToWidth=sliderWidth}else{if(_.respondTo==="min"){respondToWidth=Math.min(windowWidth,sliderWidth)}}}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial);triggerBreakpoint=targetBreakpoint}}if(!initial&&triggerBreakpoint!==false){_.$slider.trigger("breakpoint",[_,triggerBreakpoint])}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is("a")){event.preventDefault()}if(!$target.is("li")){$target=$target.closest("li")}unevenOffset=(_.slideCount%_.options.slidesToScroll!==0);indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case"previous":slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate)}break;case"next":slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate)}break;case"index":var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger("focus");break;default:return}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1]}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break}prevNavigable=navigables[n]}}return index};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$("li",_.$dots).off("click.slick",_.changeSlide).off("mouseenter.slick",$.proxy(_.interrupt,_,true)).off("mouseleave.slick",$.proxy(_.interrupt,_,false))}_.$slider.off("focus.slick blur.slick");if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off("click.slick",_.changeSlide);_.$nextArrow&&_.$nextArrow.off("click.slick",_.changeSlide)}_.$list.off("touchstart.slick mousedown.slick",_.swipeHandler);_.$list.off("touchmove.slick mousemove.slick",_.swipeHandler);_.$list.off("touchend.slick mouseup.slick",_.swipeHandler);_.$list.off("touchcancel.slick mouseleave.slick",_.swipeHandler);_.$list.off("click.slick",_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off("click.slick",_.selectHandler)}$(window).off("orientationchange.slick.slick-"+_.instanceUid,_.orientationChange);$(window).off("resize.slick.slick-"+_.instanceUid,_.resize);$("[draggable!=true]",_.$slideTrack).off("dragstart",_.preventDefault);$(window).off("load.slick.slick-"+_.instanceUid,_.setPosition);$(document).off("ready.slick.slick-"+_.instanceUid,_.setPosition)};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.off("mouseleave.slick",$.proxy(_.interrupt,_,false))};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>1){originalSlides=_.$slides.children().children();originalSlides.removeAttr("style");_.$slider.empty().append(originalSlides)}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault()}};Slick.prototype.destroy=function(refresh){var _=this;
_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$(".slick-cloned",_.$slider).detach();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}}if(_.$slides){_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){$(this).attr("style",$(this).data("originalStyling"))});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides)}_.cleanUpRows();_.$slider.removeClass("slick-slider");_.$slider.removeClass("slick-initialized");_.$slider.removeClass("slick-dotted");_.unslicked=true;if(!refresh){_.$slider.trigger("destroy",[_])}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]="";if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call()},_.options.speed)}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2})}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(":focus");_.autoPlay()}},0)})};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}else{if(_.options.centerMode===true){pagerQty=_.slideCount}else{if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll)}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}}}return pagerQty-1};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=(_.slideWidth*_.options.slidesToShow)*-1;verticalOffset=(verticalHeight*_.options.slidesToShow)*-1}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth)*-1;verticalOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight)*-1}else{_.slideOffset=((_.slideCount%_.options.slidesToScroll)*_.slideWidth)*-1;verticalOffset=((_.slideCount%_.options.slidesToScroll)*verticalHeight)*-1}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*_.slideWidth;verticalOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*verticalHeight}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0}if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth}else{if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)}}if(_.options.vertical===false){targetLeft=((slideIndex*_.slideWidth)*-1)+_.slideOffset}else{targetLeft=((slideIndex*verticalHeight)*-1)+verticalOffset
}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow+1)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2}}return targetLeft};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option]};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}return indexes};Slick.prototype.getSlick=function(){return this};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find(".slick-slide").each(function(index,slide){if(slide.offsetLeft-centerOffset+($(slide).outerWidth()/2)>(_.swipeLeft*-1)){swipedSlide=slide;return false}});slidesTraversed=Math.abs($(swipedSlide).attr("data-slick-index")-_.currentSlide)||1;return slidesTraversed}else{return _.options.slidesToScroll}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:"index",index:parseInt(slide)}},dontAnimate)};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass("slick-initialized")){$(_.$slider).addClass("slick-initialized");_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler()}if(creation){_.$slider.trigger("init",[_])}if(_.options.accessibility===true){_.initADA()}if(_.options.autoplay){_.paused=false;_.autoPlay()}};Slick.prototype.initADA=function(){var _=this;_.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true","tabindex":"-1"}).find("a, input, button, select").attr({"tabindex":"-1"});_.$slideTrack.attr("role","listbox");_.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i){$(this).attr({"role":"option","aria-describedby":"slick-slide"+_.instanceUid+i+""})});if(_.$dots!==null){_.$dots.attr("role","tablist").find("li").each(function(i){$(this).attr({"role":"presentation","aria-selected":"false","aria-controls":"navigation"+_.instanceUid+i+"","id":"slick-slide"+_.instanceUid+i+""})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar")}_.activateADA()};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},_.changeSlide);_.$nextArrow.off("click.slick").on("click.slick",{message:"next"},_.changeSlide)}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("click.slick",{message:"index"},_.changeSlide)}if(_.options.dots===true&&_.options.pauseOnDotsHover===true){$("li",_.$dots).on("mouseenter.slick",$.proxy(_.interrupt,_,true)).on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on("touchstart.slick mousedown.slick",{action:"start"},_.swipeHandler);_.$list.on("touchmove.slick mousemove.slick",{action:"move"},_.swipeHandler);_.$list.on("touchend.slick mouseup.slick",{action:"end"},_.swipeHandler);_.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},_.swipeHandler);_.$list.on("click.slick",_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)
}$(window).on("orientationchange.slick.slick-"+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on("resize.slick.slick-"+_.instanceUid,$.proxy(_.resize,_));$("[draggable!=true]",_.$slideTrack).on("dragstart",_.preventDefault);$(window).on("load.slick.slick-"+_.instanceUid,_.setPosition);$(document).on("ready.slick.slick-"+_.instanceUid,_.setPosition)};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show()}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"next":"previous"}})}else{if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"previous":"next"}})}}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$("img[data-lazy]",imagesScope).each(function(){var image=$(this),imageSource=$(this).attr("data-lazy"),imageToLoad=document.createElement("img");imageToLoad.onload=function(){image.animate({opacity:0},100,function(){image.attr("src",imageSource).animate({opacity:1},200,function(){image.removeAttr("data-lazy").removeClass("slick-loading")});_.$slider.trigger("lazyLoaded",[_,image,imageSource])})};imageToLoad.onerror=function(){image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource])};imageToLoad.src=imageSource})}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0){rangeStart--}if(rangeEnd<=_.slideCount){rangeEnd++}}}loadRange=_.$slider.find(".slick-slide").slice(rangeStart,rangeEnd);loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find(".slick-slide");loadImages(cloneRange)}else{if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find(".slick-cloned").slice(0,_.options.slidesToShow);loadImages(cloneRange)}else{if(_.currentSlide===0){cloneRange=_.$slider.find(".slick-cloned").slice(_.options.slidesToShow*-1);loadImages(cloneRange)}}}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass("slick-loading");_.initUI();if(_.options.lazyLoad==="progressive"){_.progressiveLazyLoad()}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:"next"}})};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition()};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger("afterChange",[_,index]);_.animating=false;_.setPosition();_.swipeLeft=null;if(_.options.autoplay){_.autoPlay()}if(_.options.accessibility===true){_.initADA()}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:"previous"}})};Slick.prototype.preventDefault=function(event){event.preventDefault()};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$("img[data-lazy]",_.$slider),image,imageSource,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr("data-lazy");imageToLoad=document.createElement("img");imageToLoad.onload=function(){image.attr("src",imageSource).removeAttr("data-lazy").removeClass("slick-loading");if(_.options.adaptiveHeight===true){_.setPosition()}_.$slider.trigger("lazyLoaded",[_,image,imageSource]);_.progressiveLazyLoad()};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500)}else{image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource]);_.progressiveLazyLoad()}};imageToLoad.src=imageSource}else{_.$slider.trigger("allImagesLoaded",[_])}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&(_.currentSlide>lastVisibleIndex)){_.currentSlide=lastVisibleIndex}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0
}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:"index",index:currentSlide}},false)}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==="array"&&responsiveSettings.length){_.respondTo=_.options.respondTo||"window";for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;currentBreakpoint=responsiveSettings[breakpoint].breakpoint;if(responsiveSettings.hasOwnProperty(breakpoint)){while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1)}l--}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}}_.breakpoints.sort(function(a,b){return(_.options.mobileFirst)?a-b:b-a})}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass("slick-slide");_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger("reInit",[_])};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition()}},50)}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof(index)==="boolean"){removeBefore=index;index=removeBefore===true?0:_.slideCount-1}else{index=removeBefore===true?--index:index}if(_.slideCount<1||index<0||index>_.slideCount-1){return false}_.unload();if(removeAll===true){_.$slideTrack.children().remove()}else{_.$slideTrack.children(this.options.slide).eq(index).remove()}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position}x=_.positionProp=="left"?Math.ceil(position)+"px":"0px";y=_.positionProp=="top"?Math.ceil(position)+"px":"0px";positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps)}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]="translate("+x+", "+y+")";_.$slideTrack.css(positionProps)}else{positionProps[_.animType]="translate3d("+x+", "+y+", 0px)";_.$slideTrack.css(positionProps)}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:("0px "+_.options.centerPadding)})}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:(_.options.centerPadding+" 0px")})}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil((_.slideWidth*_.$slideTrack.children(".slick-slide").length)))}else{if(_.options.variableWidth===true){_.$slideTrack.width(5000*_.slideCount)}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true)*_.$slideTrack.children(".slick-slide").length)))}}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false){_.$slideTrack.children(".slick-slide").width(_.slideWidth-offset)}};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=(_.slideWidth*index)*-1;if(_.options.rtl===true){$(element).css({position:"relative",right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}else{$(element).css({position:"relative",left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css("height",targetHeight)}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==="object"){option=arguments[0];
refresh=arguments[1];type="multiple"}else{if($.type(arguments[0])==="string"){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==="responsive"&&$.type(arguments[1])==="array"){type="responsive"}else{if(typeof arguments[1]!=="undefined"){type="single"}}}}if(type==="single"){_.options[option]=value}else{if(type==="multiple"){$.each(option,function(opt,val){_.options[opt]=val})}else{if(type==="responsive"){for(item in value){if($.type(_.options.responsive)!=="array"){_.options.responsive=[value[item]]}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1)}l--}_.options.responsive.push(value[item])}}}}}if(refresh){_.unload();_.reinit()}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide))}else{_.setFade()}_.$slider.trigger("setPosition",[_])};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?"top":"left";if(_.positionProp==="top"){_.$slider.addClass("slick-vertical")}else{_.$slider.removeClass("slick-vertical")}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true}}if(_.options.fade){if(typeof _.options.zIndex==="number"){if(_.options.zIndex<3){_.options.zIndex=3}}else{_.options.zIndex=_.defaults.zIndex}}if(bodyStyle.OTransform!==undefined){_.animType="OTransform";_.transformType="-o-transform";_.transitionType="OTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined){_.animType=false}}if(bodyStyle.MozTransform!==undefined){_.animType="MozTransform";_.transformType="-moz-transform";_.transitionType="MozTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined){_.animType=false}}if(bodyStyle.webkitTransform!==undefined){_.animType="webkitTransform";_.transformType="-webkit-transform";_.transitionType="webkitTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined){_.animType=false}}if(bodyStyle.msTransform!==undefined){_.animType="msTransform";_.transformType="-ms-transform";_.transitionType="msTransition";if(bodyStyle.msTransform===undefined){_.animType=false}}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType="transform";_.transformType="transform";_.transitionType="transition"}_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false)};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");_.$slides.eq(index).addClass("slick-current");if(_.options.centerMode===true){centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=(_.slideCount-1)-centerOffset){_.$slides.slice(index-centerOffset,index+centerOffset+1).addClass("slick-active").attr("aria-hidden","false")}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1,indexOffset+centerOffset+2).addClass("slick-active").attr("aria-hidden","false")}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass("slick-center")}else{if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass("slick-center")}}}_.$slides.eq(index).addClass("slick-center")}else{if(index>=0&&index<=(_.slideCount-_.options.slidesToShow)){_.$slides.slice(index,index+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}else{if(allSlides.length<=_.options.slidesToShow){allSlides.addClass("slick-active").attr("aria-hidden","false")}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&(_.slideCount-index)<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass("slick-active").attr("aria-hidden","false")}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}}}}if(_.options.lazyLoad==="ondemand"){_.lazyLoad()}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1}else{infiniteCount=_.options.slidesToShow}for(i=_.slideCount;i>(_.slideCount-infiniteCount);i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned")}for(i=0;i<infiniteCount;
i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned")}_.$slideTrack.find(".slick-cloned").find("[id]").each(function(){$(this).attr("id","")})}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay()}_.interrupted=toggle};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is(".slick-slide")?$(event.target):$(event.target).parents(".slick-slide");var index=parseInt(targetElement.attr("data-slick-index"));if(!index){index=0}if(_.slideCount<=_.options.slidesToShow){_.setSlideClasses(index);_.asNavFor(index);return}_.slideHandler(index)};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return}if(_.options.fade===true&&_.currentSlide===index){return}if(_.slideCount<=_.options.slidesToShow){return}if(sync===false){_.asNavFor(index)}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}else{if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>(_.slideCount-_.options.slidesToScroll))){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}}if(_.options.autoplay){clearInterval(_.autoPlayTimer)}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-(_.slideCount%_.options.slidesToScroll)}else{animSlide=_.slideCount+targetSlide}}else{if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0}else{animSlide=targetSlide-_.slideCount}}else{animSlide=targetSlide}}_.animating=true;_.$slider.trigger("beforeChange",[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick("getSlick");if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide)}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}_.animateHeight();return}if(dontAnimate!==true){_.animateSlide(targetLeft,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide()}_.$slider.addClass("slick-loading")};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle)}if((swipeAngle<=45)&&(swipeAngle>=0)){return(_.options.rtl===false?"left":"right")}if((swipeAngle<=360)&&(swipeAngle>=315)){return(_.options.rtl===false?"left":"right")}if((swipeAngle>=135)&&(swipeAngle<=225)){return(_.options.rtl===false?"right":"left")}if(_.options.verticalSwiping===true){if((swipeAngle>=35)&&(swipeAngle<=135)){return"down"}else{return"up"}}return"vertical"};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.interrupted=false;_.shouldClick=(_.touchObject.swipeLength>10)?false:true;if(_.touchObject.curX===undefined){return false}if(_.touchObject.edgeHit===true){_.$slider.trigger("edge",[_,_.swipeDirection()])}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case"left":case"down":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case"right":case"up":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!="vertical"){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger("swipe",[_,direction])}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={}}}};Slick.prototype.swipeHandler=function(event){var _=this;if((_.options.swipe===false)||("ontouchend" in document&&_.options.swipe===false)){return}else{if(_.options.draggable===false&&event.type.indexOf("mouse")!==-1){return}}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;
_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold}switch(event.data.action){case"start":_.swipeStart(event);break;case"move":_.swipeMove(event);break;case"end":_.swipeEnd(event);break}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||touches&&touches.length!==1){return false}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));if(_.options.verticalSwiping===true){_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)))}swipeDirection=_.swipeDirection();if(swipeDirection==="vertical"){return}if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){event.preventDefault()}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if((_.currentSlide===0&&swipeDirection==="right")||(_.currentSlide>=_.getDotCount()&&swipeDirection==="left")){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset}else{_.swipeLeft=curLeft+(swipeLength*(_.$list.height()/_.listWidth))*positionOffset}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset}if(_.options.fade===true||_.options.touchMove===false){return false}if(_.animating===true){_.swipeLeft=null;return false}_.setCSS(_.swipeLeft)};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0]}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.unload=function(){var _=this;$(".slick-cloned",_.$slider).remove();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}_.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger("unslick",[_,fromBreakpoint]);_.destroy()};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");if(_.currentSlide===0){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else{if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else{if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}}}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true");_.$dots.find("li").eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false")}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true}else{_.interrupted=false}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=="object"||typeof opt=="undefined"){_[i].slick=new Slick(_[i],opt)}else{ret=_[i].slick[opt].apply(_[i].slick,args)}if(typeof ret!="undefined"){return ret}}return _}}));

//smartFloat
$.fn.smartFloat = function() {
    var position = function(element) {
	    var smartTop = element.offset().top,
	    smartHeight=element.innerHeight(),
	    smartBottom=jQuery("."+element.attr("datasbox")).offset().top-smartHeight;
	    jQuery(window).resize(function () {
		    smartTop = element.offset().top,
		    smartHeight=element.innerHeight(),
		    smartBottom=jQuery("."+element.attr("datasbox")).offset().top-smartHeight;
		});
        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            smartBottom=jQuery("."+element.attr("datasbox")).offset().top-smartHeight;
            if (scrolls >smartTop && scrolls<smartBottom && !isMobile) {
                element.removeClass("gabottom").addClass("gafixed");
            }else if(scrolls>=smartBottom && !isMobile){
                element.removeClass("gafixed").addClass("gabottom");
            }else {
                element.removeClass("gafixed").removeClass("gabottom");
            }
        });
    };
    return $(this).each(function() {
        position($(this));
    });
};


function _PreLoadImg(b,e){var c=0,a={},d=0;for(src in b){d++}for(src in b){a[src]=new Image();a[src].onload=function(){if(++c>=d){e(a)}};a[src].src=b[src]}};

$(function(){
	if(!placeholderSupport()){   // 判断浏览器是否支�&#65533; placeholder
	    $('[placeholder]').focus(function() {
	        var input = $(this);
	        if (input.val() == input.attr('placeholder')) {
	            input.val('');
	            input.removeClass('placeholder');
	        }
	    }).blur(function() {
	        var input = $(this);
	        if (input.val() == '' || input.val() == input.attr('placeholder')) {
	            input.addClass('placeholder');
	            input.val(input.attr('placeholder'));
	        }
	    }).blur();
	};
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
};

var smVideo = {
    load: function (objs) {
	    var objplay = jwplayer(objs.vcontainer).setup({
	        flashplayer: 'js/video/flashplay.swf',
	        html5player: 'js/video/html5player.js',
	        file: objs.vfiles,
	        image: objs.vfimg,
	        width: '100%',
	        height: '100%',
	        aspectratio: '16:9',
	        stretching: 'fill',
	        controls: 'true',
	        autostart: objs.isautoplay
	    });
	    return objplay;
	}
}
var CountUp = function(t, i, e, s, o, n) {
	var r = this;
	if (r.version = function() {
			return "1.9.3"
		}, r.options = {
			useEasing: !0,
			useGrouping: !0,
			separator: ",",
			decimal: ".",
			easingFn: function(t, i, e, s) {
				return e * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i
			},
			formattingFn: function(t) {
				var i, e, s, o, n, a, l = t < 0;
				if (t = Math.abs(t).toFixed(r.decimals), i = (t += "").split("."), e = i[0], s = i.length > 1 ? r.options.decimal +
					i[1] : "", r.options.useGrouping) {
					for (o = "", n = 0, a = e.length; n < a; ++n) 0 !== n && n % 3 == 0 && (o = r.options.separator + o), o = e[a -
						n - 1] + o;
					e = o
				}
				r.options.numerals.length && (e = e.replace(/[0-9]/g, function(t) {
					return r.options.numerals[+t]
				}), s = s.replace(/[0-9]/g, function(t) {
					return r.options.numerals[+t]
				}));
				return (l ? "-" : "") + r.options.prefix + e + s + r.options.suffix
			},
			prefix: "",
			suffix: "",
			numerals: []
		}, n && "object" == typeof n)
		for (var a in r.options) n.hasOwnProperty(a) && null !== n[a] && (r.options[a] = n[a]);
	"" === r.options.separator ? r.options.useGrouping = !1 : r.options.separator = "" + r.options.separator;
	for (var l = 0, d = ["webkit", "moz", "ms", "o"], c = 0; c < d.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame =
		window[d[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[d[c] + "CancelAnimationFrame"] ||
		window[d[c] + "CancelRequestAnimationFrame"];

	function p(t) {
		return "number" == typeof t && !isNaN(t)
	}
	window.requestAnimationFrame || (window.requestAnimationFrame = function(t, i) {
		var e = (new Date).getTime(),
			s = Math.max(0, 16 - (e - l)),
			o = window.setTimeout(function() {
				t(e + s)
			}, s);
		return l = e + s, o
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
		clearTimeout(t)
	}), r.initialize = function() {
		return !!r.initialized || (r.error = "", r.d = "string" == typeof t ? document.getElementById(t) : t, r.d ? (r.startVal =
			Number(i), r.endVal = Number(e), p(r.startVal) && p(r.endVal) ? (r.decimals = Math.max(0, s || 0), r.dec = Math.pow(
					10, r.decimals), r.duration = 1e3 * Number(o) || 2e3, r.countDown = r.startVal > r.endVal, r.frameVal = r.startVal,
				r.initialized = !0, !0) : (r.error = "[CountUp] startVal (" + i + ") or endVal (" + e + ") is not a number", !1)
		) : (r.error = "[CountUp] target is null or undefined", !1))
	}, r.printValue = function(t) {
		var i = r.options.formattingFn(t);
		"INPUT" === r.d.tagName ? this.d.value = i : "text" === r.d.tagName || "tspan" === r.d.tagName ? this.d.textContent =
			i : this.d.innerHTML = i
	}, r.count = function(t) {
		r.startTime || (r.startTime = t), r.timestamp = t;
		var i = t - r.startTime;
		r.remaining = r.duration - i, r.options.useEasing ? r.countDown ? r.frameVal = r.startVal - r.options.easingFn(i, 0,
				r.startVal - r.endVal, r.duration) : r.frameVal = r.options.easingFn(i, r.startVal, r.endVal - r.startVal, r.duration) :
			r.countDown ? r.frameVal = r.startVal - (r.startVal - r.endVal) * (i / r.duration) : r.frameVal = r.startVal + (r.endVal -
				r.startVal) * (i / r.duration), r.countDown ? r.frameVal = r.frameVal < r.endVal ? r.endVal : r.frameVal : r.frameVal =
			r.frameVal > r.endVal ? r.endVal : r.frameVal, r.frameVal = Math.round(r.frameVal * r.dec) / r.dec, r.printValue(r
				.frameVal), i < r.duration ? r.rAF = requestAnimationFrame(r.count) : r.callback && r.callback()
	}, r.start = function(t) {
		r.initialize() && (r.callback = t, r.rAF = requestAnimationFrame(r.count))
	}, r.pauseResume = function() {
		r.paused ? (r.paused = !1, delete r.startTime, r.duration = r.remaining, r.startVal = r.frameVal,
			requestAnimationFrame(r.count)) : (r.paused = !0, cancelAnimationFrame(r.rAF))
	}, r.reset = function() {
		r.paused = !1, delete r.startTime, r.initialized = !1, r.initialize() && (cancelAnimationFrame(r.rAF), r.printValue(
			r.startVal))
	}, r.update = function(t) {
		r.initialize() && (p(t = Number(t)) ? (r.error = "", t !== r.frameVal && (cancelAnimationFrame(r.rAF), r.paused = !
			1, delete r.startTime, r.startVal = r.frameVal, r.endVal = t, r.countDown = r.startVal > r.endVal, r.rAF =
			requestAnimationFrame(r.count))) : r.error = "[CountUp] update() - new endVal is not a number: " + t)
	}, r.initialize() && r.printValue(r.startVal)
};
! function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) :
		t(jQuery)
}(function(t) {
	"use strict";
	var i = "dnSlide",
		e = "1.0.0";
	t[i] && t[i].version > e || (t[i] = function(t, i) {
		return this.container = t, this.options = i, this.api = ["init", "destroy", "hide", "show"], this.init(), this
	}, t[i].version = e, t[i].defaults = {
		switching: "normal",
		isOddShow: !1,
		precentWidth: "50%",
		autoPlay: !1,
		delay: 5e3,
		scale: .9,
		speed: 500,
		verticalAlign: "middle",
		afterClickBtnFn: null
	}, t[i].prototype = {
		init: function() {
			var i = this;
			this.data(), this.settingDOM(), this.isIE7 = /MSIE 6.0|MSIE 7.0/gi.test(window.navigator.userAgent), this.dnSlideMain =
				this.container.find(".dnSlide-main"), this.dnSlideItems = this.container.find("ul.dnSlide-list"), this.dnSlideLi =
				this.container.find(".dnSlide-item"), this.firstItem = this.container.find("ul.dnSlide-list > li:first-child"),
				this.dnSlideItemsLength = this.container.find("ul.dnSlide-list>li").length, this.dnSlideFirstItem = this.container
				.find("ul.dnSlide-list>li:first-child"), this.dnSlideLastItem = this.container.find(
					"ul.dnSlide-list>li:last-child"), this.options.isOddShow && this.isEvenPicNum(), this.options.response && this
				.container.addClass("dn-response"), this.prevBtn = this.container.find(".dnSlide-left-btn"), this.nextBtn =
				this.container.find(".dnSlide-right-btn"), this.prevBtn = this.container.find("div.dnSlide-left-btn"), this.nextBtn =
				this.container.find("div.dnSlide-right-btn"), this.rotateFlag = !0, this.clearLiStyle(), this.countSettingValue(),
				this.setPositionValue(), this.setDefaultLiJson(), "custom" === this.options.switching && this.dnSlideLi.off().on(
					"click",
					function() {
						i.clickCurrentLI(t(this).index())
					}), this.options.autoPlay && (this.autoPlay(), this.container.hover(function() {
					clearTimeout(i.timer)
				}, function() {
					i.autoPlay()
				})), this.prevBtn.off().on("click", function(t) {
					t.stopPropagation();
					var e = i.options.afterClickPrevBtnFn;
					i.rotateFlag && (i.rotateFlag = !1, i.dnSlideRotate("right")), "function" == typeof e && e && e()
				}), this.nextBtn.off().on("click", function(t) {
					t.stopPropagation();
					var e = i.options.afterClickNextBtnFn;
					i.rotateFlag && (i.rotateFlag = !1, i.dnSlideRotate("left")), "function" == typeof e && e && e()
				}), t(window).resize(function() {
					i.WndwResize()
				})
		},
		data: function() {
			this.container.data(i) || this.container.data(i, {
				target: this.container
			})
		},
		destroy: function() {
			this.container.empty().html(this.defalutHtml)
		},
		hide: function(t) {
			this.container.addClass("dnSlide-hide"), t && "function" == typeof t && t()
		},
		show: function(t) {
			this.container.removeClass("dnSlide-hide"), t && "function" == typeof t && t()
		},
		settingDOM: function() {
			var t = this,
				i = "normal" === this.options.switching ?
				"<div class='dnSlide-btn dnSlide-left-btn'></div><div class='dnSlide-btn dnSlide-right-btn'></div>" : null;
			this.defalutHtml = this.container.html(), this.resourceSrcArr = this.container.find("img").map(function(t, i) {
				return i.src
			}),this.resourcetext = this.container.find("img").map(function(t, i) {
				return i.alt
			});
			var e = this.container.html('<ul class="dnSlide-list"></ul>').find(".dnSlide-list");
			jQuery.each(this.resourceSrcArr, function(i, s) {
				e.append('<li class="dnSlide-item"><a href="javascript:void(0)"><img class="slide-img" src="' + t.resourceSrcArr[
					i] + '" width="100%"><span>' + t.resourcetext[i] + '</span></a></li>')
			}), e.parents(".dnSlide-main").append(i)
		},
		WndwResize: function() {
			var t = this,
				i = "";
			i && (clearTimeout(i), i = null), i = setTimeout(function() {
				t.clearLiStyle(), t.countSettingValue(), t.setPositionValue(), t.setDefaultLiJson()
			}, 250)
		},
		getCustomSetting: function() {
			var t = this.setting;
			return t && "" !== t ? t : {}
		},
		clearLiStyle: function() {
			this.dnSlideLi.attr("style", "")
		},
		countSettingValue: function() {
			this.options.response;
			var t = Math.floor(this.dnSlideItemsLength / 2);
			this.firstItem.css({
				width: this.dnSlideItems.width() * (parseFloat(this.options.precentWidth.replace("px", "")) / 100)
			}), this.firstItem.css({
				height: this.dnSlideFirstItem.find(".slide-img").height()
			}), this.container.css({
				width: null,
				height: this.dnSlideFirstItem.find(".slide-img").height()
			}), this.prevBtn.css({
				width: (this.container.width() - this.firstItem.width()) / 2,
				height: "100%"
			}), this.nextBtn.css({
				width: (this.container.width() - this.firstItem.width()) / 2,
				height: "100%"
			}), this.dnSlideFirstItem.css({
				left: (this.container.width() - this.firstItem.width()) / 2,
				zIndex: t
			})
		},
		setPositionValue: function() {
			var i = this,
				e = (this.options.response, Math.floor(this.dnSlideItemsLength / 2)),
				s = this.container.find(".dnSlide-list > li").slice(1),
				o = s.slice(0, s.length / 2),
				n = s.slice(s.length / 2),
				r = (this.container.width() - this.firstItem.width()) / 2,
				a = r / e,
				l = this.dnSlideFirstItem.width(),
				d = this.dnSlideFirstItem.height();
			o.each(function(s, o) {
				l *= i.options.scale, d *= i.options.scale;
				var n = s;
				t(o).css({
					width: l,
					height: d,
					zIndex: --e,
					opacity: 1 / ++n,
					left: r + i.dnSlideFirstItem.width() + ++s * a - l,
					top: i.settingVerticalAlign(d)
				})
			});
			var c = o.last().width(),
				p = o.last().height(),
				u = Math.floor(this.dnSlideItemsLength / 2);
			n.each(function(s, o) {
				t(o).css({
					width: c,
					height: p,
					zIndex: e++,
					opacity: 1 / u--,
					left: a * s,
					top: i.settingVerticalAlign(p)
				}), c /= i.options.scale, p /= i.options.scale
			})
		},
		settingVerticalAlign: function(t) {
			var i = this.options.verticalAlign,
				e = this.dnSlideFirstItem.find(".slide-img").height();
			return "middle" === i ? (e - t) / 2 : "top" === i ? 0 : "bottom" === i ? e - t : (e - t) / 2
		},
		dnSlideRotate: function(i) {
			var e = this,
				s = [],
				o = [];
			"left" === i ? (this.dnSlideItems.find("li").each(function(i, o) {
				var n = t(o).prev().get(0) ? t(o).prev() : e.dnSlideLastItem,
					r = n.width(),
					a = n.height(),
					l = n.css("zIndex"),
					d = n.css("top"),
					c = n.css("left"),
					p = n.css("opacity");
				s.push(l), t(o).animate({
					width: r,
					height: a,
					top: d,
					left: c,
					opacity: p
				}, e.options.speed, function() {
					e.rotateFlag = !0
				})
			}), this.dnSlideItems.find("li").each(function(i) {
				t(this).css("zIndex", s[i]), o.push(parseInt(s[i]))
			})) : "right" === i && (this.dnSlideItems.find("li").each(function(i, o) {
				var n = t(o).next().get(0) ? t(o).next() : e.dnSlideFirstItem,
					r = n.width(),
					a = n.height(),
					l = n.css("zIndex"),
					d = n.css("top"),
					c = n.css("left"),
					p = n.css("opacity");
				s.push(l), t(o).animate({
					width: r,
					height: a,
					top: d,
					left: c,
					opacity: p
				}, function() {
					e.rotateFlag = !0
				})
			}), this.dnSlideItems.find("li").each(function(i) {
				t(this).css("zIndex", s[i]), o.push(parseInt(s[i]))
			}));
			var n = Math.max.apply(null, o),
				r = jQuery.inArray(n, o);
			this.options.afterClickBtnFn.apply(this, [r])
		},
		setDefaultLiJson: function() {
			this.setliArr = this.dnSlideLi.map(function(i, e) {
				var s = [];
				return s.push({
					width: t(e).css("width"),
					height: t(e).css("height"),
					opacity: t(e).css("opacity"),
					"z-index": t(e).css("z-index"),
					left: t(e).css("left"),
					top: t(e).css("top"),
					current: i
				}), s
			}).get()
		},
		clickCurrentLI: function(i) {
			var e = this,
				s = this.dnSlideLi,
				o = s.map(function(i) {
					return t(this).index()
				}).get(),
				n = o,
				r = n.splice(n.indexOf(i), e.dnSlideItemsLength);
			e.rotateFlag = !1, r.reverse().forEach(function(t, i) {
				n.unshift(r[i])
			}), this.setliArr.forEach(function(t, i) {
				t.index = o[i], s.eq(e.setliArr[i].index).css("zIndex", e.setliArr[i]["z-index"]).animate(e.setliArr[i],
					function() {
						e.rotateFlag = !1
					})
			})
		},
		autoPlay: function() {
			var t = this;
			this.timer = setInterval(function() {
				t.dnSlideRotate("left")
			}, t.options.delay)
		},
		isEvenPicNum: function() {
			this.dnSlideItemsLength % 2 == 0 && (this.dnSlideItems.append(this.dnSlideFirstItem.clone()), this.dnSlideItemsLength =
				this.dnSlide.find("ul.dnSlide-list>li").length, this.dnSlideFirstItem = this.dnSlide.find(
					"ul.dnSlide-list>li:first-child"), this.dnSlideLastItem = this.dnSlide.find("ul.dnSlide-list>li:last-child"))
		},
		_api_: function() {
			var i = this,
				e = {};
			return t.each(this.api, function(t) {
				var s = this;
				e[s] = function() {
					var t = i[s].apply(i, arguments);
					return void 0 === t ? e : t
				}
			}), e
		}
	}, t.fn[i] = function(e) {
		return e = t.extend(!0, {}, t[i].defaults, e), this.each(function() {
			t(this).data(i, new t[i](t(this), e)._api_()), t(this).addClass("done")
		})
	})
}), Array.prototype.map || (Array.prototype.map = function(t, i) {
		var e, s, o;
		if (null == this) throw new TypeError(" this is null or not defined");
		var n = Object(this),
			r = n.length >>> 0;
		if ("[object Function]" != Object.prototype.toString.call(t)) throw new TypeError(t + " is not a function");
		for (i && (e = i), s = new Array(r), o = 0; o < r;) {
			var a, l;
			o in n && (a = n[o], l = t.call(e, a, o, n), s[o] = l), o++
		}
		return s
	}), "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(t) {
		for (var i = 0; i < this.length; i++) t.apply(this, [this[i], i, this])
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
		for (var i = 0; i < this.length; i++)
			if (this[i] == t) return i;
		return -1
	}),
	function(t, i, e) {
		function s(t, i) {
			return typeof t === i
		}

		function o() {
			return "function" != typeof i.createElement ? i.createElement(arguments[0]) : m ? i.createElementNS.call(i,
				"http://www.w3.org/2000/svg", arguments[0]) : i.createElement.apply(i, arguments)
		}

		function n(t, e, s, n) {
			var r, a, l, d, c, p = "modernizr",
				u = o("div"),
				h = ((c = i.body) || ((c = o(m ? "svg" : "body")).fake = !0), c);
			if (parseInt(s, 10))
				for (; s--;)(l = o("div")).id = n ? n[s] : p + (s + 1), u.appendChild(l);
			return (r = o("style")).type = "text/css", r.id = "s" + p, (h.fake ? h : u).appendChild(r), h.appendChild(u), r.styleSheet ?
				r.styleSheet.cssText = t : r.appendChild(i.createTextNode(t)), u.id = p, h.fake && (h.style.background = "", h.style
					.overflow = "hidden", d = v.style.overflow, v.style.overflow = "hidden", v.appendChild(h)), a = e(u, t), h.fake ?
				(h.parentNode.removeChild(h), v.style.overflow = d, v.offsetHeight) : u.parentNode.removeChild(u), !!a
		}

		function r(t, i) {
			return function() {
				return t.apply(i, arguments)
			}
		}

		function a(t) {
			return t.replace(/([A-Z])/g, function(t, i) {
				return "-" + i.toLowerCase()
			}).replace(/^ms-/, "-ms-")
		}

		function l(i, r, l, d) {
			function c() {
				u && (delete C.style, delete C.modElem)
			}
			if (d = !s(d, "undefined") && d, !s(l, "undefined")) {
				var p = function(i, s) {
					var o = i.length;
					if ("CSS" in t && "supports" in t.CSS) {
						for (; o--;)
							if (t.CSS.supports(a(i[o]), s)) return !0;
						return !1
					}
					if ("CSSSupportsRule" in t) {
						for (var r = []; o--;) r.push("(" + a(i[o]) + ":" + s + ")");
						return n("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", function(t) {
							return "absolute" == getComputedStyle(t, null).position
						})
					}
					return e
				}(i, l);
				if (!s(p, "undefined")) return p
			}
			for (var u, h, f, v, m, g = ["modernizr", "tspan"]; !C.style;) u = !0, C.modElem = o(g.shift()), C.style = C.modElem
				.style;
			for (f = i.length, h = 0; f > h; h++)
				if (v = i[h], m = C.style[v], !!~("" + v).indexOf("-") && (v = v.replace(/([a-z])-([a-z])/g, function(t, i, e) {
						return i + e.toUpperCase()
					}).replace(/^-/, "")), C.style[v] !== e) {
					if (d || s(l, "undefined")) return c(), "pfx" != r || v;
					try {
						C.style[v] = l
					} catch (t) {}
					if (C.style[v] != m) return c(), "pfx" != r || v
				} return c(), !1
		}

		function d(t, i, e, o, n) {
			var a = t.charAt(0).toUpperCase() + t.slice(1),
				d = (t + " " + T.join(a + " ") + a).split(" ");
			return s(i, "string") || s(i, "undefined") ? l(d, i, o, n) : function(t, i, e) {
				var o;
				for (var n in t)
					if (t[n] in i) return !1 === e ? t[n] : s(o = i[t[n]], "function") ? r(o, e || i) : o;
				return !1
			}(d = (t + " " + b.join(a + " ") + a).split(" "), i, e)
		}

		function c(t, i, s) {
			return d(t, e, e, i, s)
		}
		var p = [],
			u = [],
			h = {
				_version: "3.1.0",
				_config: {
					classPrefix: "",
					enableClasses: !0,
					enableJSClass: !0,
					usePrefixes: !0
				},
				_q: [],
				on: function(t, i) {
					var e = this;
					setTimeout(function() {
						i(e[t])
					}, 0)
				},
				addTest: function(t, i, e) {
					u.push({
						name: t,
						fn: i,
						options: e
					})
				},
				addAsyncTest: function(t) {
					u.push({
						name: null,
						fn: t
					})
				}
			},
			f = function() {};
		f.prototype = h, f = new f;
		var v = i.documentElement,
			m = "svg" === v.nodeName.toLowerCase(),
			g = h._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
		h._prefixes = g;
		var w = "CSS" in t && "supports" in t.CSS,
			y = "supportsCSS" in t;
		f.addTest("supports", w || y);
		var S = h.testStyles = n;
		f.addTest("touchevents", function() {
			var e;
			if ("ontouchstart" in t || t.DocumentTouch && i instanceof DocumentTouch) e = !0;
			else {
				var s = ["@media (", g.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join(
					"");
				S(s, function(t) {
					e = 9 === t.offsetTop
				})
			}
			return e
		});
		var k = "Moz O ms Webkit",
			T = h._config.usePrefixes ? k.split(" ") : [];
		h._cssomPrefixes = T;
		var b = h._config.usePrefixes ? k.toLowerCase().split(" ") : [];
		h._domPrefixes = b;
		var $ = {
			elem: o("modernizr")
		};
		f._q.push(function() {
			delete $.elem
		});
		var C = {
			style: $.elem.style
		};
		f._q.unshift(function() {
				delete C.style
			}), h.testAllProps = d, h.testAllProps = c, f.addTest("cssanimations", c("animationName", "a", !0)), f.addTest(
				"backgroundsize", c("backgroundSize", "100%", !0)), f.addTest("csstransitions", c("transition", "all", !0)), f.addTest(
				"csstransforms3d",
				function() {
					var t, i = !!c("perspective", "1px", !0),
						e = f._config.usePrefixes;
					i && (!e || "webkitPerspective" in v.style) && (f.supports ? t = "@supports (perspective: 1px)" : (t =
						"@media (transform-3d)", e && (t += ",(-webkit-transform-3d)")), S(t +=
						"{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",
						function(t) {
							i = 9 === t.offsetLeft && 5 === t.offsetHeight
						}));
					return i
				}), f.addTest("bgsizecover", c("backgroundSize", "cover")), f.addTest("borderradius", c("borderRadius", "0px", !0)),
			f.addTest("boxshadow", c("boxShadow", "1px 1px", !0)), f.addTest("csstransforms", function() {
				return -1 === navigator.userAgent.indexOf("Android 2.") && c("transform", "scale(1)", !0)
			}),
			function() {
				var t, i, e, o, n, r;
				for (var a in u) {
					if (t = [], (i = u[a]).name && (t.push(i.name.toLowerCase()), i.options && i.options.aliases && i.options.aliases.length))
						for (e = 0; e < i.options.aliases.length; e++) t.push(i.options.aliases[e].toLowerCase());
					for (o = s(i.fn, "function") ? i.fn() : i.fn, n = 0; n < t.length; n++) 1 === (r = t[n].split(".")).length ? f[r[0]] =
						o : (!f[r[0]] || f[r[0]] instanceof Boolean || (f[r[0]] = new Boolean(f[r[0]])), f[r[0]][r[1]] = o), p.push((o ?
							"" : "no-") + r.join("-"))
				}
			}(),
			function(t) {
				var i = v.className,
					e = f._config.classPrefix || "";
				if (m && (i = i.baseVal), f._config.enableJSClass) {
					var s = new RegExp("(^|\\s)" + e + "no-js(\\s|$)");
					i = i.replace(s, "$1" + e + "js$2")
				}
				f._config.enableClasses && (i += " " + e + t.join(" " + e), m ? v.className.baseVal = i : v.className = i)
			}(p), delete h.addTest, delete h.addAsyncTest;
		for (var x = 0; x < f._q.length; x++) f._q[x]();
		t.Modernizr = f
	}(window, document), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function(t, i, e, s, o) {
			return jQuery.easing[jQuery.easing.def](t, i, e, s, o)
		},
		easeInQuad: function(t, i, e, s, o) {
			return s * (i /= o) * i + e
		},
		easeOutQuad: function(t, i, e, s, o) {
			return -s * (i /= o) * (i - 2) + e
		},
		easeInOutQuad: function(t, i, e, s, o) {
			return (i /= o / 2) < 1 ? s / 2 * i * i + e : -s / 2 * (--i * (i - 2) - 1) + e
		},
		easeInCubic: function(t, i, e, s, o) {
			return s * (i /= o) * i * i + e
		},
		easeOutCubic: function(t, i, e, s, o) {
			return s * ((i = i / o - 1) * i * i + 1) + e
		},
		easeInOutCubic: function(t, i, e, s, o) {
			return (i /= o / 2) < 1 ? s / 2 * i * i * i + e : s / 2 * ((i -= 2) * i * i + 2) + e
		},
		easeInQuart: function(t, i, e, s, o) {
			return s * (i /= o) * i * i * i + e
		},
		easeOutQuart: function(t, i, e, s, o) {
			return -s * ((i = i / o - 1) * i * i * i - 1) + e
		},
		easeInOutQuart: function(t, i, e, s, o) {
			return (i /= o / 2) < 1 ? s / 2 * i * i * i * i + e : -s / 2 * ((i -= 2) * i * i * i - 2) + e
		},
		easeInQuint: function(t, i, e, s, o) {
			return s * (i /= o) * i * i * i * i + e
		},
		easeOutQuint: function(t, i, e, s, o) {
			return s * ((i = i / o - 1) * i * i * i * i + 1) + e
		},
		easeInOutQuint: function(t, i, e, s, o) {
			return (i /= o / 2) < 1 ? s / 2 * i * i * i * i * i + e : s / 2 * ((i -= 2) * i * i * i * i + 2) + e
		},
		easeInSine: function(t, i, e, s, o) {
			return -s * Math.cos(i / o * (Math.PI / 2)) + s + e
		},
		easeOutSine: function(t, i, e, s, o) {
			return s * Math.sin(i / o * (Math.PI / 2)) + e
		},
		easeInOutSine: function(t, i, e, s, o) {
			return -s / 2 * (Math.cos(Math.PI * i / o) - 1) + e
		},
		easeInExpo: function(t, i, e, s, o) {
			return 0 == i ? e : s * Math.pow(2, 10 * (i / o - 1)) + e
		},
		easeOutExpo: function(t, i, e, s, o) {
			return i == o ? e + s : s * (1 - Math.pow(2, -10 * i / o)) + e
		},
		easeInOutExpo: function(t, i, e, s, o) {
			return 0 == i ? e : i == o ? e + s : (i /= o / 2) < 1 ? s / 2 * Math.pow(2, 10 * (i - 1)) + e : s / 2 * (2 - Math.pow(
				2, -10 * --i)) + e
		},
		easeInCirc: function(t, i, e, s, o) {
			return -s * (Math.sqrt(1 - (i /= o) * i) - 1) + e
		},
		easeOutCirc: function(t, i, e, s, o) {
			return s * Math.sqrt(1 - (i = i / o - 1) * i) + e
		},
		easeInOutCirc: function(t, i, e, s, o) {
			return (i /= o / 2) < 1 ? -s / 2 * (Math.sqrt(1 - i * i) - 1) + e : s / 2 * (Math.sqrt(1 - (i -= 2) * i) + 1) + e
		},
		easeInElastic: function(t, i, e, s, o) {
			var n = 1.70158,
				r = 0,
				a = s;
			if (0 == i) return e;
			if (1 == (i /= o)) return e + s;
			if (r || (r = .3 * o), a < Math.abs(s)) {
				a = s;
				n = r / 4
			} else n = r / (2 * Math.PI) * Math.asin(s / a);
			return -a * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * o - n) * (2 * Math.PI) / r) + e
		},
		easeOutElastic: function(t, i, e, s, o) {
			var n = 1.70158,
				r = 0,
				a = s;
			if (0 == i) return e;
			if (1 == (i /= o)) return e + s;
			if (r || (r = .3 * o), a < Math.abs(s)) {
				a = s;
				n = r / 4
			} else n = r / (2 * Math.PI) * Math.asin(s / a);
			return a * Math.pow(2, -10 * i) * Math.sin((i * o - n) * (2 * Math.PI) / r) + s + e
		},
		easeInOutElastic: function(t, i, e, s, o) {
			var n = 1.70158,
				r = 0,
				a = s;
			if (0 == i) return e;
			if (2 == (i /= o / 2)) return e + s;
			if (r || (r = o * (.3 * 1.5)), a < Math.abs(s)) {
				a = s;
				n = r / 4
			} else n = r / (2 * Math.PI) * Math.asin(s / a);
			return i < 1 ? a * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * o - n) * (2 * Math.PI) / r) * -.5 + e : a * Math.pow(
				2, -10 * (i -= 1)) * Math.sin((i * o - n) * (2 * Math.PI) / r) * .5 + s + e
		},
		easeInBack: function(t, i, e, s, o, n) {
			return void 0 == n && (n = 1.70158), s * (i /= o) * i * ((n + 1) * i - n) + e
		},
		easeOutBack: function(t, i, e, s, o, n) {
			return void 0 == n && (n = 1.70158), s * ((i = i / o - 1) * i * ((n + 1) * i + n) + 1) + e
		},
		easeInOutBack: function(t, i, e, s, o, n) {
			return void 0 == n && (n = 1.70158), (i /= o / 2) < 1 ? s / 2 * (i * i * ((1 + (n *= 1.525)) * i - n)) + e : s / 2 *
				((i -= 2) * i * ((1 + (n *= 1.525)) * i + n) + 2) + e
		},
		easeInBounce: function(t, i, e, s, o) {
			return s - jQuery.easing.easeOutBounce(t, o - i, 0, s, o) + e
		},
		easeOutBounce: function(t, i, e, s, o) {
			return (i /= o) < 1 / 2.75 ? s * (7.5625 * i * i) + e : i < 2 / 2.75 ? s * (7.5625 * (i -= 1.5 / 2.75) * i + .75) +
				e : i < 2.5 / 2.75 ? s * (7.5625 * (i -= 2.25 / 2.75) * i + .9375) + e : s * (7.5625 * (i -= 2.625 / 2.75) * i +
					.984375) + e
		},
		easeInOutBounce: function(t, i, e, s, o) {
			return i < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * i, 0, s, o) + e : .5 * jQuery.easing.easeOutBounce(t, 2 *
				i - o, 0, s, o) + .5 * s + e
		}
	}), jQuery(window).load(function() {
		$(".scoamt").scrollClass()
	}),
	function(t) {
		$.fn.scrollClass = function(i) {
			i = t.extend({}, i);
			var e = this;

			function s() {
				for (var i = e.length, s = 0; s < i; s++) {
					if (!e.eq(s).hasClass("transShow")) e.eq(s).offset().top + 100 < t(window).scrollTop() + t(window).height() && (e
						.eq(s).addClass("transShow"), e.eq(s).hasClass("ia-num") && numStart())
				}
			}
			return s(), t(window).on("scroll", function() {
				s()
			}), e
		}
	}(jQuery),
	function(t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports =
			t(require("jquery")) : t(jQuery)
	}(function(t) {
		"use strict";
		var i = window.Slick || {};
		(i = function() {
			var i = 0;
			return function(e, s) {
				var o, n = this;
				n.defaults = {
						accessibility: !0,
						adaptiveHeight: !1,
						appendArrows: t(e),
						appendDots: t(e),
						arrows: !0,
						asNavFor: null,
						prevArrow: '<a class="slick-prev"><i></i></a>',
						nextArrow: '<a class="slick-next"><i></i></a>',
						autoplay: !1,
						autoplaySpeed: 3e3,
						centerMode: !1,
						centerPadding: "50px",
						cssEase: "ease",
						customPaging: function(t, i) {
							return '<a  data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + "</a>"
						},
						dots: !1,
						dotsClass: "slick-dots",
						draggable: !0,
						easing: "linear",
						edgeFriction: .35,
						fade: !1,
						focusOnSelect: !1,
						infinite: !0,
						initialSlide: 0,
						lazyLoad: "ondemand",
						mobileFirst: !1,
						pauseOnHover: !0,
						pauseOnDotsHover: !1,
						respondTo: "window",
						responsive: null,
						rows: 1,
						rtl: !1,
						slide: "",
						slidesPerRow: 1,
						slidesToShow: 1,
						slidesToScroll: 1,
						speed: 500,
						swipe: !0,
						swipeToSlide: !1,
						touchMove: !0,
						touchThreshold: 5,
						useCSS: !0,
						variableWidth: !1,
						vertical: !1,
						verticalSwiping: !1,
						waitForAnimate: !0,
						zIndex: 100
					}, n.initials = {
						animating: !1,
						dragging: !1,
						autoPlayTimer: null,
						currentDirection: 0,
						currentLeft: null,
						currentSlide: 0,
						direction: 1,
						$dots: null,
						listWidth: null,
						listHeight: null,
						loadIndex: 0,
						$nextArrow: null,
						$prevArrow: null,
						slideCount: null,
						slideWidth: null,
						$slideTrack: null,
						$slides: null,
						sliding: !1,
						slideOffset: 0,
						swipeLeft: null,
						$list: null,
						touchObject: {},
						transformsEnabled: !1,
						unslicked: !1
					}, t.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [],
					n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", n.paused = !1, n.positionProp = null, n.respondTo =
					null, n.rowCount = 1, n.shouldClick = !0, n.$slider = t(e), n.$slidesCache = null, n.transformType = null, n.transitionType =
					null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, o = t(e).data("slick") ||
					{}, n.options = t.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n
					.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") :
					void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"),
					n.autoPlay = t.proxy(n.autoPlay, n), n.autoPlayClear = t.proxy(n.autoPlayClear, n), n.changeSlide = t.proxy(n.changeSlide,
						n), n.clickHandler = t.proxy(n.clickHandler, n), n.selectHandler = t.proxy(n.selectHandler, n), n.setPosition =
					t.proxy(n.setPosition, n), n.swipeHandler = t.proxy(n.swipeHandler, n), n.dragHandler = t.proxy(n.dragHandler,
						n), n.keyHandler = t.proxy(n.keyHandler, n), n.autoPlayIterator = t.proxy(n.autoPlayIterator, n), n.instanceUid =
					i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0), n.checkResponsive(!0)
			}
		}()).prototype.addSlide = i.prototype.slickAdd = function(i, e, s) {
			var o = this;
			if ("boolean" == typeof e) s = e, e = null;
			else if (e < 0 || e >= o.slideCount) return !1;
			o.unload(), "number" == typeof e ? 0 === e && 0 === o.$slides.length ? t(i).appendTo(o.$slideTrack) : s ? t(i).insertBefore(
					o.$slides.eq(e)) : t(i).insertAfter(o.$slides.eq(e)) : !0 === s ? t(i).prependTo(o.$slideTrack) : t(i).appendTo(
					o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide)
				.detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(i, e) {
					t(e).attr("data-slick-index", i)
				}), o.$slidesCache = o.$slides, o.reinit()
		}, i.prototype.animateHeight = function() {
			var t = this;
			if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
				var i = t.$slides.eq(t.currentSlide).outerHeight(!0);
				t.$list.animate({
					height: i
				}, t.options.speed)
			}
		}, i.prototype.animateSlide = function(i, e) {
			var s = {},
				o = this;
			o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (i = -i), !1 === o.transformsEnabled ? !1 ===
				o.options.vertical ? o.$slideTrack.animate({
					left: i
				}, o.options.speed, o.options.easing, e) : o.$slideTrack.animate({
					top: i
				}, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o
					.currentLeft), t({
					animStart: o.currentLeft
				}).animate({
					animStart: i
				}, {
					duration: o.options.speed,
					easing: o.options.easing,
					step: function(t) {
						t = Math.ceil(t), !1 === o.options.vertical ? (s[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(
							s)) : (s[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(s))
					},
					complete: function() {
						e && e.call()
					}
				})) : (o.applyTransition(), i = Math.ceil(i), !1 === o.options.vertical ? s[o.animType] = "translate3d(" + i +
					"px, 0px, 0px)" : s[o.animType] = "translate3d(0px," + i + "px, 0px)", o.$slideTrack.css(s), e && setTimeout(
						function() {
							o.disableTransition(), e.call()
						}, o.options.speed))
		}, i.prototype.asNavFor = function(i) {
			var e = this.options.asNavFor;
			e && null !== e && (e = t(e).not(this.$slider)), null !== e && "object" == typeof e && e.each(function() {
				var e = t(this).slick("getSlick");
				e.unslicked || e.slideHandler(i, !0)
			})
		}, i.prototype.applyTransition = function(t) {
			var i = this,
				e = {};
			!1 === i.options.fade ? e[i.transitionType] = i.transformType + " " + i.options.speed + "ms " + i.options.cssEase :
				e[i.transitionType] = "opacity " + i.options.speed + "ms " + i.options.cssEase, !1 === i.options.fade ? i.$slideTrack
				.css(e) : i.$slides.eq(t).css(e)
		}, i.prototype.autoPlay = function() {
			var t = this;
			t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && !0 !== t.paused && (t.autoPlayTimer =
				setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
		}, i.prototype.autoPlayClear = function() {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer)
		}, i.prototype.autoPlayIterator = function() {
			var t = this;
			!1 === t.options.infinite ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(
				t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 == 0 && (t.direction = 1), t.slideHandler(t.currentSlide -
				t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
		}, i.prototype.buildArrows = function() {
			var i = this;
			!0 === i.options.arrows && (i.$prevArrow = t(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = t(i.options
				.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass(
					"slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr(
					"aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows),
				i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite &&
				i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass(
				"slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, i.prototype.buildDots = function() {
			var i, e, s = this;
			if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
				for (e = '<ul class="' + s.options.dotsClass + '">', i = 0; i <= s.getDotCount(); i += 1) e += "<li>" + s.options
					.customPaging.call(this, s, i) + "</li>";
				e += "</ul>", s.$dots = t(e).appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active").attr(
					"aria-hidden", "false")
			}
		}, i.prototype.buildOut = function() {
			var i = this;
			i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides
				.length, i.$slides.each(function(i, e) {
					t(e).attr("data-slick-index", i).data("originalStyling", t(e).attr("style") || "")
				}), i.$slidesCache = i.$slides, i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? t(
					'<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list =
				i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), !0 !==
				i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), t("img[data-lazy]", i.$slider)
				.not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses(
					"number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass(
					"draggable")
		}, i.prototype.buildRows = function() {
			var t, i, e, s, o, n, r, a = this;
			if (s = document.createDocumentFragment(), n = a.$slider.children(), a.options.rows > 1) {
				for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(n.length / r), t = 0; t < o; t++) {
					var l = document.createElement("div");
					for (i = 0; i < a.options.rows; i++) {
						var d = document.createElement("div");
						for (e = 0; e < a.options.slidesPerRow; e++) {
							var c = t * r + (i * a.options.slidesPerRow + e);
							n.get(c) && d.appendChild(n.get(c))
						}
						l.appendChild(d)
					}
					s.appendChild(l)
				}
				a.$slider.html(s), a.$slider.children().children().children().css({
					width: 100 / a.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, i.prototype.checkResponsive = function(i, e) {
			var s, o, n, r = this,
				a = !1,
				l = r.$slider.width(),
				d = window.innerWidth || t(window).width();
			if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = l : "min" === r.respondTo && (n = Math.min(d,
					l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
				for (s in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(s) && (!1 === r.originalSettings.mobileFirst ? n <
					r.breakpoints[s] && (o = r.breakpoints[s]) : n > r.breakpoints[s] && (o = r.breakpoints[s]));
				null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || e) && (r.activeBreakpoint = o, "unslick" ===
						r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]),
							!0 === i && (r.currentSlide = r.options.initialSlide), r.refresh(i)), a = o) : (r.activeBreakpoint = o,
						"unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[
							o]), !0 === i && (r.currentSlide = r.options.initialSlide), r.refresh(i)), a = o) : null !== r.activeBreakpoint &&
					(r.activeBreakpoint = null, r.options = r.originalSettings, !0 === i && (r.currentSlide = r.options.initialSlide),
						r.refresh(i), a = o), i || !1 === a || r.$slider.trigger("breakpoint", [r, a])
			}
		}, i.prototype.changeSlide = function(i, e) {
			var s, o, n = this,
				r = t(i.target);
			switch (r.is("a") && i.preventDefault(), r.is("li") || (r = r.closest("li")), s = n.slideCount % n.options.slidesToScroll !=
				0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, i.data.message) {
				case "previous":
					o = 0 === s ? n.options.slidesToScroll : n.options.slidesToShow - s, n.slideCount > n.options.slidesToShow && n.slideHandler(
						n.currentSlide - o, !1, e);
					break;
				case "next":
					o = 0 === s ? n.options.slidesToScroll : s, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide +
						o, !1, e);
					break;
				case "index":
					var a = 0 === i.data.index ? 0 : i.data.index || r.index() * n.options.slidesToScroll;
					n.slideHandler(n.checkNavigable(a), !1, e), r.children().trigger("focus");
					break;
				default:
					return
			}
		}, i.prototype.checkNavigable = function(t) {
			var i, e;
			if (e = 0, t > (i = this.getNavigableIndexes())[i.length - 1]) t = i[i.length - 1];
			else
				for (var s in i) {
					if (t < i[s]) {
						t = e;
						break
					}
					e = i[s]
				}
			return t
		}, i.prototype.cleanUpEvents = function() {
			var i = this;
			i.options.dots && null !== i.$dots && (t("li", i.$dots).off("click.slick", i.changeSlide), !0 === i.options.pauseOnDotsHover &&
					!0 === i.options.autoplay && t("li", i.$dots).off("mouseenter.slick", t.proxy(i.setPaused, i, !0)).off(
						"mouseleave.slick", t.proxy(i.setPaused, i, !1))), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow &&
				(i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick",
					i.changeSlide)), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off(
					"touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler),
				i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), t(
					document).off(i.visibilityChange, i.visibility), i.$list.off("mouseenter.slick", t.proxy(i.setPaused, i, !0)), i
				.$list.off("mouseleave.slick", t.proxy(i.setPaused, i, !1)), !0 === i.options.accessibility && i.$list.off(
					"keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && t(i.$slideTrack).children().off("click.slick",
					i.selectHandler), t(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), t(window)
				.off("resize.slick.slick-" + i.instanceUid, i.resize), t("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault),
				t(window).off("load.slick.slick-" + i.instanceUid, i.setPosition), t(document).off("ready.slick.slick-" + i.instanceUid,
					i.setPosition)
		}, i.prototype.cleanUpRows = function() {
			var t;
			this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.html(t))
		}, i.prototype.clickHandler = function(t) {
			!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
		}, i.prototype.destroy = function(i) {
			var e = this;
			e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), t(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots
				.remove(), !0 === e.options.arrows && (e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass(
						"slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
					e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow
					.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css(
						"display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove())), e.$slides && (e.$slides.removeClass(
					"slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr(
					"data-slick-index").each(function() {
					t(this).attr("style", t(this).data("originalStyling"))
				}), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(
					e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"),
				e.unslicked = !0, i || e.$slider.trigger("destroy", [e])
		}, i.prototype.disableTransition = function(t) {
			var i = {};
			i[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(i) : this.$slides.eq(t).css(i)
		}, i.prototype.fadeSlide = function(t, i) {
			var e = this;
			!1 === e.cssTransitions ? (e.$slides.eq(t).css({
				zIndex: e.options.zIndex
			}), e.$slides.eq(t).animate({
				opacity: 1
			}, e.options.speed, e.options.easing, i)) : (e.applyTransition(t), e.$slides.eq(t).css({
				opacity: 1,
				zIndex: e.options.zIndex
			}), i && setTimeout(function() {
				e.disableTransition(t), i.call()
			}, e.options.speed))
		}, i.prototype.fadeSlideOut = function(t) {
			var i = this;
			!1 === i.cssTransitions ? i.$slides.eq(t).animate({
				opacity: 0,
				zIndex: i.options.zIndex - 2
			}, i.options.speed, i.options.easing) : (i.applyTransition(t), i.$slides.eq(t).css({
				opacity: 0,
				zIndex: i.options.zIndex - 2
			}))
		}, i.prototype.filterSlides = i.prototype.slickFilter = function(t) {
			var i = this;
			null !== t && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(t).appendTo(
				i.$slideTrack), i.reinit())
		}, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
			return this.currentSlide
		}, i.prototype.getDotCount = function() {
			var t = this,
				i = 0,
				e = 0,
				s = 0;
			if (!0 === t.options.infinite)
				for (; i < t.slideCount;) ++s, i = e + t.options.slidesToShow, e += t.options.slidesToScroll <= t.options.slidesToShow ?
					t.options.slidesToScroll : t.options.slidesToShow;
			else if (!0 === t.options.centerMode) s = t.slideCount;
			else
				for (; i < t.slideCount;) ++s, i = e + t.options.slidesToShow, e += t.options.slidesToScroll <= t.options.slidesToShow ?
					t.options.slidesToScroll : t.options.slidesToShow;
			return s - 1
		}, i.prototype.getLeft = function(t) {
			var i, e, s, o = this,
				n = 0;
			return o.slideOffset = 0, e = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options
					.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = e * o.options.slidesToShow * -
						1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount >
					o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o
						.slideWidth * -1, n = (o.options.slidesToShow - (t - o.slideCount)) * e * -1) : (o.slideOffset = o.slideCount %
						o.options.slidesToScroll * o.slideWidth * -1, n = o.slideCount % o.options.slidesToScroll * e * -1))) : t + o.options
				.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, n =
					(t + o.options.slidesToShow - o.slideCount) * e), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
					n = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options
					.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth *
					Math.floor(o.options.slidesToShow / 2)), i = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset :
				t * e * -1 + n, !0 === o.options.variableWidth && (i = (s = o.slideCount <= o.options.slidesToShow || !1 === o.options
					.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options
						.slidesToShow))[0] ? -1 * s[0].offsetLeft : 0, !0 === o.options.centerMode && (i = (s = !1 === o.options.infinite ?
					o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow +
						1))[0] ? -1 * s[0].offsetLeft : 0, i += (o.$list.width() - s.outerWidth()) / 2)), i
		}, i.prototype.getOption = i.prototype.slickGetOption = function(t) {
			return this.options[t]
		}, i.prototype.getNavigableIndexes = function() {
			var t, i = this,
				e = 0,
				s = 0,
				o = [];
			for (!1 === i.options.infinite ? t = i.slideCount : (e = -1 * i.options.slidesToScroll, s = -1 * i.options.slidesToScroll,
					t = 2 * i.slideCount); e < t;) o.push(e), e = s + i.options.slidesToScroll, s += i.options.slidesToScroll <= i.options
				.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
			return o
		}, i.prototype.getSlick = function() {
			return this
		}, i.prototype.getSlideCount = function() {
			var i, e, s = this;
			return e = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options
				.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(o, n) {
					if (n.offsetLeft - e + t(n).outerWidth() / 2 > -1 * s.swipeLeft) return i = n, !1
				}), Math.abs(t(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
		}, i.prototype.goTo = i.prototype.slickGoTo = function(t, i) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(t)
				}
			}, i)
		}, i.prototype.init = function(i) {
			var e = this;
			t(e.$slider).hasClass("slick-initialized") || (t(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(),
					e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()), i && e.$slider
				.trigger("init", [e]), !0 === e.options.accessibility && e.initADA()
		}, i.prototype.initArrowEvents = function() {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
				message: "previous"
			}, t.changeSlide), t.$nextArrow.on("click.slick", {
				message: "next"
			}, t.changeSlide))
		}, i.prototype.initDotEvents = function() {
			var i = this;
			!0 === i.options.dots && i.slideCount > i.options.slidesToShow && t("li", i.$dots).on("click.slick", {
				message: "index"
			}, i.changeSlide), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && !0 === i.options.autoplay && t(
				"li", i.$dots).on("mouseenter.slick", t.proxy(i.setPaused, i, !0)).on("mouseleave.slick", t.proxy(i.setPaused, i,
				!1))
		}, i.prototype.initializeEvents = function() {
			var i = this;
			i.initArrowEvents(), i.initDotEvents(), i.$list.on("touchstart.slick mousedown.slick", {
					action: "start"
				}, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
					action: "move"
				}, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
					action: "end"
				}, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
					action: "end"
				}, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), t(document).on(i.visibilityChange, t.proxy(i.visibility,
					i)), i.$list.on("mouseenter.slick", t.proxy(i.setPaused, i, !0)), i.$list.on("mouseleave.slick", t.proxy(i.setPaused,
					i, !1)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect &&
				t(i.$slideTrack).children().on("click.slick", i.selectHandler), t(window).on("orientationchange.slick.slick-" + i
					.instanceUid, t.proxy(i.orientationChange, i)), t(window).on("resize.slick.slick-" + i.instanceUid, t.proxy(i.resize,
					i)), t("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), t(window).on("load.slick.slick-" +
					i.instanceUid, i.setPosition), t(document).on("ready.slick.slick-" + i.instanceUid, i.setPosition)
		}, i.prototype.initUI = function() {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 ===
				t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show(), !0 === t.options.autoplay && t.autoPlay()
		}, i.prototype.keyHandler = function(t) {
			t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
				data: {
					message: "previous"
				}
			}) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
				data: {
					message: "next"
				}
			}))
		}, i.prototype.lazyLoad = function() {
			var i, e, s = this;

			function o(i) {
				t("img[data-lazy]", i).each(function() {
					var i = t(this),
						e = t(this).attr("data-lazy"),
						s = document.createElement("img");
					s.onload = function() {
						i.animate({
							opacity: 0
						}, 100, function() {
							i.attr("src", e).animate({
								opacity: 1
							}, 200, function() {
								i.removeAttr("data-lazy").removeClass("slick-loading")
							})
						})
					}, s.src = e
				})
			}!0 === s.options.centerMode ? !0 === s.options.infinite ? e = (i = s.currentSlide + (s.options.slidesToShow / 2 +
				1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), e = s.options
				.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (e = (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide :
				s.currentSlide) + s.options.slidesToShow, !0 === s.options.fade && (i > 0 && i--, e <= s.slideCount && e++)), o(
				s.$slider.find(".slick-slide").slice(i, e)), s.slideCount <= s.options.slidesToShow ? o(s.$slider.find(
				".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? o(s.$slider.find(".slick-cloned").slice(
				0, s.options.slidesToShow)) : 0 === s.currentSlide && o(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
		}, i.prototype.loadSlider = function() {
			var t = this;
			t.setPosition(), t.$slideTrack.css({
				opacity: 1
			}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
		}, i.prototype.next = i.prototype.slickNext = function() {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, i.prototype.orientationChange = function() {
			this.checkResponsive(), this.setPosition()
		}, i.prototype.pause = i.prototype.slickPause = function() {
			this.autoPlayClear(), this.paused = !0
		}, i.prototype.play = i.prototype.slickPlay = function() {
			this.paused = !1, this.autoPlay()
		}, i.prototype.postSlide = function(t) {
			var i = this;
			i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.setPosition(), i.swipeLeft = null, !0 === i.options.autoplay &&
				!1 === i.paused && i.autoPlay(), !0 === i.options.accessibility && i.initADA()
		}, i.prototype.prev = i.prototype.slickPrev = function() {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, i.prototype.preventDefault = function(t) {
			t.preventDefault()
		}, i.prototype.progressiveLazyLoad = function() {
			var i, e = this;
			t("img[data-lazy]", e.$slider).length > 0 && (i = t("img[data-lazy]", e.$slider).first()).attr("src", i.attr(
				"data-lazy")).removeClass("slick-loading").load(function() {
				i.removeAttr("data-lazy"), e.progressiveLazyLoad(), !0 === e.options.adaptiveHeight && e.setPosition()
			}).error(function() {
				i.removeAttr("data-lazy"), e.progressiveLazyLoad()
			})
		}, i.prototype.refresh = function(i) {
			var e = this,
				s = e.currentSlide;
			e.destroy(!0), t.extend(e, e.initials, {
				currentSlide: s
			}), e.init(), i || e.changeSlide({
				data: {
					message: "index",
					index: s
				}
			}, !1)
		}, i.prototype.registerBreakpoints = function() {
			var i, e, s, o = this,
				n = o.options.responsive || null;
			if ("array" === t.type(n) && n.length) {
				for (i in o.respondTo = o.options.respondTo || "window", n)
					if (s = o.breakpoints.length - 1, e = n[i].breakpoint, n.hasOwnProperty(i)) {
						for (; s >= 0;) o.breakpoints[s] && o.breakpoints[s] === e && o.breakpoints.splice(s, 1), s--;
						o.breakpoints.push(e), o.breakpointSettings[e] = n[i].settings
					} o.breakpoints.sort(function(t, i) {
					return o.options.mobileFirst ? t - i : i - t
				})
			}
		}, i.prototype.reinit = function() {
			var i = this;
			i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >=
				i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <=
				i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(),
				i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.checkResponsive(!1, !0),
				!0 === i.options.focusOnSelect && t(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses(
					0), i.setPosition(), i.$slider.trigger("reInit", [i]), !0 === i.options.autoplay && i.focusHandler()
		}, i.prototype.resize = function() {
			var i = this;
			t(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
				i.windowWidth = t(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
			}, 50))
		}, i.prototype.removeSlide = i.prototype.slickRemove = function(t, i, e) {
			var s = this;
			if (t = "boolean" == typeof t ? !0 === (i = t) ? 0 : s.slideCount - 1 : !0 === i ? --t : t, s.slideCount < 1 || t <
				0 || t > s.slideCount - 1) return !1;
			s.unload(), !0 === e ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(),
				s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack
				.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
		}, i.prototype.setCSS = function(t) {
			var i, e, s = this,
				o = {};
			!0 === s.options.rtl && (t = -t), i = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", e = "top" == s.positionProp ?
				Math.ceil(t) + "px" : "0px", o[s.positionProp] = t, !1 === s.transformsEnabled ? s.$slideTrack.css(o) : (o = {},
					!1 === s.cssTransitions ? (o[s.animType] = "translate(" + i + ", " + e + ")", s.$slideTrack.css(o)) : (o[s.animType] =
						"translate3d(" + i + ", " + e + ", 0px)", s.$slideTrack.css(o)))
		}, i.prototype.setDimensions = function() {
			var t = this;
			!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
					padding: "0px " + t.options.centerPadding
				}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode &&
					t.$list.css({
						padding: t.options.centerPadding + " 0px"
					})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options
				.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t
					.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(
					5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(
					!0) * t.$slideTrack.children(".slick-slide").length)));
			var i = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
			!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - i)
		}, i.prototype.setFade = function() {
			var i, e = this;
			e.$slides.each(function(s, o) {
				i = e.slideWidth * s * -1, !0 === e.options.rtl ? t(o).css({
					position: "relative",
					right: i,
					top: 0,
					zIndex: e.options.zIndex - 2,
					opacity: 0
				}) : t(o).css({
					position: "relative",
					left: i,
					top: 0,
					zIndex: e.options.zIndex - 2,
					opacity: 0
				})
			}), e.$slides.eq(e.currentSlide).css({
				zIndex: e.options.zIndex - 1,
				opacity: 1
			})
		}, i.prototype.setHeight = function() {
			var t = this;
			if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
				var i = t.$slides.eq(t.currentSlide).outerHeight(!0);
				t.$list.css("height", i)
			}
		}, i.prototype.setOption = i.prototype.slickSetOption = function(i, e, s) {
			var o, n, r = this;
			if ("responsive" === i && "array" === t.type(e))
				for (n in e)
					if ("array" !== t.type(r.options.responsive)) r.options.responsive = [e[n]];
					else {
						for (o = r.options.responsive.length - 1; o >= 0;) r.options.responsive[o].breakpoint === e[n].breakpoint && r.options
							.responsive.splice(o, 1), o--;
						r.options.responsive.push(e[n])
					}
			else r.options[i] = e;
			!0 === s && (r.unload(), r.reinit())
		}, i.prototype.setPosition = function() {
			var t = this;
			t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider
				.trigger("setPosition", [t])
		}, i.prototype.setProps = function() {
			var t = this,
				i = document.body.style;
			t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass(
					"slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === i.WebkitTransition && void 0 === i.MozTransition &&
				void 0 === i.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" ==
					typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
				void 0 !== i.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType =
					"OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (t.animType = !1)), void 0 !==
				i.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType =
					"MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (t.animType = !1)), void 0 !==
				i.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType =
					"webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (t.animType = !1)),
				void 0 !== i.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType =
					"msTransition", void 0 === i.msTransform && (t.animType = !1)), void 0 !== i.transform && !1 !== t.animType && (
					t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled =
				null !== t.animType && !1 !== t.animType
		}, i.prototype.setSlideClasses = function(t) {
			var i, e, s, o, n = this;
			e = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden",
					"true"), n.$slides.eq(t).addClass("slick-current"), !0 === n.options.centerMode ? (i = Math.floor(n.options.slidesToShow /
					2), !0 === n.options.infinite && (t >= i && t <= n.slideCount - 1 - i ? n.$slides.slice(t - i, t + i + 1).addClass(
					"slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + t, e.slice(s - i + 1, s + i + 2).addClass(
					"slick-active").attr("aria-hidden", "false")), 0 === t ? e.eq(e.length - 1 - n.options.slidesToShow).addClass(
					"slick-center") : t === n.slideCount - 1 && e.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(
					t).addClass("slick-center")) : t >= 0 && t <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(t, t + n.options
					.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : e.length <= n.options.slidesToShow ? e.addClass(
					"slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow, s = !0 === n.options.infinite ?
					n.options.slidesToShow + t : t, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - t < n.options
					.slidesToShow ? e.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden",
						"false") : e.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
				"ondemand" === n.options.lazyLoad && n.lazyLoad()
		}, i.prototype.setupInfinite = function() {
			var i, e, s, o = this;
			if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (e =
					null, o.slideCount > o.options.slidesToShow)) {
				for (s = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount; i >
					o.slideCount - s; i -= 1) e = i - 1, t(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount)
					.prependTo(o.$slideTrack).addClass("slick-cloned");
				for (i = 0; i < s; i += 1) e = i, t(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount)
					.appendTo(o.$slideTrack).addClass("slick-cloned");
				o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
					t(this).attr("id", "")
				})
			}
		}, i.prototype.setPaused = function(t) {
			var i = this;
			!0 === i.options.autoplay && !0 === i.options.pauseOnHover && (i.paused = t, t ? i.autoPlayClear() : i.autoPlay())
		}, i.prototype.selectHandler = function(i) {
			var e = this,
				s = t(i.target).is(".slick-slide") ? t(i.target) : t(i.target).parents(".slick-slide"),
				o = parseInt(s.attr("data-slick-index"));
			if (o || (o = 0), e.slideCount <= e.options.slidesToShow) return e.setSlideClasses(o), void e.asNavFor(o);
			e.slideHandler(o)
		}, i.prototype.slideHandler = function(t, i, e) {
			var s, o, n, r, a, l = this;
			if (i = i || !1, (!0 !== l.animating || !0 !== l.options.waitForAnimate) && !(!0 === l.options.fade && l.currentSlide ===
					t || l.slideCount <= l.options.slidesToShow))
				if (!1 === i && l.asNavFor(t), s = t, a = l.getLeft(s), r = l.getLeft(l.currentSlide), l.currentLeft = null ===
					l.swipeLeft ? r : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (t < 0 || t > l.getDotCount() *
						l.options.slidesToScroll)) !1 === l.options.fade && (s = l.currentSlide, !0 !== e ? l.animateSlide(r, function() {
					l.postSlide(s)
				}) : l.postSlide(s));
				else if (!1 === l.options.infinite && !0 === l.options.centerMode && (t < 0 || t > l.slideCount - l.options.slidesToScroll))
				!1 === l.options.fade && (s = l.currentSlide, !0 !== e ? l.animateSlide(r, function() {
					l.postSlide(s)
				}) : l.postSlide(s));
			else {
				if (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), o = s < 0 ? l.slideCount % l.options.slidesToScroll !=
					0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + s : s >= l.slideCount ? l.slideCount %
					l.options.slidesToScroll != 0 ? 0 : s - l.slideCount : s, l.animating = !0, l.$slider.trigger("beforeChange", [l,
						l.currentSlide, o
					]), n = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(),
					!0 === l.options.fade) return !0 !== e ? (l.fadeSlideOut(n), l.fadeSlide(o, function() {
					l.postSlide(o)
				})) : l.postSlide(o), void l.animateHeight();
				!0 !== e ? l.animateSlide(a, function() {
					l.postSlide(o)
				}) : l.postSlide(o)
			}
		}, i.prototype.startLoad = function() {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 ===
				t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
		}, i.prototype.swipeDirection = function() {
			var t, i, e, s, o = this;
			return t = o.touchObject.startX - o.touchObject.curX, i = o.touchObject.startY - o.touchObject.curY, e = Math.atan2(
					i, t), (s = Math.round(180 * e / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? !1 === o.options.rtl ?
				"left" : "right" : s <= 360 && s >= 315 ? !1 === o.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 ===
				o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? s >= 35 && s <= 135 ? "left" : "right" :
				"vertical"
		}, i.prototype.swipeEnd = function(t) {
			var i, e = this;
			if (e.dragging = !1, e.shouldClick = !(e.touchObject.swipeLength > 10), void 0 === e.touchObject.curX) return !1;
			if (!0 === e.touchObject.edgeHit && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >=
				e.touchObject.minSwipe) switch (e.swipeDirection()) {
				case "left":
					i = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(),
						e.slideHandler(i), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
					break;
				case "right":
					i = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(),
						e.slideHandler(i), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
			} else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
		}, i.prototype.swipeHandler = function(t) {
			var i = this;
			if (!(!1 === i.options.swipe || "ontouchend" in document && !1 === i.options.swipe || !1 === i.options.draggable &&
					-1 !== t.type.indexOf("mouse"))) switch (i.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent
				.touches ? t.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold,
				!0 === i.options.verticalSwiping && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), t.data.action
			) {
				case "start":
					i.swipeStart(t);
					break;
				case "move":
					i.swipeMove(t);
					break;
				case "end":
					i.swipeEnd(t)
			}
		}, i.prototype.swipeMove = function(t) {
			var i, e, s, o, n, r = this;
			return n = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || n && 1 !== n.length) && (
				i = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX, r.touchObject.curY =
				void 0 !== n ? n[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX -
					r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(
					Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), "vertical" !== (e = r.swipeDirection()) ? (void 0 !==
					t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (
						r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY >
						r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite &&
					(0 === r.currentSlide && "right" === e || r.currentSlide >= r.getDotCount() && "left" === e) && (s = r.touchObject
						.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft =
					i + s * o : r.swipeLeft = i + s * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft =
						i + s * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null,
						!1) : void r.setCSS(r.swipeLeft))) : void 0)
		}, i.prototype.swipeStart = function(t) {
			var i, e = this;
			if (1 !== e.touchObject.fingerCount || e.slideCount <= e.options.slidesToShow) return e.touchObject = {}, !1;
			void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (i = t.originalEvent.touches[0]), e.touchObject
				.startX = e.touchObject.curX = void 0 !== i ? i.pageX : t.clientX, e.touchObject.startY = e.touchObject.curY =
				void 0 !== i ? i.pageY : t.clientY, e.dragging = !0
		}, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
			var t = this;
			null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(
				t.$slideTrack), t.reinit())
		}, i.prototype.unload = function() {
			var i = this;
			t(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) &&
				i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass(
					"slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, i.prototype.unslick = function(t) {
			this.$slider.trigger("unslick", [this, t]), this.destroy()
		}, i.prototype.updateArrows = function() {
			var t = this;
			Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options
				.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass(
						"slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass(
						"slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr(
						"aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ?
					(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass(
						"slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode &&
					(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass(
						"slick-disabled").attr("aria-disabled", "false")))
		}, i.prototype.updateDots = function() {
			var t = this;
			null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li")
				.eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")
			)
		}, i.prototype.visibility = function() {
			var t = this;
			document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : !0 === t.options.autoplay && (t.paused = !1, t.autoPlay())
		}, i.prototype.initADA = function() {
			var i = this;
			i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), i.$slideTrack.attr("role", "listbox"), i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
				t(this).attr({
					role: "option",
					"aria-describedby": "slick-slide" + i.instanceUid + e
				})
			}), null !== i.$dots && i.$dots.attr("role", "tablist").find("li").each(function(e) {
				t(this).attr({
					role: "presentation",
					"aria-selected": "false",
					"aria-controls": "navigation" + i.instanceUid + e,
					id: "slick-slide" + i.instanceUid + e
				})
			}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr(
				"role", "toolbar"), i.activateADA()
		}, i.prototype.activateADA = function() {
			var t = this.$slider.find("*").is(":focus");
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false",
				tabindex: "0"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			}), t && this.$slideTrack.find(".slick-active").focus()
		}, i.prototype.focusHandler = function() {
			var i = this;
			i.$slider.on("focus.slick blur.slick", "*", function(e) {
				e.stopImmediatePropagation();
				var s = t(this);
				setTimeout(function() {
					i.isPlay && (s.is(":focus") ? (i.autoPlayClear(), i.paused = !0) : (i.paused = !1, i.autoPlay()))
				}, 0)
			})
		}, t.fn.slick = function() {
			for (var t, e = this, s = arguments[0], o = Array.prototype.slice.call(arguments, 1), n = e.length, r = 0; r < n; r++)
				if ("object" == typeof s || void 0 === s ? e[r].slick = new i(e[r], s) : t = e[r].slick[s].apply(e[r].slick, o),
					void 0 !== t) return t;
			return e
		}
	});

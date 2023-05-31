jQuery(document).ready(function($){

	//Remove no-js class
	$('html').removeClass('no-js');
	//Remove no-js class
	
	//Responsive
	$(".post").fitVids();
	$('header.header nav.main a.mobile_menu').click(function(){
		$('header.header nav.main').toggleClass('show');
	});
	//Responsive

	//Tabs & Toggle
	$('.tabs nav a:nth-child(1)').addClass('active');
	$('.tabs nav br').remove();
	$('.tabs nav a').click(function(){
		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
		$(this).parent().parent().find('section').hide().end().find('section:eq('+$(this).index()+')').show();
		return false;
	});
	
	$('.toggle a.tab_title').click(function(){
		$(this).parent().find('a.tab_title').removeClass('active');
		$(this).addClass('active');
		$(this).parent().parent().find('section').hide();
		$(this).parents('.toggle').find('section:eq('+$(this).parent().index()+')').show();
		return false;
	});
	//Tabs & Toggle
	
	//Add has_submenu class to menu parent
	$('ul.sub-menu').parent().addClass('has_submenu');
		
	//Audio Player
	if ($('audio').length) {
		$('audio').mediaelementplayer({
			audioWidth: '100%'
		});
	}
	
	//List shortcode
	$('.list_icon').each(function(){
		var icon = $(this).data('icon');
		$(this).find('li').addClass(icon);
	});
	//List shortcode	
	
	//Fancybox
	if ($('#fancybox-tmp').length) {
		var select = $('a[href$=".bmp"],a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".BMP"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"],a[rel="fancybox"]');
		select.attr('rel', 'fancybox');
		
		select.fancybox();
		
		$('.wedding_gallery ul.album,.post.gallery-item').each(function(){
			var id = $(this).attr('id');
			$(this).find('a[rel="fancybox"]').attr('rel',id);
		});
		
		$('a[rel="fancybox-iframe"]').fancybox({type:'iframe'});
	}
	//Fancybox
	
	//Slideshow
	$('.weddingSlider').each(function(){
		var autoplay = $(this).data('autoplay');
		var autoplay_delay = $(this).data('autoplaydelay');
	
		var automatic = false;
		if (autoplay) automatic = true;
				
		$(this).layerSlider({
			skin:'wedding',
			thumbnailNavigation:'disabled',
			showCircleTimer:false,
			skinsPath: slider_skin.path,
			sublayerContainer: 960,
			responsiveUnder:980,
			autoStart: automatic,
			slideDelay: autoplay_delay
		});		

	});
	//Slideshow
	
	//Gallery
	if( $('.album.scrollable').length){
		$('.album.scrollable').each(function(){
			$(this).elastislide();
		});
	}
	//Gallery
	
	//Page Scroll Animation
	$('.page-template-page-templatessingle-page-php header.header nav.main ul').onePageNav({
		scrollOffset: 500,
	    begin: function() {
	       $('header.header nav.main').removeClass('show');
	    }
	});
	
	//$('.page-template-page-templatessingle-page-php header.header nav.main li').removeClass('current-menu-item current_page_item');
	//$('.page-template-page-templatessingle-page-php header.header nav.main li:first').addClass('current');
	
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	        $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-50
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	//Page Scroll Animation
	
	//Fixed menu
	var header_height = $('header.header .content').height()+250;
	
	$(document).scroll(function(){
		if ($(document).scrollTop() >= header_height) {
			$('body.home').addClass('fixed_menu');
		} else {
			$('body.home').removeClass('fixed_menu');
		}
		
		if ($(document).scrollTop() >= header_height) {
			$('body.home').addClass('show_menu');
		} else {
			$('body.home').removeClass('show_menu');
		}
	});
	//Fixed menu

});

/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
(function(a){a.fn.fitVids=function(b){var c={customSelector:null};var e=document.createElement("div"),d=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];e.className="fit-vids-style";e.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";d.parentNode.insertBefore(e,d);if(b){a.extend(c,b)}return this.each(function(){var f=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];if(c.customSelector){f.push(c.customSelector)}var g=a(this).find(f.join(","));g.each(function(){var l=a(this);if(this.tagName.toLowerCase()==="embed"&&l.parent("object").length||l.parent(".fluid-width-video-wrapper").length){return}var h=(this.tagName.toLowerCase()==="object"||(l.attr("height")&&!isNaN(parseInt(l.attr("height"),10))))?parseInt(l.attr("height"),10):l.height(),i=!isNaN(parseInt(l.attr("width"),10))?parseInt(l.attr("width"),10):l.width(),j=h/i;if(!l.attr("id")){var k="fitvid"+Math.floor(Math.random()*999999);l.attr("id",k)}l.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",(j*100)+"%");l.removeAttr("height").removeAttr("width")})})}})(jQuery);
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/ico" href='<?php echo $link_address;?>images/icon/fleurdelis_96.ico' />
<title>Lauren &amp; Edward</title>
<!--[if lt IE 9]>
<link href="<?php echo $link_address;?>includes/themes/css/ie.css" rel="stylesheet" />
<![endif]-->
<link rel='stylesheet' id='wedding-style-css'  href='<?php echo $link_address;?>includes/themes/style.css' type='text/css' media='all' />
<link rel='stylesheet' id='body-style-css'  href='<?php echo $link_address;?>includes/themes/body.css' type='text/css' media='all' />
<link rel='stylesheet' id='fancybox-css-css'  href='<?php echo $link_address;?>includes/themes/js/fancybox/source/jquery.fancybox.css' type='text/css' media='all' />
<link rel='stylesheet' id='slider-css-css'  href='<?php echo $link_address;?>includes/themes/js/slider/layerslider.css' type='text/css' media='all' />
<link rel="stylesheet" type="text/css" href="<?php echo $link_address;?>includes/themes/js/fancybox/source/jquery.fancybox.css?v=2.1.5" media="screen" />
<link rel="stylesheet" type="text/css" href="<?php echo $link_address;?>includes/themes/js/fancybox/source/helpers/jquery.fancybox-buttons.css?v=1.0.5" />
<link rel="stylesheet" type="text/css" href="<?php echo $link_address;?>includes/themes/js/fancybox/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" />
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/html5.js'></script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/jquery/jquery.js'></script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/scripts.js'></script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/jquery/jquery-migrate.min.js'></script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/jquery/jquery.nav.js'></script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/jquery/jquery.elastislide.js'></script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/jquery.form.min.js'></script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/fancybox/source/jquery.fancybox.pack.js'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var slider_skin = {"path":"<?php echo $link_address;?>includes\/themes\/js\/slider\/"};
/* ]]> */
</script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/slider/layerslider.js'></script>
<script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/global.js'></script>
 
<script type="text/javascript" src="<?php echo $link_address;?>includes/themes/js/fancybox/lib/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="<?php echo $link_address;?>includes/themes/js/fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="<?php echo $link_address;?>includes/themes/js/fancybox/source/jquery.fancybox.js?v=2.1.5"></script>
<script type="text/javascript" src="<?php echo $link_address;?>includes/themes/js/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
<script type="text/javascript" src="<?php echo $link_address;?>includes/themes/js/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>
<script type="text/javascript" src="<?php echo $link_address;?>includes/themes/js/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6"></script>

<?php include($root_address.'includes/getImages.php'); ?>
<script type="text/javascript">
$(document).ready(function() 
{
	$('.fancybox').fancybox();
	$("#gallery").click(function() 
	{
		$.fancybox.open([
					<?php 
						$images_dir = $base_image_dir."gallery/";
						$image_files = get_files($images_dir);
						$index = 0;
						foreach($image_files as $index=>$file) {
							echo '{ href : "',$images_dir.$file,'"},';
							$index++;
						}
					?>
				
				], 
				{
					helpers : {
						thumbs : {
							width: 135,
							height: 90
						}
					}
				});
	});
	$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});
});
</script>
<!--
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49569939-1', 'laurenandedward.com');
  ga('send', 'pageview');

</script>
-->
<?php $photo_credit="" ?>
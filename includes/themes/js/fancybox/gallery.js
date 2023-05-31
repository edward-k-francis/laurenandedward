$(document).ready(function() 
{
	$("#fancybox-manual-c").click(function() 
	{
		$.fancybox.open([
					{
						href : '<?php echo $link_address;?>images/gallery/Splitter-111.jpg',
					}, 
					{
						href : '<?php echo $link_address;?>images/gallery/Splitter-118.jpg',
					}, 
					{
						href : '<?php echo $link_address;?>images/gallery/Splitter-158.jpg'
					}, 
					{
						href : '<?php echo $link_address;?>images/gallery/Splitter-159.jpg'
					}, 
					{
						href : '<?php echo $link_address;?>images/gallery/Splitter-184.jpg'
					}, 
					{
						href : '<?php echo $link_address;?>images/gallery/Splitter-190.jpg'
					}, 
					{
						href : '<?php echo $link_address;?>images/gallery/Splitter-206.jpg'
					}
				], 
				{
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
	});
});
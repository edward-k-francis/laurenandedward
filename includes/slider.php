<div class="weddingSlider" style="width: 100%; height: 500px;" data-autoplay="true" data-autoplaydelay="4000">
	<?php 
		$images_dir = $base_image_dir."slider/";
		$image_files = get_files($images_dir);
		$index = 0;
		foreach($image_files as $index=>$file) {
			$index++;
			echo '<div class="ls-layer" style="transition2d: 2;">';
			echo '<img src="',$images_dir.$file,'"class="ls-bg" /></div>';
		}
	?>
</div>
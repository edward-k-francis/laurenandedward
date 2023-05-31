<?php
	function get_files($images_dir,$exts = array('jpg')) {
		$files = array();
		if($handle = opendir($images_dir)) {
			while(false !== ($file = readdir($handle))) {
				$extension = strtolower(get_file_extension($file));
				if($extension && in_array($extension,$exts)) {
					$files[] = $file;
				}
			}
			closedir($handle);
		}
		natsort($files);
		
		return $files;
	}

	/* function:  returns a file's extension */
	function get_file_extension($file_name) {
		return substr(strrchr($file_name,'.'),1);
	}
?>
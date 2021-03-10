/**
 * @package 	WordPress
 * @subpackage 	EcoNature
 * @version 	1.4.1
 * 
 * Editor Styles Wrapper Options Toggles Scripts
 * Created by CMSMasters
 * 
 */


(function ($) { 
	"use strict";
	
	$(document).ready(function () { 
		/* Layout Sidebar Field Load */
		if ($('input[name="cmsms_layout"]:checked').val() !== 'fullwidth') {
			$('body').addClass('enable_sidebar');
		}
		
		/* Page Layout Change */
		$('input[name="cmsms_layout"]').on('change', function () { 
			if ($(this).val() !== 'fullwidth') {
				$('body').addClass('enable_sidebar');
			} else {
				$('body').removeClass('enable_sidebar');
			}
		} );
	} );
} )(jQuery);


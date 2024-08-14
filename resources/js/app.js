import './bootstrap';
//import './checkbox.js';
import './phone-code.js';
import './carousel.js';


//Подключение jQuery
import jQuery from 'jquery';
window.$ = jQuery;

import { Common } from './modules/common.js';

(function($) {
    
	$(document).ready(function() {
        Common(jQuery);	
	});

})(jQuery);
import './bootstrap';
import './phone-code.js';
import './carousel.js';
import './sms.js';
import './validate.js';
import './animate.js'


//Подключение jQuery
import jQuery from 'jquery';
window.$ = jQuery;

import { Common } from './modules/common.js';

(function($) {

	$(document).ready(function() {
        Common(jQuery);
	});

})(jQuery);

import './bootstrap';
import './modules/swiiper-main.js'

//import './phone-code.js';
//import './carousel.js';
//import './sms.js';
//import './validate.js';
//import './animate.js'
import "jquery-mask-plugin";

//Подключение jQuery
import jQuery from 'jquery';
window.$ = jQuery;

import { Common } from './modules/common.js';

(function($) {

	$(document).ready(function() {
        Common(jQuery);
	});

})(jQuery);

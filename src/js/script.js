import * as flsFunctions from './module/functions.js'; // функция для обработки WebP
import './lib/lib.js';
import $ from './lib/lib.js';

window.addEventListener('DOMContentLoaded', () => {

	flsFunctions.isWebp(); // функция для обработки WebP

});



// eslint-disable-next-line no-undef
$('button').on('click', function() {
	$('div').eq(2).toggleClass('active');
});


$('div').click(function() {
	console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));
// console.log($('button').html('Hello'));
// $('button').fadeOut(1800);
$('button').fadeIn(1800);


import * as flsFunctions from './module/functions.js'; // функция для обработки WebP
import './lib/lib.js';
import $ from './lib/lib.js';

window.addEventListener('DOMContentLoaded', () => {

	flsFunctions.isWebp(); // функция для обработки WebP

	// $('#first').on('click', () => {
	// 	$('div').eq(1).fadeToggle(800);
	// });
	// $('[data-count="second"]').on('click', () => {
	// 	$('div').eq(2).fadeToggle(800);
	// });
	// $('button').eq(2).on('click', () => {
	// 	$('.w-500').fadeToggle(800);
	// });

	// $('.wrap').html(`
	// 	<div class="dropdown">
	// 	<button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton1">Dropdown buttons</button>
	// 	<div class="dropdown-menu" data-toggle-id="dropdownMenuButton1">
	// 		<a href="#" class="dropdown-item">Action</a>
	// 		<a href="#" class="dropdown-item">Action #2</a>
	// 		<a href="#" class="dropdown-item">Action #3</a>
	// 	</div>
	// </div>
	// `);
	// $('.dropdown-toggle').dropdown();

	$('#trigger').click(() => $('#trigger').createModal({
		text: {
			title: 'Modal title',
			body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, maxime. Perspiciatis vel maiores facilis ipsa tempore incidunt dolorem dicta velit maxime eum sequi laboriosam omnis veniam, facere pariatur! Labore, vel.'
		},
		btns: {
			count: 3,
			settings: [
				[
					'Close',
					['btn-danger', 'mr-10'],
					true
				],
				[
					'Save changes',
					['btn-success'],
					false,
					() => {
						alert('Done ');
					}
				],
				[
					'Anither button',
					['btn-warning', 'ml-10'],
					false,
					() => {
						alert('Hellow');
					}
				]
			]
		}
	}));
});



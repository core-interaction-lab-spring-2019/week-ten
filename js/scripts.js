$(document).ready(function() {

	$thumbnail = $('.gallery__image');
	$modal = $('.modal');
	$modal_image = $('.modal__image');
	$modal_close = $('.modal-close');
	$next_button = $('.next-button');
	$prev_button = $('.prev-button');

	$thumbnail.click(function() {

		$current_img = $(this);
		img_src = $(this).attr('src');

		$modal_image.attr('src', img_src);
		$modal.addClass('modal--open');

	});

	$modal_close.click(function() {
		$modal.removeClass('modal--open');
		$modal_image.attr('src', '');
	});

	$('.gallery').masonry({
		itemSelector: '.gallery__item'
	});

});
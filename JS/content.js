jQuery(document).ready(function ($) {

	$('.content').click(openContent);
	$('.close').click(closeContent);

	function openContent(){
		$('.content').animate({
			'width':'990px'
		},100,'swing',linkOpenDisappear);
	};

	function closeContent(){
		$('.content').animate({
			'width':'330px'
		},100,'swing',linkOpenAppear());
	};

	function linkOpenAppear(){
		$('.data span').animate({'right':'-100px'});
	};
	function linkOpenDisappear(){
		$('.data span').animate({'right':'0px'});
	};
});

jQuery(document).ready(function ($) {

	$('#tab1').click();
	$('#tab2').click();

	$('.portfolio #image1').hover(function(){changeImg(1);},function(){backImg(1);});
	$('.portfolio #image2').hover(function(){changeImg(2);},function(){backImg(2);});
	$('.portfolio #image3').hover(function(){changeImg(3);},function(){backImg(3);});
	$('.portfolio #image4').hover(function(){changeImg(4);},function(){backImg(4);});

	function changeImg(num){
		$('.portfolio  #image' + num).css('background',"url('./resources/overlay.jpg') 0px 3px");
		//$('.portfolio  #image' + num).('opacity','0.7');
	};
	function backImg(num){
		$('.portfolio  #image' + num).css('background','');
		$('.portfolio  #image' + num).css('opacity','');
	};
});
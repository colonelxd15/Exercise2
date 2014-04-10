jQuery(document).ready(function ($) {
	var counter;
	counter = 1;

	while(counter<=5){
		//$('#item' + counter).css('margin-left', (counter - 1) * 330 + 'px');
		$('#itemcontent' + counter).css('margin-left', counter * 330 + 'px');
		$('.content').css('width', 990 + 'px');
		$('.contents').css('width', 660 + 'px');
		counter++;
	}
});
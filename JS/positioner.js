jQuery(document).ready(function ($) {
	var counter;
	counter = 2;

	while(counter<=5){
		$('#item' + counter).css('margin-left', (counter - 1) * 330 + 'px');
		//$('#itemcontent' + counter).css('margin-left', (counter - 1) * 330 + 'px');
		counter++;
	}
});
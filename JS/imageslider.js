jQuery(document).ready(function ($) {

    var num = 1;
    var counter = 1;

    $('#control_prev').click(function(){
        left();
    });
    $('#control_next').click(function(){
        right();
    });


    while(counter<=5){
        $('#item' + counter).click(openContent(counter));
        $('#link' + counter).click(openContent(counter));
        counter++;
    }
    $('.close').click(closeContent);

    function right()
    {
        $('#holder').animate({'margin-left': '-' + (num * 330) + 'px'}
            ,500
            ,'easeOutExpo'
            ,function(){
            $('#holder .content:first-child').appendTo('#holder');
            $('#holder').css('margin-left','');
        });    
    }
    
    function left()
    {
        $('#holder .content:last-child').prependTo('#holder');
        $('#holder').css('margin-left', '-' + (num * 330) +'px');
        $('#holder').animate({ 'margin-left': ''},500,'easeOutExpo');
    }

    function moveToZero(move){
        var count = 0;

        $('#content' + move).css('margin-left','-' + (move * 990) + 'px');
        while(count < move)
        {
            $('#holder .content:first-child').appendTo('#holder');
            count++;
        }
        console.log(990*move);
        $('#holder').css('margin-left','');
        
    };
    
    function openContent(num){ 
        var counter = 1;
        while(counter <= num)
        $('#holder').animate({'margin-left': '-' + (num * 330) + 'px'}
            ,100
            ,'easeOutExpo'
            ,function(){
            $('#holder .content:first-child').appendTo('#holder');
            $('#holder').css('margin-left','')});

        $('.content').animate({'width':'990px'},100,'easeOutExpo',linkOpenAppear); 

    }

    function closeContent(){
        $('.content').animate({'width':'330px'},100,'easeOutExpo',linkOpenDisappear);
    };
    function linkOpenAppear(){
        $('.data span').animate({'right':'-100px'});
        $('.data span').css({'right':'-100px'});
        num = 3;
    };

    function linkOpenDisappear(){
        $('.data span').animate({'right':'0px'});
        $('.data span').css({'right':'0px'});
        num = 1;
    };

});
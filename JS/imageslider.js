jQuery(document).ready(function ($) {

    var num = 1;
    var counter = 1;
    
    $('#control_prev').click(left);
    $('#control_next').click(right);
  
    $('#link1').on('click',function(){
        openContent();
        content(1);
    });
    $('#link2').on('click',function(){
        openContent();
        content(2);
    });
    $('#link3').on('click',function(){
        openContent();
        content(3);
    });
    $('#link4').on('click',function(){
        openContent();
        content(4);
    });
    $('#link5').on('click',function(){
        openContent();
        content(5);
    });
    
    $('.close').click(function(){
        contents();
        closeContent();
    });
   
    function right(){ 
        $('#holder').animate(
            {'margin-left': '-' + (num * 330) + 'px'} 
            ,500
            ,'easeOutExpo'
            ,function(){ 
                $('#holder .content:first-child').appendTo('#holder'); 
                $('#holder').css('margin-left',''); 
            }
        ); 
    };
    
    function left() {
        $('#holder .content:last-child').prependTo('#holder'); 
        $('#holder')
            .css('margin-left', '-' + (num * 330) +'px')
            .animate({ 'margin-left': ''},500,'easeOutExpo'); 
    }; 
    
    function openContent(){ 
        $('.content').animate(
            {'width':'990px','display':'block'} 
            ,300 
            ,'easeOutExpo'
            ,linkOpenAppear());
    };

    function closeContent(){ 
        $('.content').animate({'width':'330px'}
            ,100
            ,'easeOutExpo'
            ,linkOpenDisappear()); 
    };

    function linkOpenAppear(){ 
        $('.data span').animate({'right':'-100px'}
            ,200
            ,'easeOutExpo');
             num = 3; 
    };

    function linkOpenDisappear(){ 
        $('.data span').animate({'right':'0px'} ,200,'easeOutExpo') 
            .css({'right':'0px'}); 
        num = 1; 
    };    
    
    function content(i)
    {
        var index = 1;  
    
        while(index <= 5)
        {
            if(index != i)
            {
                $('#content' + index).css('display','none');
            }
            else
            {
               $('#content' + index).css('display','block');
            }
        while($('#content' + index) != $('#holder')
            index++;
        }
    }
    
    function contents()
    {
        var index = 1;  
        while(index <= 5)
        {
            $('#content' + index).css('display','block');
            index++;
        }
    }
});
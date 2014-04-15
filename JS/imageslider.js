jQuery(document).ready(function ($) {

    var num = 1;
    var counter = 1;
    var currentBox;
    var position;

    $('#control_prev').on('click',
        function(){
            left();
        }
    );
    $('#control_next').on('click',
        function(){

            right();
        }
    );
  
    $('.data').on('click',function(){
        currentBox = $(this).parents(".content");
        position = $(this).parents(".content").index();
        $('.content').not(currentBox).css('display','none');
        toFirstChild();
        openContent();
    });
   

    
    $('.close').on('click', function(){
        $('.content').css('display','block');
        toPreviosPos();
        closeContent();
    });
    
    function toFirstChild(){
        var x = 0;

        while(x<=(position - 1))
        {
            $('#holder .content:first-child').appendTo('#holder'); 
            x++;
        }
    };

    function toPreviosPos(){
        var x = 0;

        while(x<=(position - 1))
        {
            $('#holder .content:last-child').prependTo('#holder'); 
            x++;
        }
    };
    function right(){
        
        $('.content').css('display','block');

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
        $('#holder').css('margin-left', '-' + (num * 330) +'px')
        $(currentBox).prev().css('display','block');
        $('#holder').animate({ 'margin-left': ''},500,'easeOutExpo'); 
        currentBox = $(currentBox).prev();
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


});
    /*
    function getChildPosition()
    {
        var index;
        index = 0;
        while(index<=2)
        {
            if(currentBox === ($('#holder > .content').eq(index)))
            {
                $('#holder .content:first-child').appendTo('#holder'); 
            }
            index++;
        }

    }
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
            index++;
        }
    }*/
    

/*function contents()
    {
        var index = 1;  
        while(index <= 5)
        {
            $('#content' + index).css('display','block');
            index++;
        }
    }
    function back(){
        if(position == "first")
        {

        }
        else if(position == "second")
        {
            $('#holder .content:last-child').prependTo('#holder');
        }
        else if(position == "third")
        {
            $('#holder .content:last-child').prependTo('#holder'); 
            $('#holder .content:last-child').prependTo('#holder');
        }
    }*/
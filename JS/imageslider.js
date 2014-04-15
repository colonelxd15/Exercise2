jQuery(document).ready(function ($) {

    var num = 1;
    var counter = 1;
    var position;

    $('#control_prev').click(left);
    $('#control_next').click(right);
  
    $('#link1').on('click',function(){
        getChildPosition("content1");
        openContent();
        content(1);
        contents();
    });
    $('#link2').on('click',function(){
        getChildPosition("content2");
        openContent();
        content(2);
        contents();
    });
    $('#link3').on('click',function(){
        getChildPosition("content3");
        openContent();
        content(3);
        contents();
    });
    $('#link4').on('click',function(){
        getChildPosition("content4");
        openContent();
        content(4);
        contents();
    });
    $('#link5').on('click',function(){
        getChildPosition("content5");
        openContent();
        content(5);
        contents();
    });
    
    $('.close').click(function(){
        contents();
        back();
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
            index++;
        }
    }
    
    function getChildPosition(handler){
        console.log(handler);
        console.log("--------");
        console.log($('#holder .content').get(0).id);
        console.log($('#holder .content').get(1).id);
        console.log($('#holder .content').get(2).id);

        if(handler === ($('#holder .content').get(0).id))
        {
            position = "first";       
        }
        else if(handler === ($('#holder > .content').get(1).id)){

            $('#holder .content:first-child').appendTo('#holder'); 
            position = "second";
        }
        else if(handler === ($('#holder > .content').get(2).id)){
            $('#holder .content:first-child').appendTo('#holder'); 
            $('#holder .content:first-child').appendTo('#holder'); 
            position = "third";
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
    }
});
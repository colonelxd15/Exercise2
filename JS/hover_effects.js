jQuery(document).ready(function ($) {
    
    //var num;

    $('#link1').hover(function(){hoverIn(1)},function(){hoverOut(1)});
    $('#link2').hover(function(){hoverIn(2)},function(){hoverOut(2)});
    $('#link3').hover(function(){hoverIn(3)},function(){hoverOut(3)});
    $('#link4').hover(function(){hoverIn(4)},function(){hoverOut(4)});
    $('#link5').hover(function(){hoverIn(5)},function(){hoverOut(5)});


    function hoverIn(num){
        $('#link' + num).animate({'margin-top':'260px'
        ,'height': '180px'}
        ,10
        ,"linear"
        ,linkExpand(num));    
    }

    function hoverOut(num)
    {
        $('#link' + num).animate({'margin-top':'280px'
            ,'height':'160px'}
            ,10
            ,"linear",linkBack(num));    
    }
    function linkExpand(num){
        $('#link' + num + ' span').animate({'width': '80px'},10);
    }

    function linkBack(num){
        $('#link' + num + ' span').animate({'width': '50px'},10);
    }
});
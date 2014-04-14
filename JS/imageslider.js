jQuery(document).ready(function ($) {

    var num = 1;
    var counter = 1;
    var element = new Array();
    var clickedElem = 0;

    $('#control_prev').click(function(){ left(); });
    $('#control_next').click(function(){ right(); });

    $('#link1').click(openContent);
    $('#link2').click(openContent);
    $('#link3').click(openContent);
    $('#link4').click(openContent);
    $('#link5').click(openContent);

    $('.close').click(closeContent);

    function right(){ $('#holder').animate({'margin-left': '-' + (num * 330) + 'px'} ,500,'easeOutExpo' ,function(){ $('#holder .content:first-child').appendTo('#holder'); $('#holder').css('margin-left',''); }); };
    function left() { $('#holder .content:last-child').prependTo('#holder'); $('#holder').css('margin-left', '-' + (num * 330) +'px'); $('#holder').animate({ 'margin-left': ''},500,'easeOutExpo'); };
    function openContent(){ $('.content').animate({'width':'990px'} ,300 ,'easeOutExpo',linkOpenAppear()); };
    function closeContent(){ $('.content').animate({'width':'330px'},100,'easeOutExpo',linkOpenDisappear()); };
    function linkOpenAppear(){ $('.data span').animate({'right':'-100px'},200,'easeOutExpo'); num = 3; };
    function linkOpenDisappear(){ $('.data span').animate({'right':'0px'},200,'easeOutExpo'); $('.data span').css({'right':'0px'}); num = 1; };
});
jQuery(document).ready(function ($) {

    $('#control_prev').click(function(){
        left();
    });
    $('#control_next').click(function(){
        right();
    });


    function right()
    {
        $('#holder').animate({'margin-left': '-330px'}
            ,100
            ,'swing'
            ,function(){
            $('#holder .content:first-child').appendTo('#holder');
            $('#holder').css('margin-left','');
        });    
    }
    
    function left()
    {
        $('#holder .content:last-child').prependTo('#holder');
        $('#holder').css('margin-left', '-330px');
        $('#holder').animate({ 'margin-left': ''},100);
    }



    function openContent(){
        $('.contents').animate({
            'width':'600px', 'z-index':'1'
     
        },100,'swing',linkOpenDisappear);
    };

    function closeContent(){
        $('.contents').animate({
            'width':'0px'
            , 'z-index':'-1'
        },100,'swing',linkOpenAppear);
    };

    function linkOpenAppear(){
        $('.data span').animate({'right':'-100px'});
    };
    function linkOpenDisappear(){
        $('.data span').animate({'right':'0px'});
    };

});

/*
<ul id="holder">
            <li>
                <div id="item1" class="imagepreview">
                    <div id="link1" class="data">
                                    <h3>About Me</h3>
                                    <h4> Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum.</h4>
                                    <span>Open</span>
                            </div>
                    </div>
            </li>
            <li>
                    <div id="item2" class="imagepreview">
                            <div id="link2" class="data">
                                <h3>Portfolio</h3>
                                    <h4> Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in.</h4>
                                    <span>Open</span>
                            </div>
                    </div>
            </li>
            <li>
                    <div id="item3" class="imagepreview">
                            <div id="link3" class="data">
                                    <h3>Social</h3>
                                    <h4> Cras mattis consectetur purus sit amet fermentum. Sed posuere.</h4>
                                    <span>Open</span>
                            </div>
                    </div>
            </li>
            <li>
                    <div id="item4" class="imagepreview">
                            <div id="link4" class="data">
                                <h3>Contact</h3>
                                    <h4> Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit.</h4>
                                    <span>Open</span>
                            </div>
                    </div>
            </li>
            <li>
                    <div id="item5"  class="imagepreview">
                            <div id="link5" class="data">
                                <h3>Full Width Page</h3>
                                    <h4> 
                                        Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida.
                                    </h4>
                                    <span>Open</span>
                            </div>
                    </div>
            </li>
            </ul>
 */
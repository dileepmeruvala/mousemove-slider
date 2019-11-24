$(document).ready(function(){
    $(".overflow").on('mousemove', function( event ) {
        
        var mouseX = 0;
        var mouseY = 0;
        var menuWidth = $(".overflow ul").width();
        mouseX = event.clientX || event.pageX;
        mouseY = event.clientY || event.pageY;
        
        var Translate = mouseX * 100 / menuWidth;
        
        
        $('.overflow .dot').css({
            'left': mouseX,
            'top': mouseY
        });

        $('.overflow ul').css({
            '-webkit-transform':'translateX(-'+Translate+'%)',
            '-moz-transform':'translateX(-'+Translate+'%)',
            'transform':'translateX(-'+Translate+'%)'
        });

    });

    var imgSrc = $('.menu-item a');
    
    console.log(imgSrc);
    var data = [];
    $.each( imgSrc, function( key, val ) {
        
        return data[key] = val.attributes.data_src.value;
    });
    console.log(data);
    

    imgSrc.mouseover(function(){
        console.log(this.attributes.data_src.value);
        var section = $('.animation-section');
        var path = `../${this.attributes.data_src.value}`
        console.log(section);
        section.css({
            'background-image': 'url(\'' + path + '\')',
        });
    })
});
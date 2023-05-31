var resize = function(){
    var tallestHeight = 0;

    $('.info-box').each(function() {
        var height = $(this).height();
        if($(this).find('.location').length > 0)
        {
            height = height + 1.25;        
        }
        tallestHeight = (tallestHeight < height) ? (height) : (tallestHeight);
    });

    $('.info-box').each(function() {
        $(this).height(tallestHeight);
    });
};

var resetHeight = function(){
    var $el;
    $('.info-box').each(function() {
        $el = $(this);
        $el.height("");
    });
};

$('.info-img').load(function(){
    $('.info-box').each(resetHeight);
    $('.info-box').each(resize);
});

/*
$(document).ready(function(){
    $('.info-box').each(resetHeight);
    $('.info-box').each(resize);
});
*/
$(window).load(function(){
    $('.info-box').each(resetHeight);
    $('.info-box').each(resize);
});

$(window).resize(function() {
    $('.info-box').each(resetHeight);
    $('.info-box').each(resize);
});

$(document).on("click", "#boardpage", function(){
    console.log('board');
    if($('#board').hasClass('open')){
        $('#board').removeClass('open');
        $('#main, #shop').addClass("open");
    }
    else{
        $('#main, #shop').removeClass('open');
        $('#board').addClass("open");
    }
});

$(document).on("click", "#mainpage", function(){
    console.log('main');
    if($('#main').hasClass('open')){
        $('#main').removeClass('open');
        $('#board, #shop').addClass("open");
    }
    else{
        $('#board, #shop').removeClass('open');
        $('#main').addClass("open");
    }
});

$(document).on("click", "#shoppage", function(){
    console.log('shop');
    if($('#shop').hasClass('open')){
        $('#shop').removeClass('open');
        $('#main, #board').addClass("open");
    }
    else{
        $('#main, #board').removeClass('open');
        $('#shop').addClass("open");
    }
});
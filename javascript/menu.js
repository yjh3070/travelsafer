$('#menuBtn').click(function(){
    if($('ul a').hasClass('open')){
        setTimeout(() => {
            $('ul a').removeClass('open');
        }, 200);
        $('html,#menu, #menuBtn').removeClass('open');
    }
    else{
        $('ul a,html').addClass("open");
        $('#menu').addClass("open");
        $('#menuBtn').addClass("open");
    }
});
$('#menuBtn').click(function(){
    if($('.menuli,button').hasClass('open')){
        setTimeout(() => {
            $('.menuli,button').removeClass('open');
        }, 200);
        $('html,.menubar, #menuBtn').removeClass('open');
    }
    else{
        $('.menuli,html,button').addClass("open");
        $('.menubar').addClass("open");
        $('#menuBtn').addClass("open");
    }
});
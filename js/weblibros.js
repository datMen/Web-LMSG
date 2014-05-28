var clicked = false;
$(".libro-box").click(function() {
    id = $(this).attr('id');
    if (!clicked) {
        $( ".libro-box" ).filter("#"+id).finish();
        $( ".libro-box" ).filter("#"+id).animate({
            width: $( ".libro-head" ).filter("#"+id).width()+($( ".libro-img" ).filter("#"+id).width()*2)
        }, 200, function() {
            $( ".libro-head" ).filter("#"+id).fadeIn( "slow" , 0, function() {});
        });
        clicked = true;
    }
}).mouseleave(function() {
    id = $(this).attr('id');
    if (clicked) {
        $( ".libro-box" ).filter("#"+id).finish();
        $( ".libro-head" ).filter("#"+id).css("display", "none");
        $( ".libro-box" ).filter("#"+id).animate({
            width:  $( ".libro-img" ).filter("#"+id).width()
        }, 200);
        clicked = false;
    }
});
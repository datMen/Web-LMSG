var clicked = false;
$(".libro-box").click(function() {
    if (!clicked) {
        id = $(this).attr('id');
        $( ".libro-box" ).filter("#"+id).finish();
        $( ".libro-box" ).filter("#"+id).animate({
            width: $( ".libro-box" ).filter("#"+id).width()+300
        }, 200, function() {
            $( ".libro-head" ).filter("#"+id).fadeIn( "slow" , 0, function() {});
        }); 
        clicked = true
    }
}).mouseleave(function() {
    if (clicked) {
        id = $(this).attr('id');
        $( ".libro-box" ).filter("#"+id).finish();
        $( ".libro-head" ).filter("#"+id).css("display", "none");
        $( ".libro-box" ).filter("#"+id).animate({
            width: $( ".libro-box" ).filter("#"+id).width()-300
        }, 200, function() {
        }); 
        clicked = false
    }
});
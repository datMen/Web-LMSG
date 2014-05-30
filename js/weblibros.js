$(".likes").click(function(e) {
    e.stopPropagation();
    $( ".likes" ).filter("#"+id).text(parseInt($( ".likes" ).filter("#"+id).text())+1);
    $( ".likes" ).filter("#"+id).css("opacity", "1");
});

$(".libro-box").click(function() {
    id = $(this).attr('id');
    if ($( ".libro-head" ).filter("#"+id).css("display") == "none") {
        $( ".libro-box" ).filter("#"+id).finish();
        $( ".libro-box" ).filter("#"+id).animate({
            width: $( ".libro-head" ).filter("#"+id).width()+($( ".libro-img" ).filter("#"+id).width()*2)
        }, 200, function() {
            $( ".libro-head" ).filter("#"+id).fadeIn( "slow" , 0, function() {});
        });
    }
    else if ($( ".libro-head" ).filter("#"+id).css("display") == "block") {
        $( ".libro-box" ).filter("#"+id).finish();
        $( ".libro-head" ).filter("#"+id).css("display", "none");
        $( ".libro-box" ).filter("#"+id).animate({
            width:  $( ".libro-img" ).filter("#"+id).width()
        }, 200);
    }
});
$(".likes").click(function(e) {
    e.stopPropagation();
    $(this).text(parseInt($(this).text())+1);
    $(this).css("opacity", "1");
});

$(".libro-box").click(function() {
    id = $(this).attr('id');
    if ($( ".libro-head" ).filter("#"+id).css("display") == "none") {
        $(this).finish();
        $(this).animate({
            width: $( ".libro-head" ).filter("#"+id).width()+($( ".libro-img" ).filter("#"+id).width()*2)
        }, 200, function() {
            $( ".libro-head" ).filter("#"+id).fadeIn( "slow" , 0, function() {});
        });
    }
    else if ($( ".libro-head" ).filter("#"+id).css("display") == "block") {
        $(this).finish();
        $( ".libro-head" ).filter("#"+id).css("display", "none");
        $(this).animate({
            width:  $( ".libro-img" ).filter("#"+id).width()
        }, 200);
    }
});
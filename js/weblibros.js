$(".libro-img").mouseover(function() {
  id = $(this).attr('id');
  $( ".libro-head" ).css("visibility", "visible");
}).mouseleave(function() {
  id = $(this).attr('id');
  $( ".libro-head" ).css("visibility", "hidden");
});
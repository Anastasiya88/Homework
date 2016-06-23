$(function(){
  $( '.dropdown' ).mouseenter(function () {
    $(this).children('.sub-menu').slideDown(500).animate({ fontSize: "14px", paddingLeft: "20px", backgroundColor: "#9E9E9E", opacity: 0.95 }, 400 );
  });
  $( '.dropdown' ).mouseleave(function () {
    $(this).children('.sub-menu').slideUp(500).animate({ fontSize: "10px", paddingLeft: "10px", backgroundColor: "#E2B9B6", opacity: 0.35 }, 400 );
  });
});

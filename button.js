$(document).mousemove(function(event){
  $(".button-3D").each(function(index, element){
      var xPos = (event.clientX/$(window).width())-0.1,
         yPos = (event.clientY/$(window).height())-0.7,
         box = element;

    TweenLite.to(box, 0.6, {
      rotationY: xPos * 100, 
      rotationX: -yPos * 100,
      ease: Power4.easeOut,
    });
    
  })  
});
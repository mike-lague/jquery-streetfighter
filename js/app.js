$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    // console.log('mouse entered .ryu div'); 
    switchImage('.ryu-ready');
  })
  .mouseleave(function() {
    switchImage('.ryu-still');
  })
  .mousedown(function() {
    // console.log('mousedown');
    // play hadouken sound
    playHadouken();
    // reveal throwing ryu
    switchImage('.ryu-throwing');
    // animate haduoken to the right of the screen
    $('.hadouken').finish().show().animate(
  		{'left': '1020px'},
 		500,
  		function() {
    		$(this).hide();
    		$(this).css('left', '520px');
  		}
	);
   
  })
  .mouseup(function() {
    // console.log('mouseup');
    // ryu goes back to his ready position
    switchImage('.ryu-ready');
  });
  $(document).keydown(function(event) {
  	if (event.which == 88) {
  		console.log('x is pressed');
  		switchImage('.ryu-cool');
  	}
  })
  .keyup(function(event) {
  	if (event.which == 88) {
  		console.log('x is let go'); 
  		switchImage('.ryu-still');
  	}
  });
});
 
var currimage = '.ryu-still';
function switchImage (newimage) {
	$(currimage).hide();
	$(newimage).show();
	currimage = newimage;
}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

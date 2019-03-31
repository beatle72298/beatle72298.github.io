$(document).ready(function(){
    var nav = $('.navbar').offset().top;
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > nav - 100) {
	    $("#header-bar").addClass("changeColor");
	  }

	  else{
		  $("#header-bar").removeClass("changeColor");  	
	  }
  })
})
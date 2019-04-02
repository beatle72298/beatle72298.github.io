$(document).ready(function(){
    var nav = $('.navbar').offset().top;
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > nav - 100) {
	    $("#header-bar").addClass("changeColor");
        $("#header-bar").css("padding", "0")
	  }

	  else{
		  $("#header-bar").removeClass("changeColor");
          $("#header-bar").css("padding", "1.5rem 2rem");
	  }
  })
})
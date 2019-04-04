$(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('.navbar').offset().top;
    
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop - 100){ 
			        $('.navbar').addClass('sticky');
                    $("#header-bar").addClass("changeColor");
                    $("#header-bar").css("padding", "0");
			    } else {
			        $('.navbar').removeClass('sticky');
                    $("#header-bar").removeClass("changeColor");
                    $("#header-bar").css("padding", "1.5rem 2rem");
			    }
			};
			stickyNav();
			// and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    })    
})


/*---------------LIGHTBOX--------------------*/
$(document).ready(function() {
// Get the modal
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
    }
}
});
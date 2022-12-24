$(document).ready(function () {
    $(".preloader").addClass("hidepreloader");
});


$(".smooth-scroll").on('click', function (event) {

    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});

$( document ).ready(function() {
})
 
$(".logo_div").click(function() {
    window.location.href= 'basic1.html';
});

$(function() { 
            Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');
            Galleria.run('.galleria');
        }());
        
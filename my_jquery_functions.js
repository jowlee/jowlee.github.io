
$(document).ready(function(){

    // Will toggle the next to display 
    $('.toggle-more').click(function () {
        $(this).closest(".toggle-more").next().toggle("100000");
    });

});
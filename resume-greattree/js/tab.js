$(document).ready(function () {
    $(".tab").click(function () {
        var target = $(this).data("target");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".case").removeClass("active");
        $("." + target).addClass("active");
    });
});
$(document).ready(function () {
    // 開啟 Lightbox（使用 display: flex）
    $(".open-lightbox").click(function () {
        var target = $(this).data("lightbox");
        $("#" + target).css("display", "flex").hide().fadeIn();
    });
    // 點擊關閉按鈕關閉 Lightbox
    $(".lightbox-close").click(function () {
        $(this).closest(".lightbox-overlay").fadeOut(function () {
            $(this).css("display", "none"); // 確保隱藏時回到 display: none
        });
    });
    // 點擊背景區域關閉 Lightbox
    $(".lightbox-overlay").click(function (e) {
        if (e.target === this) {
            $(this).fadeOut(function () {
                $(this).css("display", "none");
            });
        }
    });
});
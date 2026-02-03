$(document).ready(function () {
    function activateTab(target) {
        $(".tab").removeClass("active");
        $('.tab[data-target="' + target + '"]').addClass("active");

        $(".case").removeClass("active");
        $("." + target).addClass("active");

        // 讓頁面滾回頂部
        window.scrollTo(0, 0);
    }

    // 監聽 .tab 點擊事件
    $(".tab").click(function () {
        var target = $(this).data("target");
        activateTab(target);
    });

    // 監聽 .next_btn a 點擊事件
    $(".next_btn a").click(function (e) {
        e.preventDefault(); // 阻止預設行為
        var target = $(this).data("target");
        activateTab(target);
    });
});
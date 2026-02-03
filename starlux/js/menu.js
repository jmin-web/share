$(document).ready(function() {
  // 記錄 nav-container 的初始位置
  var navOffset = $('.nav-placeholder').offset().top;
  // 滾動事件處理
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        // 當滾動超過 nav-container 時
        if (scrollPos > navOffset) {
            $('.nav-container').addClass('fixed');
            $('.nav-placeholder').show(); // 顯示佔位元素
        } else {
            $('.nav-container').removeClass('fixed');
            $('.nav-placeholder').hide(); // 隱藏佔位元素
        }
    });
  // 手機選單切換
  $('.menu-toggle').click(function() {
      $('.main-nav').toggleClass('active');
      $(this).toggleClass('active'); // 切換按鈕顏色
      if ($('.main-nav').hasClass('active')) {
          $(this).text('✕');
      } else {
          $(this).text('☰');
      }
  });
  // 桌面版hover顯示二級選單
  $('.main-nav > li').hover(
      function() {
          if($(window).width() > 1180) {
              $(this).find('.sub-menu').stop(true, true).slideDown(200);
          }
      },
      function() {
          if($(window).width() > 1180) {
              $(this).find('.sub-menu').stop(true, true).slideUp(200);
          }
      }
  );
  // 手機模式下點擊顯示二級選單並切換符號
  $('.main-nav > li > a.has-submenu').click(function(e) {
      if($(window).width() <= 1179) {
          e.preventDefault();
          $(this).toggleClass('active');
          $(this).siblings('.sub-menu').slideToggle(200);
      }
  });
  // 點擊外部關閉選單
  $(document).click(function(e) {
      if($(window).width() <= 1179) {
          if (!$(e.target).closest('.nav-container').length) {
              $('.main-nav,.menu-toggle').removeClass('active');
              $('.menu-toggle').text('☰');
              $('.main-nav > li > a.has-submenu').removeClass('active');
              $('.sub-menu').slideUp(200);
          }
      }
  });
  // 確保sub-menu的點擊事件有效
  $('.sub-menu a').click(function(e) {
      e.stopPropagation();
  });
});
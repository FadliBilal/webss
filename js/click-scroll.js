$(document).ready(function () {
    var sectionArray = [1, 2, 3, 4, 5];
  
    // Highlight active link saat scrolling
    $.each(sectionArray, function (index, value) {
      $(document).on('scroll', function () {
        var offsetSection = $('#section_' + value).offset().top - $('.navbar').height() - 5;
        var docScroll = $(document).scrollTop();
        if (docScroll >= offsetSection) {
          $('.navbar-nav .nav-link').removeClass('active').addClass('inactive');
          $('.navbar-nav .nav-link').eq(index).addClass('active').removeClass('inactive');
        }
      });
  
      // Scroll ke bagian saat link diklik
      $('.click-scroll').eq(index).on('click', function (e) {
        e.preventDefault();
        var offsetClick = $('#section_' + value).offset().top - $('.navbar').height();
        $('html, body').animate({ scrollTop: offsetClick }, 300);
      });
    });
  
    // Atur status awal untuk link pertama
    $('.navbar-nav .nav-link').removeClass('active').addClass('inactive');
    $('.navbar-nav .nav-link').eq(0).addClass('active').removeClass('inactive');
  });
  
(function ($) {
  "use strict";

  // Tutup navbar collapse saat link diklik
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });  

  // Smooth scrolling
  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - $('.navbar').height()
      }, 300);
    }
  });

  // Highlight active link saat scrolling
  $(window).on('scroll', function () {
    var scrollPos = $(document).scrollTop();
    $('.smoothscroll').each(function () {
      var target = $(this.hash);
      if (target.length) {
        var topOffset = target.offset().top - $('.navbar').height() - 5;
        var bottomOffset = topOffset + target.outerHeight();
        if (scrollPos >= topOffset && scrollPos < bottomOffset) {
          $('.smoothscroll').removeClass('active');
          $(this).addClass('active');
        }
      }
    });
  });

})(window.jQuery);

// Modal untuk gambar zoomable
document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".topics-detail-block-image");
  if (image) {
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = '<img src="" alt="Zoomed Image">';
    document.body.appendChild(modal);

    const modalImage = modal.querySelector("img");

    // Buka modal saat gambar diklik
    image.addEventListener("click", function () {
      modalImage.src = image.src;
      modal.classList.add("active");
    });

    // Tutup modal saat overlay diklik
    modal.addEventListener("click", function () {
      modal.classList.remove("active");
    });
  }
});
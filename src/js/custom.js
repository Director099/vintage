'use strict';

// $(function () {
//     $.scrollUp({
//         scrollText: '',
//     });
// });

$('input[type=tel]').mask("+7 (000) 000 00 00");

$(document).ready(function() {
    var windowWidth = $(window).width();
    if(windowWidth < 768) {
      $('.menu__navigation-link--none-xl').click( function(evt) {
        $(evt.target).toggleClass("active")
        $(this).siblings(".menu__navigation-drop").slideToggle("slow");
        return false;
      });
    }
});

// Плавный скол с навигации
function scroll(element) {
  element.click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
}

scroll($(".contact-header__call"))
scroll($(".scroll-down"))
scroll($(".page-header__list-link"))

// Плавный скол с навигации

$(document).on("focus", '.form-doc__input', function(evt){
  if($(this).val() != '') {
    // $(evt.target).val('form-doc__input--active');
  }
  else {
    // $(evt.target).removeClass('form-doc__input--active');
  }
});

$('.gallary').owlCarousel({
  loop: true,
  margin: 30,
  dot: true,
  nav: true,
  responsive:{
    0:{
      items: 1
    },
    600:{
      items: 2
    },
    992:{
      items: 3
    }
  }
})

$(".page-header__btn").hover(function() {
  $("body").css("overflow", "hidden");
  $(".menu").fadeIn();
})

$(".menu__close").on("click", function() {
  $(".menu").fadeOut();
  $("body").css("overflow", "auto");
})

;( function ()
{
  function closest(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
      if (typeof document.body[fn] == 'function') {
        matchesFn = fn;
        return true;
      }
      return false;
    })

    var parent;

    // traverse parents
    while (el) {
      parent = el.parentElement;
      if (parent && parent[matchesFn](selector)) {
        return parent;
      }
      el = parent;
    }

    return null;
  }

  var inputs = document.querySelectorAll( '.field-file__input' );
  Array.prototype.forEach.call( inputs, function( input )
  {
    var label  = closest(input, '.field-file').querySelector( '.field-file__name-text' ),
        labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e ) {
      var fileName = '';
      if( this.files && this.files.length > 1 ) {
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      }
      else {
        fileName = e.target.value.split( '\\' ).pop();
      }

      if( fileName ) {
        label.innerHTML = fileName;
      }
      else {
        label.innerHTML = labelVal;
      }
    });
  });
}());

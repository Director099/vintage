'use strict';

// $(function () {
//     $.scrollUp({
//         scrollText: '',
//     });
// });

$('input[type=tel]').mask("+7 (000) 000 00 00");

// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

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

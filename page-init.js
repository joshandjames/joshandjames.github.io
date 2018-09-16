// Navbar making
(function () {
  var body = document.body.innerHTML;
  var navbarString = '<div class="w3-bar w3-large roboto w3-top init" id="_navbar">' +
    '<div class="navbutton">Home</div>' +
    '<div class="navbutton">Showcase</div>' +
    '<div class="navbutton">Contact</div>' +
    '<div class="navbutton">Order</div>' +
    '<div class="navbutton">Sources</div>' +
  '</div>';
  document.body.innerHTML = navbarString + body;
})();

var scrollReady = false;

$(window).scroll(function () {
  var scroll = $(this).scrollTop();
  var triggerScroll = 20;
  var ele = $('#_navbar');
  if (scroll > triggerScroll) {
    if (ele.hasClass('init')) {
      ele.removeClass('init');
    }
    ele.addClass('go-white');
    ele.removeClass('go-back');
    scrollReady = true;
  } else if (scroll <= triggerScroll && scrollReady) {
    if (ele.hasClass('init')) {
      ele.removeClass('init');
    }
    ele.addClass('go-back');
    ele.removeClass('go-white');
  }
});

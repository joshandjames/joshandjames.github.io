// Navbar making
(function () {
  var body = document.body.innerHTML;
  var navbarString = '<div class="w3-bar w3-large w3-wide tk-bebas w3-top init" id="_navbar">' +
    '<a href="/"><div class="navbutton">Home</div></a>' +
    '<a href="/showcase/"><div class="navbutton">Showcase</div></a>' +
    '<a href="/contact/"><div class="navbutton">Contact</div></a>' +
    '<a href="#" id="orderClick"><div class="navbutton">Order</div></a>' +
    '<a href="/sources/"><div class="navbutton">Sources</div></a>' +
  '</div>';
  document.body.innerHTML = navbarString + body;
  document.getElementById('orderClick').addEventListener('click', function () {
    if (confirm('Warning!\n\nThe order page will take you to a 404 page. This is because GitHub hosting does not support PHP files, which are the filetype of the order form. To view the order form PHP files, visit the following link:\n\nhttps://github.com/joshandjames/joshandjames.github.io/tree/master/order\n\nAre you sure you want to proceed?')) {
      location.replace('/order/');
    }
  });
})();

var scrollReady = false;

$(window).scroll(function () {
  var scroll = $(this).scrollTop();
  var triggerScroll = Math.round($(window).height() * 0.85) - $('#_navbar').height();
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

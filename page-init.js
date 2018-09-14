// Navbar making
(function () {
  var body = document.body.innerHTML;
  var navbarString = '<div class="w3-bar w3-large roboto">' +
    '<div class="navbutton">Home</div>' +
    '<div class="navbutton">Showcase</div>' +
    '<div class="navbutton">Contact</div>' +
    '<div class="navbutton">Order</div>' +
    '<div class="navbutton">Sources</div>' +
  '</div>';
  document.body.innerHTML = navbarString + body;
})();

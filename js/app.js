(function (global, $) {
  $(function () {
    /* Pagefind search */
    if (window.PagefindUI) {
      new PagefindUI({
        element: '#header-navbar-search',
        showSubResults: true,
        translations: {
          placeholder: 'Search...'
        }
      });
    }

    /* page events */
    var $navbar = $('#header-navbar');
    var $navbarMenu = $navbar.find('.navbar-menu');

    $navbar.on('click', '.navbar-burger', function() {
      var $navbarBurger = $(this);
      
      $navbarMenu.toggleClass('is-active');
      $navbarBurger.toggleClass('is-active');
    });
  });
}(window, jQuery));

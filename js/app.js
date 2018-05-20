(function (global, $) {
  $(function () {
    /* algolia search */
    var algoliaClient = algoliasearch('AQN226ZOWS', 'e57b0595befbd779c566b2a6defaf5c2')
    var algoliaIndexName = algoliaClient.initIndex('jekyll_blog');

    $('#header-navbar-search').autocomplete({
      hint: false,
      templates: {
        dropdownMenu: '#algolia-dropdown-menu-template',
        empty: '<div>Nothing here...</div>',
        footer: '<div class="branding">Powered by <img src="https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg" /></div>'
      }
    }, [{
      source: $.fn.autocomplete.sources.hits(algoliaIndexName, {
        hitsPerPage: 5
      }),
      displayKey: 'title',
      templates: {
        suggestion: function (suggestion) {
          return suggestion._highlightResult.title.value;
        }
      }
    }]).on('autocomplete:selected', function (event, suggestion, dataset) {
      window.location.href = suggestion.url;
    });

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
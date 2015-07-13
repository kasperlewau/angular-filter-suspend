(function () {

  'use strict';

  /**
   * Add a 'suspend' parameter to built in angular
   * filter notations.
   *
   * Enables the consumer to halt filtering while performing
   * other operations, and reactivate it at will.
   */
  function config ($provide) {
    var builtInFilters = [
      'currency',  'date',   'json',    'limitTo',
      'lowercase', 'number', 'orderBy', 'uppercase', 'filter'
    ];

    function decorate (filter) {
      $provide.decorator(filter + 'Filter', function ($delegate) {
        var previousState;

        return function (a, b, c, suspend) {
          suspend = suspend || Array.prototype.slice.call(arguments)[$delegate.length];

          if (!!suspend) {
            return previousState || a;
          }

          previousState = $delegate.apply(null, arguments);

          return previousState;
        };
      });
    }

    builtInFilters.forEach(decorate);
  }

  angular
    .module('angular.filter.suspend', [])
    .config(config);

}());

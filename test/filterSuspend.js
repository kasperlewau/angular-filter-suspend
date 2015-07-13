(function () {

  'use strict';

  describe('filter suspension', function () {
    var builtInFilters = [
      'currency',  'date',   'json',    'limitTo',
      'lowercase', 'number', 'orderBy', 'uppercase', 'filter'
    ];

    var filters = {};

    beforeEach(function () {
      module('angular.filter.suspend');

      inject(function ($injector) {
        builtInFilters.forEach(function (f) {
          filters[f] = $injector.get(f + 'Filter');
        });
      });
    });

    context('currency', function () {
      var filter;

      beforeEach(function () {
        filter = filters.currency;
      });

      it('does nothing when ignore:true', function () {
        expect(filter('20', '$', 2, true)).to.eq('20');
      });

      it('works like usual when ignore:false', function () {
        expect(filter('20', '$', 2, false)).to.eq('$20.00');
      });
    });

    context('date', function () {
      var filter;

      beforeEach(function () {
        filter = filters.date;
      });

      it('does nothing when ignore:true', function () {
        expect(filter('1288323623006', 'medium', 'UTC', true)).to.eq('1288323623006');
      });

      it('works like usual when ignore:false', function () {
        expect(filter('1288323623006', 'medium', 'UTC', false)).to.eq('Oct 29, 2010 3:40:23 AM');
      });
    });

    context('json', function () {
      var filter;

      beforeEach(function () {
        filter = filters.json;
      });

      it('does nothing when ignore:true', function () {
        expect(filter({ x: 'y' }, 2, true)).to.eql({ x: 'y' });
      });

      it('works like usual when ignore:false', function () {
        expect(filter({ x: 'y' }, 2, false)).to.eq('{\n  "x": "y"\n}');
      });
    });

    context('limitTo', function () {
      var filter;

      beforeEach(function () {
        filter = filters.limitTo;
      });

      it('does nothing when ignore:true', function () {
        expect(filter(['a','b'], 1, true)).to.eql(['a', 'b']);
      });

      it('works like usual when ignore:false', function () {
        expect(filter(['a','b'], 1, false)).to.eql(['a']);
      });
    });

    context('lowercase', function () {
      var filter;

      beforeEach(function () {
        filter = filters.lowercase;
      });

      it('does nothing when ignore:true', function () {
        expect(filter('ABCDEFG', true)).to.eq('ABCDEFG');
      });

      it('works like usual when ignore:false', function () {
        expect(filter('ABCDEFG', false)).to.eq('abcdefg');
      });
    });

    context('number', function () {
      var filter;

      beforeEach(function () {
        filter = filters.number;
      });

      it('does nothing when ignore:true', function () {
        expect(filter(1000000, 2, true)).to.eq(1000000);
      });

      it('works like usual when ignore:false', function () {
        expect(filter(1000000, 2, false)).to.eq('1,000,000.00');
      });
    });

    context('orderBy', function () {
      var filter;

      beforeEach(function () {
        filter = filters.orderBy;
      });

      it('does nothing when ignore:true', function () {
        expect(filter(['a', 'c', 'b'], null, null, true)).to.eql(['a', 'c', 'b']);
      });

      it('works like usual when ignore:false', function () {
        expect(filter(['a', 'c', 'b'], null, null, false)).to.eql(['a', 'b', 'c']);
      });
    });

    context('uppercase', function () {
      var filter;

      beforeEach(function () {
        filter = filters.uppercase;
      });

      it('does nothing when ignore:true', function () {
        expect(filter('abcdefg', true)).to.eq('abcdefg');
      });

      it('works like usual when ignore:false', function () {
        expect(filter('abcdefg', false)).to.eq('ABCDEFG');
      });
    });

    context('filter', function () {
      var filter;

      beforeEach(function () {
        filter = filters.filter;
      });

      it('does nothing when ignore:true', function () {
        expect(filter(['a','b','c'], 1, null, true)).to.eql(['a','b','c']);
      });

      it('works like usual when ignore:false', function () {
        expect(filter(['a','b','c'], 'a', null, false)).to.eql(['a']);
      });
    });
  });

}());

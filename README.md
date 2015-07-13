## angular-filter-suspend [![travisci](https://travis-ci.org/kasperlewau/angular-filter-suspend.svg?branch=master)](https://travis-ci.org/kasperlewau/angular-filter-suspend)
> adds an additional 'suspend' parameter to built-in angular filters

```js
/** where suspend is a boolean, true|false **/
filter(args, suspend[true|false]);

{{ filter:arg:arg:suspend[true|false] }}
```

### installation
```
  bower install angular-filter-suspend --save
```

### usage
```js
  angular.module('yourModule', [ 'angular.filter.suspend' ]);
```
```js
  /**
   * in .js land
   */
  numberFilter(number, fraction, suspend);
  dateFilter(date, format, timezone, suspend);
  jsonFilter(json, spacing, suspend);
  lowercaseFilter(lowercase, suspend);
  limitToFilter(limitTo, limit, begin, suspend);
  orderByFilter(orderBy, expression, reverse, suspend);
  filterFilter(filter, expression, comparator, suspend);
```
```html
  <!-- in .html land -->
  {{ number_expression | number : fractionSize : suspend }}
  {{ date_expression | date : format : timezone : suspend }}
  {{ json_expression | json : spacing : suspend }}
  {{ lowercase_expression | lowercase : suspend }}
  {{ limitTo_expression | limitTo : limit : begin : suspend }}
  {{ orderBy_expression | orderBy : expression : reverse : suspend }}
  {{ filter_expression | filter : expression : comparator : suspend }}
```

### testing
`npm install; npm test`

### license
MIT © [Kasper Lewau](https://github.com/kasperlewau)

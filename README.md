# magic-merge
merges arrays and objects

usage:
```js
  var arr1 = ['testarr1']
    , arr2 = ['testarr2']
    , obj1 = {testobj: 'value1'}
    , obj2 = {testobj: 'value2'}
  ;
  var merged_array = merge(arr1, arr2); //returns array.concat(arr1, arr2);

  var merged_array = merge(obj1, arr2); //return objects 
  var merged_array = merge(arr1, obj2); //with numerical array keys

  var merged_array = merge(obj1, obj2); //returns object with string keys

```

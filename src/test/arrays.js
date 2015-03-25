import {test} from 'tap';
import merge from '../index.js';
import is from 'is';

test('if the two arrays get merged correctly', (t) => {
  var arr1 = ['testvalue1']
    , arr2 = ['testvalue2']
    , merged = merge(arr1, arr2)
  ;

  t.ok(is.array(merged), 'merged arrays should be an array');
  t.equal(merged.length, 2, 'array length should be 2');
  t.equal(merged[0], 'testvalue1', 'merged[0] should be testvalue1');
  t.equal(merged[1], 'testvalue2', 'merged[1] should be testvalue2');

  t.end();
});

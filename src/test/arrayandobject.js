import {test} from 'tap';
import merge from '../index.js';
import is from 'is';

test('if array1 and object2 get merged correctly', (t) => {
  var arr = ["testing"]
    , obj = {
        notReplaced: true
      , outer: {
          inner: {
            replaced: false
          }
        }
      }
    , merged = merge(arr, obj)
  ;

  t.ok(is.a(merged, 'object'), 'merged object and array should be an object');
  t.equal(merged[0], 'testing', `merged[0] is not equal to arr[0]`);
  t.equal(merged.notReplaced, true, 'merged.notReplaced should be true');
  t.deepEqual(merged.outer, obj.outer, 'merged.outer and object.outer should deepEqual');

  t.end();
});

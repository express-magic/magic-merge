import {test} from 'tap';
import merge from '../index.js';
import is from 'is';

test('if the two objects get merged correctly', (t) => {
  var obj1 = {
        notReplaced: true
      , outer: {
          inner: {
            replaced: false
          }
        }
      }
    , obj2 = {
        outer: {
          inner: {
            replaced: true
          }
        }
      }
    , merged = merge(obj1, obj2)
  ;

  t.ok(is.a(merged, 'object'), 'merged objects should be an object');
  t.deepEqual(merged.outer, obj2.outer, 'comparing mergedObject and object2');
  t.equal(merged.notReplaced, obj1.notReplaced, 'comparing notReplaced value');
  t.equal(merged.outer.inner.replaced, obj2.outer.inner.replaced, 'compare value of replaced subobject');

  t.end();
});

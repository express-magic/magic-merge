import is from 'is';
import {each} from 'magic-loops';

/*
* Recursively merge properties of two objects 
*/
export function merge(obj1, obj2) {
  if ( is.array(obj1) && is.array(obj2) ) {
    return obj1.concat(obj2);
  }
  each(obj2, (obj, p) => {
    try {
      // Property in destination object set; update its value.
      if ( is.a(obj, 'object') ) {
        obj1[p] = merge(obj1[p], obj);
      } else {
        obj1[p] = obj;
      }
    } catch(e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj;
    }
  });
  return obj1;
}

export default merge;

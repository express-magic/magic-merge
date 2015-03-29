/*
* Recursively merge properties of two objects 
*/
export function merge(obj1, obj2) {
  if ( obj1 && typeof obj1.concat === 'function' && obj2) {
    return obj1.concat(obj2);
  }
  for( let p in obj2 ) {
    if ( obj2.hasOwnProperty(p) ) {
      let obj = obj2[p];
      try {
        // Property in destination object set; update its value.
        if ( typeof obj === 'object' ) {
          obj1[p] = merge(obj1[p], obj);
        } else {
          obj1[p] = obj;
        }
      } catch(e) {
        // Property in destination object not set; create it and set its value.
        obj1[p] = obj;
      }
    }
  }
  return obj1;
}

export var mergeObjects = merge;

export default merge;

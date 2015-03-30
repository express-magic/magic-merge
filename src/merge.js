/*
* Recursively merge properties of two objects 
*/
export function merge(obj1, obj2) {
  if ( ! obj1 || ! obj2 ) {
    return obj1;
  }
  if ( obj1 && typeof obj1.concat === 'function' && obj2 ) {
    return obj1.concat(obj2);
  }
  for( let p in obj2 ) {
    if ( obj2.hasOwnProperty(p) ) {
      let obj = obj2[p];
      if ( typeof obj === 'object' ) {
        obj1[p] = merge(obj1[p], obj);
      } else {
          obj1[p] = obj;
      }
    }
  }
  return obj1;
}

export var mergeObjects = merge
         , concat = merge;

export default merge;

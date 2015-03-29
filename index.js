/*
* Recursively merge properties of two objects 
*/
"use strict";

exports.merge = merge;
Object.defineProperty(exports, "__esModule", {
  value: true
});

function merge(obj1, obj2) {
  if (obj1 && typeof obj1.concat === "function" && obj2) {
    return obj1.concat(obj2);
  }
  for (var p in obj2) {
    if (obj2.hasOwnProperty(p)) {
      var obj = obj2[p];
      try {
        // Property in destination object set; update its value.
        if (typeof obj === "object") {
          obj1[p] = merge(obj1[p], obj);
        } else {
          obj1[p] = obj;
        }
      } catch (e) {
        // Property in destination object not set; create it and set its value.
        obj1[p] = obj;
      }
    }
  }
  return obj1;
}

var mergeObjects = merge;

exports.mergeObjects = mergeObjects;
exports["default"] = merge;

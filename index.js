/*
* Recursively merge properties of two objects 
*/
"use strict";

exports.merge = merge;
Object.defineProperty(exports, "__esModule", {
  value: true
});

function merge(obj1, obj2) {
  if (!obj1 || !obj2) {
    return obj1;
  }
  if (obj1 && typeof obj1.concat === "function" && obj2) {
    return obj1.concat(obj2);
  }
  for (var p in obj2) {
    if (obj2.hasOwnProperty(p)) {
      var obj = obj2[p];
      if (typeof obj === "object") {
        obj1[p] = merge(obj1[p], obj);
      } else {
        obj1[p] = obj;
      }
    }
  }
  return obj1;
}

var mergeObjects = merge,
    concat = merge;

exports.mergeObjects = mergeObjects;
exports.concat = concat;
exports["default"] = merge;

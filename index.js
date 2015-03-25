"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/*
* Recursively merge properties of two objects 
*/
exports.merge = merge;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var each = require("magic-loops").each;

var is = _interopRequire(require("is"));

function merge(obj1, obj2) {
  if (is.array(obj1) && is.array(obj2)) {
    return obj1.concat(obj2);
  }
  each(obj2, function (obj, p) {
    try {
      // Property in destination object set; update its value.
      if (is.a(obj, "object")) {
        obj1[p] = merge(obj1[p], obj);
      } else {
        obj1[p] = obj;
      }
    } catch (e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj;
    }
  });
  return obj1;
}

exports["default"] = merge;

//# sourceMappingURL=index.js.map
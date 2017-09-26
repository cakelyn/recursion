// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (obj === null) {
    return "null";
  }
  if (typeof obj === 'undefined') {
    return null;
  }
  if (typeof obj === 'function') {
    return null;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (Array.isArray(obj)) {
    var arrayArr = [];
    for (var i = 0; i < obj.length; i++) {
      var arrVal = stringifyJSON(obj[i]);
      arrayArr.push(arrVal);
    }
    return "[" + arrayArr.join() + "]";
  }
  if (typeof obj === 'object') {
    var objectArr = [];
    for (var key in obj) {
      var objVal = stringifyJSON(obj[key]);
      if (objVal !== null) {
        objectArr.push('"' + key + '":' + objVal);
      }
    }
    return "{" + objectArr.join() +  "}";

  }

};

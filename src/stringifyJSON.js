// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*

  - JSON is used to exchange data to/from a web server.
  - When sending data to a web server, the data has to be a string.
  - Imagine you have this JavaScript object:

      var obj = {
        "name": "John",
        "age": 30,
        "city": "New York"
      };

  - You can use the JavaScript function JSON.stringify() to convert this object to a string

    var myJSON = JSON.stringify(obj);

  - The result in myJSON will be a string following the JSON notation
  - myJSON is now a string and is ready to be sent to a server

  SPECS
  - Boolean, Number, and String objects are converted to the corresponding primitive
    values during stringification
  - If undefined, a function, or a symbol is encountered during conversion is either
    ommitted or censored to null

*/
var stringifyJSON = function(obj) {

  if (typeof obj === undefined) {
    return;
  }
  if (typeof obj === 'function') {
    return;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === null) {
    // return as a string
  }
  if (Array.isArray(obj)) {
    // pretty much the same as object for each element of the array
  }
  if (typeof obj === 'object') {
    for (var key in obj) {
      stringifyJSON(obj[key]);
    }
    // surround with curly braces for each field
    // print the field name and all
    // call the function recursively on the objects value, placing the returned string there
  }

};

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {

  var nodes = [];

  var childSearch = function(el) {

    if (el.nodeType === 1 && el.classList.contains(className)) {
      nodes.push(el);
    }

    if (el.childNodes.length > 0) {
      for (var i = 0; i < el.childNodes.length; i++) {
        childSearch(el.childNodes[i]);
      }
    }

    return;
  };

  childSearch(document.body);

  return nodes;
};

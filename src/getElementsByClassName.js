// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*

- returns a collection of all elements in the document with the specified
  class name, as a NodeList object
  - NodeList object represents a collection of nodes
  - the nodes can be accessed by index numbers, starting at 0
  - use the length property to determine the number of elements with a
    specified class name, then you can loop through all elements and
    extract the infor you want
- when called on the document object, the complete document is searched
- calling getElemensByClassName on any element will return only elements
  which are descendants of the specified root element with the class names

- document.body property returns the <body> element of the current document

- element.childNodes property returns a collection of a node's child nodes
  as a NodeList object

- element.classList property returns the class name(s) of an element as a
  DOMTokenList object
- useful to toggle CSS classes on an element

 */
var getElementsByClassName = function(className) {

  // create an empty node array to push results
  var nodes = [];

  // create a function for searching children
  var childSearch = function(el) {

    if (el.nodeType === 1 && el.classList.value === className) {
      nodes.push(el);
    }

    if (el.childNodes.length > 1) {
      for (var i = 0; i < el.childNodes.length; i++) {
        childSearch(el.childNodes[i]);
      }
    }

    return;

  };

  childSearch(document.body);

  return nodes;

  // var children = document.body.childNodes;
  // console.log(children);
  // console.log(children[3].classList.value);
  // search the document for elements containing the className
  // return the NodeList/array-like object of all elements with className
  // should return (2) [body.targetClassName, div.targetClassName]
};

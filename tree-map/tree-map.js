/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */


var Tree = function(value) {
  this.value = value;
  this.children = [];

  //attatch the map function to the tree
  var newTree = Object.create(Tree,TreeFunctions);

  
  return TreeFunctions;
};
var TreeFunctions = {};
//new tree to return it
var resultTree = Object.create(Tree);
//create the map function 
TreeFunctions.map = function(aFun){
  //assing the value that will be pushed to the tree to a variable 
  var newVal = aFun * 2;
  //create a brach with it
  var newBranch = new Tree(newVal);
  //push it to the result tree
  resultTree.addChild(newBranch);
  //return result tree
  return resultTree;
}
// a function to push children to a tree
TreeFunctions.addChild = function(value){
    var incoming = new Tree(value);
    if(this.newTree.children.length === 0){
        this.newTree.children.push(incoming);
        return incoming;
    }
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].children.length > 0){
      this.children[i].addChild(this.children[i])
    }
      this.children[i].children.push(incoming);
      return incoming;
    }
}



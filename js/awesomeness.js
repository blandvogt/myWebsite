//Changes a list based on user input through DOM manipulation
(function (){

    //Find user input to append
    function newInput(){
      var newItem = document.getElementById('newItem').value;
      return newItem;
    }

    //Append to the list
    function append(){
      //Create new element and text node. Then attach them together.
      var newEl = document.createElement('li');
      var newText = document.createTextNode(newInput());
      newEl.appendChild(newText);
      //Find position of list in DOM tree, and append the new element/node.
      var position = document.getElementById('list');
      position.appendChild(newEl);
    }

    //Find user input to remove
    function removeInput() {
      var userInput = document.getElementById('removeItem').value;
      return userInput - 1;
    }

    //Remove from the list
    function remove(){
      var removeEl = document.getElementById('list');
      //Uses an Anonymous Function in place of a numerical value
      removeEl = removeEl.getElementsByTagName('li')[removeInput()];
      var elementParent = removeEl.parentNode;
      elementParent.removeChild(removeEl);
    }

//Appends to the list using an Event Listener
var appendList = document.getElementById('newItemSub');
appendList.addEventListener('click', append);

//Removes from the list using an Event Listener
var removeList = document.getElementById('removeItemSub');
removeList.addEventListener('click', remove);
}());

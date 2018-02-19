//This file is wrapped in the shorthand for a jQuery '.ready()' method.
//It creates function-level scope for variables, and ensures that functions
//do not fire until the DOM tree of a page is loaded. Placing the <script> tag
//at the end of an HTML page achieves the same effect. This is still done so that
//the script functions if the the tag is accidentally moved.
$(function(){
    //Changes a list based on user input through DOM manipulation instead of jQuery.
    //Uses an IIFE (Immediatly Invoked Function Expression) to protect variables.
    // (function (){
    //
    //     //Find user input to append
    //     function newInput(){
    //       var newItem = document.getElementById('newItem').value;
    //       return newItem;
    //     }
    //
    //     //Append to the list
    //     function append(){
    //       //Create new element and text node. Then attach them together.
    //       var newEl = document.createElement('li');
    //       var newText = document.createTextNode(newInput());
    //       newEl.appendChild(newText);
    //       //Find position of list in DOM tree, and append the new element/node.
    //       var position = document.getElementById('list');
    //       position.appendChild(newEl);
    //       $('input:text').val('');
    //     }
    //
    //     //Find user input to remove
    //     function removeInput() {
    //       var userInput = document.getElementById('removeItem').value;
    //       return userInput - 1;
    //     }
    //
    //     //Remove from the list
    //     function remove(){
    //       var removeEl = document.getElementById('list');
    //       //Uses an Anonymous Function in place of a numerical value
    //       removeEl = removeEl.getElementsByTagName('li')[removeInput()];
    //       var elementParent = removeEl.parentNode;
    //       elementParent.removeChild(removeEl);
    //       $('input:text').val('');
    //     }
    //
    //     //Appends to the list using an Event Listener.
    //     var appendList = document.getElementById('newItemSub');
    //      if (appendList.addEventListener) {
    //        appendList.addEventListener('click', append, false);
    //      }
    //       //Internet Explorer Fallback (Not needed in jQuery).
    //       else {
    //        appendList.attachEvent('onclick', append);
    //      }
    //
    //     //Removes from the list using a DOM Event Listener.
    //     var removeList = document.getElementById('removeItemSub');
    //     if (removeList.addEventListener) {
    //       removeList.addEventListener('click', remove, false);
    //     }
    //       //Internet Explorer Fallback (Not needed in jQuery).
    //       else {
    //         removeList.attachEvent('onclick', remove);
    //       }
    // }());


    //
    //Uses jQuery to check user input value for a password and output a message
    //if it adheres to requirments.
    (function (){
        //Finds length of inputed password.
        function checkLength(){
          var msg = $('#msg_len');
          var length = password.val().length;
          if (length < 6){
            msg.text("ERROR! Password must be at least 6 characters long.");
            msg.removeClass('green');
            msg.addClass('red');
          }
          else{
            msg.text("Accepable password length.");
            msg.removeClass('red');
            msg.addClass('green');
          }
        }

        //Finds if the password has a capital and lowercase letter.
        function checkCase(){
          var msg = $('#msg_case');
          if (password.val().match('[A-Z]') && password.val().match('[a-z]')){
            msg.text("Accepable. Password has a capital and lowercase letter.");
            msg.removeClass('red');
            msg.addClass('green');
          }
          else{
            msg.text("ERROR! Password must contain a capital AND lowercase letter.");
            msg.removeClass('green');
            msg.addClass('red');
          }
        }

        // Uses jQuery as opposed to DOM manipulation.
        var password = $('#password');
        password.on('input', checkLength);
        password.on('input', checkCase);
    } ());


    //
    // Displays current JS Version in the Password App description.
    (function (){
        if (typeof jQuery != 'undefined') {
            // jQuery is loaded => print the version
            $('#JSVersion').text(jQuery.fn.jquery);
        }
    } ());


    //
    //Fades in content through looping and chaining.
    (function (){
        $('.section_books').hide().delay(300).fadeIn(4000);
        $('.section_apps').hide().delay(800).fadeIn(4000);
    } ());


  //
  //The Floor is Lava App
  //Moves stick figure to the right
  //   (function (){
  //     $('#buttonLeft').on('click', function() {
  //       $('#msg').animate({
  //         marginLeft: '200px',
  //         marginRight: '0px'
  //       }, 500, function(){
  //       });
  //     });
  //
  // //Moves stick figure to the left
  //     $('#buttonRight').on('click', function() {
  //       $('#msg').animate({
  //         marginRight: '200px',
  //         marginLeft: '0px'
  //       }, 500, function(){
  //       });
  //     });
  //
  //   } ());

//
//Allows the user to click on a box that will
//then activate a disappearing animation. There is also
//a button that will activate another animation to reset the boxes.
    (function (){
      //User can click on a box to make it fade away.
        $('button.box_animate').each(function(){
            // $(this).text('Hello');
            $(this).on('click', function(){
                  $(this).animate({
                    opacity: 0.5,
                    marginLeft: '300px'
                  }, 500, function(){
                    $(this).hide();
                  });
            });
        });

        //User clicks the reset button to re-display the boxes.
        $('button#reset').each(function(){
            // $(this).text('Hello');
            $(this).on('click', function(){
                  $('button.box_animate').show();
                  $('button.box_animate').animate({
                    opacity: 1.0,
                    marginLeft: '0px'
                  }, 500, function(){

                  });
            });
        });
    } ());



    //
    //Full list app
    (function() {
        //Hide the submit form initially.
        $('#itemForm').hide();

        //Show the 'itemForm' when the 'itemButton' is clicked.
        $('#itemButton').on('click', function() {
          $(this).hide();
          $('#itemForm').show();
        });

        //Add inputed item to the top of the list.
        $('#itemForm').on('submit', function(e){
          //Prevent a new page from being loaded on the submission of the form.
          e.preventDefault();
          var $item = $('#itemInput').val();
          $('#list').prepend('<li>' + $item + '</li>');
          $('#itemForm').hide();
          $('#itemButton').show();
          $('#itemInput').val('');
        });

        //Allows user to select an item that has been completed,
        //moving it to the bottom of the list. the user can then click a
        //second time to completely remove it.
        $('#list').on('click', 'li', function(){
          var complete = $(this).hasClass('itemComplete');
          //Check if the item has the 'itemComplete' class. If so, then
          //remove it from the list completely.
          if (complete === true){
            $(this).animate({
              opacity: 0.0,
              marginLeft: '200px'
            }, 1500, function(){
              $(this).remove();
            });
          }
          else {
            //Fade out the item
            $(this).animate({
              opacity: 0.0
            }, 1500, function(){
              //Reassign item to $moveItem, remove the original item, and
              //append the re-asignment to the end of the list.
                var $moveItem = $(this).text();
                $(this).remove();
                $('#list').append('<li>' + $moveItem + ' ' + '(click to remove)' + '</li>');

            //Fade in the re-asigned item and adjust opacity.
            $('#list li:last-child').animate({
              opacity: 0.5
            }, 0, function(){
                $(this).hide().fadeIn(2000);
                //Add 'itemComplete' class.
                $(this).addClass('itemComplete');
                });
            });
          }
        });





      // $('#list').on('click', 'li', function(){
      //   var complete = $(this).hasClass('itemComplete');
      //   if (complete === true){
      //     $(this).animate({
      //       opacity: 0.0,
      //       marginLeft: '200px'
      //     }, 1500, function(){
      //       $(this).remove();
      //     });
      //   }
      //   else {
      //         var $this = $(this);
      //         var $last = $('#list li:last-child');
      //
      //         if($this !== $last){
      //             $(this).animate({
      //                 opacity: 0.0
      //               }, 1500, function(){
      //                 var $moveItem = $(this).text();
      //                 $(this).remove();
      //                 $('#list').append('<li>' + $moveItem + '</li>');
      //                 });
      //         }
      //
      //         $('#list li:last-child').animate({
      //             opacity: 0.5
      //           }, 0, function(){
      //               $(this).hide().fadeIn(2000);
      //               $(this).addClass('itemComplete');
      //           });
      //
      //   }
      // });





        //
        // $('li.itemComplete').on('click', function(){
        //   $(this).animate({
        //     marginLeft: '200px'
        //   }, 0, function(){
        //
        //   });
        // });


          // });

        // $('.list').text('Hello World');

        // $('#list').each(function(){
        //     // $(this).text('Hello');
        //     $(this).on('click', function(){
        //           $(this).animate({
        //             opacity: 0.5,
        //             marginLeft: '300px'
        //           }, 500, function(){
        //             $(this).hide();
        //           });
        //     });
        // });





    }());




});
// End of the .ready() jQuery method.

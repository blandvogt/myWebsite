var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18){
    greeting = 'Good Evening';
  }
  else if (hourNow >= 12) {
    greeting = 'Good Afternoon';
  }
  else if (hourNow >= 0) {
    greeting = 'Good Morning';
  }
  else {
    greeting = 'Welcome';
  }

  document.write(greeting);


//bool
// var trueValue;
// var falseValue;
//
// trueValue = true;
// falseValue = false;
//
// var elTrue = document.getElementById('replace');
// elTrue.className = trueValue;
//
//
// var elFalse = document.getElementById('alsoReplace');
// elFalse.className = falseValue;

// replace
// var newText = "This is the New text!!!!!!!";
// var myVariable = document.getElementById ('replace');
// myVariable.textContent = newText;
//
// var alsoMyVariable = document.getElementById ('replaceAlso');
// alsoMyVariable.textContent = newText;

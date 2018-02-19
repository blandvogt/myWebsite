//Uses an Immediately Invoked Function Expression (IIFE)
//to protect the scope of variables from other scripts.
//This IIFE finds the current time of day and creates a
//unique homepage greeting message and background image.
(function() {

  //Object Constructor creating Time Objects, each with a
  //unique greeting and background image.
  function Time (greeting, background) {
    this.greeting = greeting;
    this.background = background;
  }
  var morning = new Time ('Morning', 'homeMorning');
  var afternoon = new Time ('Afternoon', 'homeAfternoon');
  var evening = new Time ('Evening', 'homeEvening');

  // Finds the correct time of day and its corresponding Time Object
  function currentTime() {
    var today = new Date();
    var hourNow = today.getHours();

    if (hourNow >= 18) {
        return evening;
      }
      else if (hourNow >= 12) {
        return afternoon;
      }
      else {
        return morning;
      }
  }

  //Adds a unique background and greeting message based
  //on the current time of day.
    $('body.home').addClass(currentTime().background);
    $('#greeting').text("Why, Good " + currentTime().greeting).hide().delay(2500).fadeIn(3000);
    //Fades in the text beneath the greeting.
    $('.home_text').hide().delay(3500).fadeIn(3000);
}());

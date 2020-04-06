(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var first = name.charAt(0);
    var lower = first.toLowerCase();

    if (lower == "j") {
      byeSpeaker.speak(name);
    } else {
     helloSpeaker.speak(name);
    }
  }
})();
//welcome button on about page
function Greeting() {
    var time = new Date().getHours();
    var greeting;
    if (time < 20) {
      greeting = "Good day!";
    } else {
      greeting = "Good evening!";
    }
    document.getElementById("welcome").innerHTML = greeting;
  }
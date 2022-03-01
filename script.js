/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var css = document.querySelector("h4");
  var color1 = document.querySelector(".color1");
  var color2 = document.querySelector(".color2");
  var body = document.getElementById("gradient")

  function setGradient(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
  }
  color1.addEventListener("input", setGradient);
  color2.addEventListener("input", setGradient);
  



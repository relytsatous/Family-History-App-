// When the user clicks on <div>, open the popup
function popupWindow() {
  var popup = document.getElementById("indexing-popup");
  popup.classList.toggle("show");
}

function helloThere() {
  alert("Hello There Person: " + iCount + ".");
}
function wuzzzup() {
  alert("wuzzzup");
}

//Accordion
var coll = document.getElementsByClassName("nav-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//Accordion
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// Collapsible Table //
$(document).ready(function () {
  $('[data-toggle="toggle"]').change(function () {
    $(this).parents().next(".hide").toggle();
  });
});

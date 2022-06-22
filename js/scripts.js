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


// Toggle Overlay Function
$(".toggle").click(function(event) {
    event.preventDefault();
    $("div.overlay").fadeToggle("fast");
});
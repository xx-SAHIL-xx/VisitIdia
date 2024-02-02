// JavaScript to handle the click event
document.getElementById("userIcon").addEventListener("click", function() {
  var dropdown = document.getElementById("dropdownOptions");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  var dropdown = document.getElementById("dropdownOptions");
  if (!event.target.closest('.dropdown') && dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
});
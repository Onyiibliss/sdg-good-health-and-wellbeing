document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown buttons
    var dropdowns = document.querySelectorAll('.dropdown');
  
    // Loop through dropdowns and add event listeners
    dropdowns.forEach(function(dropdown) {
      // Toggle dropdown menu visibility on hover
      dropdown.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-content').style.display = 'block';
      });
  
      // Hide dropdown menu when not hovering over it
      dropdown.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-content').style.display = 'none';
      });
    });
  });
  
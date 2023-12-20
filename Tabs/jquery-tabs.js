// Use this function for tabs
// In the HTML each button has a common class (toggle-btn) and a data-target attribute specifying the target class of the corresponding content div
// When a button is clicked, the script hides all content divs and then shows the one with the matching target class. This ensures that only the content of the clicked button is displayed while hiding the others.
// Set the default selected tab by adding the .current-tab class to the button
// Hide other tab content on page load by adding the .hidden class to the content div
// Check the attached HTML doc for an example

jQuery(document).ready(function () {
  // Attach click event handler to each button
  jQuery(".toggle-btn").click(function () {
    // Get the target class from the data attribute
    let targetClass = jQuery(this).data("target");

    // Hide all content divs and then show the matching one

    jQuery(".content").hide();
    jQuery("." + targetClass).show();
    jQuery(".toggle-btn").removeClass("current-tab");
    jQuery(this).addClass("current-tab");
  });
});

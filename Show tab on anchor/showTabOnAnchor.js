// This function takes an anchor link as an argument and adds the "current-tab" class to the button with the corresponding data-target attribute.
// Replace 'exampleAnchor' with the actual anchor link you want to use.

function runOnAnchorLink(anchor) {
  // Get the current page URL
  let currentPageUrl = window.location.href;

  // Check if the anchor link exists in the page URL
  if (currentPageUrl.indexOf("#" + anchor) !== -1) {
    // Your code to run when the anchor link is present
    console.log("Anchor link found: #" + anchor);

    jQuery(".toggle-btn").removeClass("current-tab");
    jQuery(".toggle-btn[data-target='" + anchor + "']").addClass("current-tab");

    // Add your custom code here
  } else {
    console.log("Anchor link not found: #" + anchor);
  }
}

// Example usage: Call the function with the desired anchor link
runOnAnchorLink("exampleAnchor");

/// In context with the rest of the tab jQuery (as used on AMS Brands page) ///

jQuery(document).ready(function () {
  // Attach click event handler to each button
  jQuery(".toggle-btn").click(function () {
    // Get the target class from the data attribute
    let targetClass = jQuery(this).data("target");

    // Check if the clicked tab is a nested tab
    if (jQuery(this).hasClass("nested-tab")) {
      // Hide all nested content divs and then show the matching one
      jQuery(".content.nested").hide();
      jQuery("." + targetClass).show();
      jQuery(".toggle-btn.nested-tab").removeClass("current-tab");
      jQuery(this).addClass("current-tab");
    } else {
      // Hide all content divs and then show the matching one
      jQuery(".content").hide();
      jQuery("." + targetClass).show();
      jQuery(".toggle-btn").removeClass("current-tab");
      jQuery(this).addClass("current-tab");
    }
  });

  // If statement to check the URL
  function runOnAnchorLink(anchor) {
    // Get the current page URL
    let currentPageUrl = window.location.href;

    // Check if the anchor link exists in the page URL
    if (currentPageUrl.indexOf("#" + anchor) !== -1) {
      // Code to run when the anchor link is present
      console.log("Anchor link found: #" + anchor);

      jQuery(".toggle-btn").removeClass("current-tab");
      jQuery(".toggle-btn[data-target='" + anchor + "']").addClass(
        "current-tab"
      );
      jQuery(".content").hide();
      jQuery(".content.activheal").show();
    } else {
      // Code to run when the anchor link is not present
      console.log("Anchor link not found: #" + anchor);
    }
  }

  // Example usage: Call the function with the desired anchor link
  runOnAnchorLink("activheal");
});

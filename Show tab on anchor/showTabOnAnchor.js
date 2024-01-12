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

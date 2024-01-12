// Example function that will only run if the page URL has a certain anchor link

// Replace 'exampleAnchor' with the actual anchor link you're looking for.
// The function checks if the specified anchor link is present in the current page URL and executes your custom code if it is.
// Adjust the code inside the if block to include the functionality you want to run when the anchor link is found.

function runOnAnchorLink(anchor) {
  // Get the current page URL
  let currentPageUrl = window.location.href;

  // Check if the anchor link exists in the page URL
  if (currentPageUrl.indexOf("#" + anchor) !== -1) {
    // Your code to run when the anchor link is present
    console.log("Anchor link found: #" + anchor);

    // Add your custom code here
  } else {
    console.log("Anchor link not found: #" + anchor);
  }
}

// Example usage: Call the function with the desired anchor link
runOnAnchorLink("exampleAnchor");

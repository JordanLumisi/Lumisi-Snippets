// Use this function for modal popups
// In HTML both the button / a tag that opens the modal and the modal wrapper should have the same ID / Class name
// Use the ID for the button / a tag ---------------> id="example-name"
// Use the Class name for the modal wrapper --------> class="example-name"
// Check the attached HTML doc for an example

// Set the timing for the animation. Default is 400ms
const animationTiming = 400;

// Set this to the class name of all modal tiles
const tileClass = "tile-class";

// Each unique selector used as both ID's for the buttons and Class's for the tiles
const selectorNames = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

jQuery(document).ready(function () {
  // Hide all tiles on page load
  jQuery(`.${tileClass}`).hide();

  // Function loops through all tiles and applies fadeOut / fadeIn animations
  selectorNames.forEach((selectorName) => {
    jQuery(`#${selectorName}`).click(function () {
      jQuery(`.${tileClass}`).fadeOut(animationTiming);
      jQuery(`.${selectorName}`).fadeIn(animationTiming);
    });
  });
});

/* ------------------------------------------------------------------------------------------------ */

// If you want to show a tile on page load then use this function and add the selector for the tile you want to show

jQuery(document).ready(function () {
  // Hide all tiles on page load
  jQuery(`.${tileClass}`).hide();

  // Show specific tile on page load
  jQuery(".example").show(); // <-- add selector here

  // Function loops through all tiles and applies fadeOut / fadeIn animations
  selectorNames.forEach((selectorName) => {
    jQuery(`#${selectorName}`).click(function () {
      jQuery(`.${tileClass}`).fadeOut(animationTiming);
      jQuery(`.${selectorName}`).fadeIn(animationTiming);
    });
  });
});

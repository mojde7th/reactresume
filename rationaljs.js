// Find the input element
const inputElement = document.querySelector(".PrimaryInput_input__5cQhL");

// Simulate a click on the input
inputElement.click();

// Wait for a short delay (adjust the timing as needed)
setTimeout(() => {
  // Find and click the first option (assuming it's the first child element)
  const firstOption = document.querySelector(
    ".PrimarySelect_options__30565 .PrimarySelect_option__3ErQe"
  );
  if (firstOption) {
    firstOption.click();
  }
}, 1000); // Adjust the delay as needed


 
 
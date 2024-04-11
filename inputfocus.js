var inputElement = document.querySelector(
  'input[type="text"][placeholder="جنسیت"]'
);
inputElement.focus(inputElement);
console.log(inputElement);

setTimeout(function () {
  var spanElement = document.querySelectorAll(
    ".PrimarySelect_options__30565 .PrimarySelect_option__3ErQe span.PrimarySelect_name__1FZKE"
  );
  console.log(spanElement[0]);
  spanElement[0].click();
}, 100);
//---------------------------------

var inputarz = document.querySelector(
  'input[type="text"][placeholder="نوع ارز"]'
);
inputarz.focus();
console.log("inputarz:", inputarz);

setTimeout(function () {
  var spanarz = document.querySelectorAll(
    ".PrimarySelect_options__30565 .PrimarySelect_option__3ErQe span.PrimarySelect_name__1FZKE"
  );
  console.log("spanarz:", spanarz[0]);
  spanarz[0].click();
}, 100);

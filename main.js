// Adjust the "querySelector" value to target your image
var header = document.querySelector("#showcase");
document.body.classList.add('js-loading');
header.addEventListener("load", removeLoadingClass);
function removeLoadingClass() {
  document.body.classList.remove('js-loading');
}
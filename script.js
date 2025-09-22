const inputEl = document.getElementById("input");
const selectEL = document.getElementById("select");
const faceBookEL = document.getElementById("Facebook");
const youTubeEl = document.getElementById("YouTube");
const twitterEl = document.getElementById("Twitter");
const linkEl = document.getElementById("Linkedin");
const angelEl = document.getElementById("angel");
const angelRotateEl = document.getElementById("angelrotate");

angelEl.addEventListener("click", () => {
  selectEL.classList.toggle("hiddenul");
  angelRotateEl.classList.toggle("rotate");
});
faceBookEL.addEventListener("click", () => {
  selectEL.classList.add("hiddenul");
  inputEl.innerHTML = faceBookEL.innerHTML;
  angelRotateEl.classList.toggle("rotate");
});
youTubeEl.addEventListener("click", () => {
  selectEL.classList.add("hiddenul");
  inputEl.innerHTML = youTubeEl.innerHTML;
  angelRotateEl.classList.toggle("rotate");
});
twitterEl.addEventListener("click", () => {
  selectEL.classList.add("hiddenul");
  inputEl.innerHTML = twitterEl.innerHTML;
  angelRotateEl.classList.toggle("rotate");
});
linkEl.addEventListener("click", () => {
  selectEL.classList.add("hiddenul");
  inputEl.innerHTML = linkEl.innerHTML;
  angelRotateEl.classList.toggle("rotate");
});

const inputEl = document.getElementById("input");
const selectEL = document.getElementById("select");
const faceBookEL = document.getElementById("Facebook");
const youTubeEl = document.getElementById("YouTube");
const twitterEl = document.getElementById("Twitter");
const linkEl = document.getElementById("Linkedin");
const angelEl = document.getElementById("angel");

angelEl.addEventListener("click", () => {
  selectEL.classList.toggle("hiddenul");
});
faceBookEL.addEventListener("click", () => {
  selectEL.classList.add("hiddenul");
  inputEl.innerHTML = faceBookEL.innerHTML;
});
youTubeEl.addEventListener("click", () => {
  selectEL.classList.add("hiddenul");
  inputEl.innerHTML = youTubeEl.innerHTML;
});
twitterEl.addEventListener("click", () => {
  selectEL.classList.add("hiddenul");
  inputEl.innerHTML = twitterEl.innerHTML;
});
linkEl.addEventListener("click", () => {
  selectEL.classList.add("hiddenul");
  inputEl.innerHTML = linkEl.innerHTML;
});

const userChoiceCs = document.querySelector(".cs");
const userChoiceMythology = document.querySelector(".mythology");
const userChoiceSports = document.querySelector(".sports");
const userChoiceHistory = document.querySelector(".history");
const userChoiceGeneral = document.querySelector(".general");

//Storing the button click for Computer Science category into the local storage
userChoiceCs.addEventListener("click", function () {
  localStorage.setItem("category", userChoiceCs.textContent);
  location.replace("index.html");
});

//Storing the button click for Mythology category into the local storage
userChoiceMythology.addEventListener("click", function () {
  localStorage.setItem("category", userChoiceMythology.textContent);
  location.replace("index.html");
});
//Storing the button click for Sports category into the local storage
userChoiceSports.addEventListener("click", function () {
  localStorage.setItem("category", userChoiceSports.textContent);
  location.replace("index.html");
});
//Storing the button click for History category into the local storage
userChoiceHistory.addEventListener("click", function () {
  localStorage.setItem("category", userChoiceHistory.textContent);
  location.replace("index.html");
});
//Storing the button click for General Knowledge category into the local storage
userChoiceGeneral.addEventListener("click", function () {
  localStorage.setItem("category", userChoiceGeneral.textContent);
  location.replace("index.html");
});

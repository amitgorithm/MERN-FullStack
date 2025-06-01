const html = document.documentElement;
const switches = document.querySelector(".switches");
const inputs = switches.querySelectorAll("input");
if (localStorage.getItem("dark-mode")) {
  html.classList.add("theme-dark");
}
if (localStorage.getItem("selected-radio")) {
  switches.querySelector(`#${localStorage.getItem("selected-radio")}`).checked =
    "true";
}
const setTheme = (theme) => {
  if (theme === "dark") {
    html.classList.add("theme-dark");
    localStorage.setItem("dark-mode", "true");
  } else {
    html.classList.remove("theme-dark");
    localStorage.removeItem("dark-mode");
  }
};
const handleMediaChange = (e) => {
  if (switches.querySelector('[type="radio"]:checked').id === "auto") {
    setTheme(e.matches ? "dark" : "light");
  }
};
const handleInputChange = (e) => {
  const themeMode = e.target.id;
  if (
    themeMode === "dark" ||
    (themeMode === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  localStorage.setItem("selected-radio", themeMode);
};
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", handleMediaChange);
inputs.forEach((input) => input.addEventListener("input", handleInputChange));
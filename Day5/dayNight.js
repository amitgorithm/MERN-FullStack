let webPage = document.querySelector('body')
console.log(webPage)

function day() {
    webPage.classList.toggle("night")
    webPage.style.transition = "3s";
}
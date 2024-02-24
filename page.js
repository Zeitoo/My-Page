const themeToggler = document.querySelector(".color-mode") // Butao do light/dark mode 
const body = document.querySelector("body")


themeToggler.addEventListener("click", () => {
    body.classList.toggle("dark")
})
const themeToggler = document.querySelector(".color-mode") // Butao do light/dark mode 
const body = document.querySelector("body")


themeToggler.addEventListener("click", () => {
    body.classList.toggle("dark")
})

/*            animation-name: ponto, largura;
            animation-duration: .5s, 5s;
            animation-timing-function: ease;
            animation-iteration-count: 1;*/
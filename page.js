const themeToggler = document.querySelector(".color-mode"); // Butao do light/dark mode
const body = document.querySelector("body");

themeToggler.addEventListener("click", () => {
    body.classList.toggle("dark");
});

//O codigo a seguir pertence a pagina "About" e tem a ver com a interatividade quando se passa o mouse sobre as fotos da "galeria"

const gallery = document.querySelector(".gallery");
const wrapper = document.querySelector(".wrapper");

gallery.addEventListener("mousemove", (e) => {
    wrapper.style.left = `-${(e.x - 377) * 1.6}px`;
});

// alert("BISMILLAH");
const loader = document.getElementById("loader");
const main = document.getElementById("main");
main.style.display = "none";
window.addEventListener("load", () => {
    loader.style.display = "none";
    main.style.display = "unset";
});
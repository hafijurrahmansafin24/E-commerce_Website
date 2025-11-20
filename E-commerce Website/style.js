const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    if (menu.className === "hidden") {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});

document.getElementById("year").textContent = new Date().getFullYear();

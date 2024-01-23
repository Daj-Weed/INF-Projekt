function dropDown() {
    burger = document.getElementById("burgerID");
    drop_down = document.querySelector(".drop_down");
    if (drop_down.style.transform == "translateX(100vw)") {
        width = window.innerWidth - 300;
        drop_down.style.transform = `translateX(${width}px)`;
        burger.classList.remove("burger");
        burger.classList.add("burger_cross");
    } else {
        drop_down.style.transform = "translateX(100vw)";
        burger.classList.remove("burger_cross");
        burger.classList.add("burger");
    }
}
function dropDown() {
    drop_down = document.querySelector(".drop_down");
    if (drop_down.style.transform == "translateX(100vw)") {
        drop_down.style.transform = "translateX(65vw)";
    } else {
        drop_down.style.transform = "translateX(100vw)";
    }
}
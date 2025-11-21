function filterImages(category) {
    let images = document.getElementsByClassName("image-card");
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    for (let i = 0; i < images.length; i++) {
        if (category === "all") {
            images[i].style.display = "block";
        } else if (images[i].classList.contains(category)) {
            images[i].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }
}

filterImages("all");

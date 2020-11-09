window.onload = function () {
    for (let index = 0; index < 5; index += 1) {
        let pixel = document.createElement("div");
        pixel.className = "color";
        document.getElementById("color-palete").appendChild(pixel);
    }
}
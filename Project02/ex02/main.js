document.body.style.height = "15000px";
const div = document.createElement("div");
const h1 = document.createElement("h1");
document.body.appendChild(h1);
document.body.appendChild(div);
div.style.width = "100%";
div.style.position = "fixed";
div.style.left = 0;
div.style.top = 0;
div.style.backgroundColor = "green";
h1.style.position = "fixed";
h1.style.width = "100%";
h1.style.zIndex = 1;
h1.style.textAlign = "center";
h1.style.height = "10px";
h1.textContent = "scrolluj mnie!";
let size = 0;
div.style.height = size + "px";

let grow = true;

const changeHeight = function () {

    if (grow) { // true
        size += 10;
        div.style.height = size + "px";

    } else { // false
        size -= 10;
        div.style.height = size + "px";
    }

    if (size >= window.innerHeight / 2) {
        grow = !grow; // grow = false
        div.style.backgroundColor = "red"; // when 50% reached change color to red

    } else if (size <= 0) {
        grow = !grow; // grow = true;
        div.style.backgroundColor = "green"; // when 0 reached change color back to green

    }
}
window.addEventListener("scroll", changeHeight);
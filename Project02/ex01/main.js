const square = document.createElement('div');
document.body.appendChild(square);

let size = 100; // square size
let grow = true;

square.style.width = size + "px";
// 100 + "px" -> "100" + "px" -> "100px"
square.style.height = size + "px";

//max size of square
//window.innerHeight / 2

window.addEventListener("scroll", function () {

    if (size >= window.innerHeight / 2) {
        grow = !grow; // false
    } else if (size <= 0) {
        grow = !grow; // true
    }

    if (grow) { // true
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    } else { // false
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

})
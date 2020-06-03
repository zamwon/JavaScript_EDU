const btn = document.querySelector("button");
const tab = document.querySelectorAll("li");
let size = 10;
btn.addEventListener("click", () => {
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = "block";
        tab[i].style.fontSize = `${size}px`;
    }
    size++;
})

// FOREACH

// btn.addEventListener("click", () => {
//     tab.forEach((tabElement) => {
//         tabElement.style.display = "block";
//         tabElement.style.fontSize = size + "px";
//     });
//     size++;
// })

// creating 50 boxes
const container = document.querySelector('.container');
for (let i = 1; i < 100; i++) {
    const box = document.createElement('div');
    box.classList.add("box");
    container.appendChild(box);
}

// Randan HEX Color Code Generator
const randomHEXColorCode = () => {
    let char = "0123456789abcdef"
    let colorLength = 6;
    let color = ""
    for (let i = 0; i < colorLength; i++) {
        let randomColor = Math.floor(Math.random() * char.length);
        color += char.substring(randomColor, randomColor + 1);
    }

    return '#' + color;
}

// Onclick Event Handler

function addColor() {
    const boxAll = document.querySelectorAll(".box");
    boxAll.forEach((e) => {
        let newColor = randomHEXColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}
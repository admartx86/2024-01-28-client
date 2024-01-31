function addButton () {
    const BUTTON = document.createElement("button");
    BUTTON.innerHTML = "Click me!";
    BUTTON.onclick = () => {
        console.log("Button clicked!");
    };
    const DIV = document.getElementById("addButton");
    DIV.appendChild(BUTTON);
}

addButton();
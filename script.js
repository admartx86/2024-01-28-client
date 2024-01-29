function addButton () {
    const button = document.createElement("button");
    button.innerHTML = "Click Me!";
    button.onclick = () => {
        console.log("Button Clicked!");
    };
    const div = document.getElementById("addButton");
    div.appendChild(button);
}

addButton();
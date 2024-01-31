//index.html

<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <h1>Hello World!</h1>
        <div id="addButton"></div>
        <script src="./script.js"></script>
    </body>
</html>

//style.css

h1 {
  color: grey;
}

//script.js

function addButton () {
    const button = document.createElement("button");
    button.innerHTML = "Click me!";
    button.onclick = () => {
        console.log("Button clicked!");
    };
    const div = document.getElementById("addButton");
    div.appendChild(button);
}

addButton();
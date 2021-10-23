//function sleep(milliseconds) {
//    const date = Date.now();
//    let currentDate = null;
//    do {
//        currentDate = Date.now();
//    } while (currentDate - date < milliseconds);
//}

//sleep(600)

while (!(document.getElementsByTagName("body")[0].classList.contains("jsedited")));

var headTag = document.getElementsByTagName("head")[0]
var styleTag = document.createElement("style");
var styleTagContent = document.createTextNode("*{transition: background-color .5s, background .5s, color .5s;}");

styleTag.appendChild(styleTagContent);
headTag.appendChild(styleTag);

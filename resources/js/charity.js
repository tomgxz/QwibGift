function strikethroughActivate(activated,other) {
    if (activated.classList.contains("strikethrough")) {
        return
    }
    if (other.classList.contains("strikethrough")) {
        other.classList.remove("strikethrough")
    }

    activated.classList.add("strikethrough")
}





var option1 = document.getElementById("strikethroughOptionOne")
var option2 = document.getElementById("strikethroughOptionTwo")

option1.addEventListener('click', e => {
    e.preventDefault();

    strikethroughActivate(option1,option2)
});

option2.addEventListener('click', e => {
    e.preventDefault();

    strikethroughActivate(option2,option1)
});
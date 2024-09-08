function letterWrapper(e) {
    document.querySelectorAll(e).forEach(e => {
        e.innerHTML = e.textContent.replace(/\w/g, "<span class='js-wrapped-letter js' style='display:inline-block'>$&</span>")
    })
}

function wordWrapper(e) {
    document.querySelectorAll(e).forEach(e => {
        e.innerHTML = e.textContent.replace(/\w+/g, "<span class='js-wrapped-word js' style='display:inline-block'>$&</span>")
    })
}

function lineWrapper(e) {
    document.querySelectorAll(e).forEach(e => {
        e.innerHTML = e.textContent.replace(/.+$/gm, "<span class='js-wrapped-line js' style='display:inline-block'>$&</span>")
    })
}

function jsQ(e) {
    try {
        document.querySelectorAll(e).forEach(e => {
            e.classList.add("js")
        })
    } catch (e) {
        console.log(e)
    }
}

function jsE(e) {
    try {
        e.classList.add("js")
    } catch (e) {
        console.log(e)
    }
}

function removeClass(e, s) {
    e.classList.remove(s)
}

function removeClasses(e, s) {
    s.forEach(s => {
        e.classList.remove(s)
    })
}

function addClass(e, s) {
    e.classList.add(s)
}

function addClasses(e, s) {
    s.forEach(s => {
        e.classList.add(s)
    })
}

$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
});

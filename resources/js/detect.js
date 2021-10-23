
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById("body").classList.add("dark")
    document.getElementById("body").classList.remove("light")
} else {
    document.getElementById("body").classList.add("light")
    document.getElementById("body").classList.remove("dark")
}
document.getElementById("body").classList.add("jsedited")



//transition: background-color .5s, background .5s, color .5s;

//<link rel="stylesheet" href="darkmodeanimate.css">


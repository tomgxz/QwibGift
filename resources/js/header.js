function toggleMobileItemList() {

    if (document.getElementById("header-burger").classList.contains("opened")) {
        document.querySelectorAll('.header-item').forEach(item => {
            if (!(item.classList.contains("mobile-shown"))) {
                item.classList.add("mobile-shown")
            }
        });
    } else {
        document.querySelectorAll('.header-item').forEach(item => {
            if (item.classList.contains("mobile-shown")) {
                item.classList.remove("mobile-shown")
            }
        });
    }
    
}
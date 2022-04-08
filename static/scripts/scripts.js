var menuContainers = document.querySelectorAll(".menu")
console.log(menuContainers)

menuContainers.forEach(item => item.addEventListener("mouseover", (event) => setTimeout(function (event) {
    menuContainers.forEach(item => {
        item.classList.add("full")
        item.querySelector(".mask").classList.add("full")
    })
}, 10)))

menuContainers.forEach(item => item.addEventListener("mouseout", (event) => setTimeout(function (event) {
    menuContainers.forEach(item => {
        item.classList.remove("full")
        item.querySelector(".mask").classList.remove("full")
    })
}, 10)))
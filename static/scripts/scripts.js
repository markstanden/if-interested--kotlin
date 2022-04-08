const menuContainers = document.querySelectorAll(".menu")
menuContainers.forEach(item => item.addEventListener("mouseover", onMouseover(menuContainers)))
menuContainers.forEach(item => item.addEventListener("mouseout", onMouseout(menuContainers)))

function onMouseover(group) {
    return (event) => setTimeout(function (event) {
        group.forEach(element => {
            element.classList.add("full")
            element.querySelector(".start-hidden").classList.add("full")
        })
    }, 100)
}

function onMouseout(group) {
    return (event) => setTimeout(function (event) {
        group.forEach(element => {
            element.classList.remove("full")
            element.querySelector(".start-hidden").classList.remove("full")
        })
    }, 100)
}
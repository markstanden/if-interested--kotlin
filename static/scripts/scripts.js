const menuContainers = document.querySelectorAll(".menu")
menuContainers.forEach(item => item.addEventListener("mouseover", onMouseover(menuContainers)))
menuContainers.forEach(item => item.addEventListener("mouseout", onMouseout(menuContainers)))

function onMouseover(group) {
    return (event) => group.forEach(elementInGroup => {
        elementInGroup.classList.add("full")
        setTimeout(function (event) {
            elementInGroup.querySelectorAll(".start-hidden")
                .forEach(hiddenChildElement => hiddenChildElement.classList.add("full"))
        }, 1000)
    })
}

function onMouseout(group) {
    return (event) => group.forEach(elementInGroup => {
        elementInGroup.querySelectorAll(".start-hidden")
            .forEach(hiddenChildElement => hiddenChildElement.classList.remove("full"))
        elementInGroup.classList.remove("full")
        setTimeout(function (event) {
            elementInGroup.classList.remove("full")
        }, 1000)
    })
}
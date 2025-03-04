const oneOneList = document.querySelectorAll(".one-one-animated")
const oneOneLi = document.querySelectorAll(".one-one-li")
const oneOneDetailsContainer = document.querySelector("#one-one-li-details-container-sm")

const oneOneIntro = [
    {
        opacity: 0,
        transform: "translateY(5rem)"
    },
    {
        opacity: 1,
        transform: "translateY(0)"
    }
]

const oneOneOutro = [
    {
        opacity: 1,
    },
    {
        opacity: 0,
    }
]

const oneOneIntroFunc = () => {
    oneOneList.forEach((item, index) => {
        item.style.animation = `one-one-intro 300ms ${index*100}ms forwards ease-in-out`
    })
    // oneOneList.forEach((item, index) => {
    //     item.animate(oneOneIntro, {
    //         duration: 300,
    //         fill: "forwards",
    //         easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    //         delay: index*100,
    //     })
    // })
}

const oneOneOutroFunc = () => {
    oneOneList.forEach((item, index) => {
        item.style.animation = `one-one-outro 300ms ${index*100}ms forwards ease-in-out`
    })
    // oneOneList.forEach((item, index) => {
    //     item.animate(oneOneOutro, {
    //         duration: 500,
    //         fill: "forwards",
    //         easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    //         delay: index*100,
    //     })
    // })
}

oneOneLi.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
        oneOneDetailsContainer.innerHTML = item.querySelector(".one-one-li-details-container").innerHTML
        oneOneDetailsContainer.style.height = "initial"
        oneOneDetailsContainer.style.padding = "0.5rem"
        oneOneDetailsContainer.style.transform = "translateY(-110%)"
    })
    item.addEventListener('mouseleave', (e) => {
        oneOneDetailsContainer.style.height = "0"
        oneOneDetailsContainer.style.padding = "0 0.5rem"
        oneOneDetailsContainer.style.transform = "translateY(0%)"
    })
})
const frontEndSkills = [
    {name : "html", percent : 90},
    {name : "css", percent : 75},
    {name : "js", percent : 50},
    {name : "bootstrap", percent : 35},
]

const backEndSkills = [
    {name : "Node Js", percent : 90},
    {name : "Mongo DB", percent : 75},
    {name : "SQL", percent : 50},
    {name : "Express Js", percent : 35},
]

const fe = document.getElementById("frontend")
const be = document.getElementById("backend")

display(frontEndSkills, fe)
display(backEndSkills, be)

function display (arr, el) {
    for (const item of arr) {
        el.innerHTML += `
        <div class="progress-bar">
        <div class="progress" style="width:${item.percent}%">${item.name}</div>
    </div> `
    }
}

gsap.registerPlugin(ScrollTrigger)

gsap.from(".progress", {
    width: 0, duration: 2, scrollTrigger: ".progress"
})

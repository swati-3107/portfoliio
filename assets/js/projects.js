const projects =  [
   {
    name: "Todo",
    image: "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    url: "https://www.google.com/",
    desc: "lorem"
   },
   {
    name: "Game",
    image: "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    url: "https://www.google.com/",
    desc: "lorem"
   },
   {
    name: "Money",
    image: "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    url: "https://www.google.com/",
    desc: "lorem"
   },
   {
    name: "Red Bus",
    image: "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    url: "https://www.google.com/",
    desc: "lorem"
   },
]

let str = ""
for (const item of projects) { 
    str += `
    <div class="card">
    <img src="${item.image}" alt="">
    <div class="card-body">
    <h1>${item.name}</h1>
    <p>${item.desc}</p>
    <a href="${item.url}">Visit</a>
    </div>
    </div> `
    
}
document.getElementById("projects").innerHTML = str

gsap.registerPlugin(ScrollTrigger)


gsap.from(".card", {
    // scrollTrigger: ".card",
    scrollTrigger: {
        trigger: ".card",
        scrub: 1,
        // start: "top 900px"
        end: "+=200"
    },
    scale: 0, 
    stagger: 0.5
})
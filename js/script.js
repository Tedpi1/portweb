const projects=[
    {
        id:1,
        title:"AI Text Summarizer App",
        category:"AI Development",
        img:"./images/portfolio/AI.jpg",
        text:"https://52df8688-d7c6-40db-9910-7bddb67cbae3-00-2wcnxwjsg2sd0.spock.replit.dev/"
    },
    {
        id:1,
        title:"AI Text Summarizer",
        category:"Development",
        img:"./images/portfolio/AI.jpg",
        text:"https://52df8688-d7c6-40db-9910-7bddb67cbae3-00-2wcnxwjsg2sd0.spock.replit.dev/"
    }
]
const content=document.querySelector(".portfolio-item");
const filterBtn=document.querySelector(".btn-portfolio");
window.addEventListener("DOMContentLoaded", function(){
    //console.log("AI developer")
    displayContent(projects)
    const categories= projects.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    },['all'])
    console.log(categories)
})
function displayContent(){
    let displayPojs=projects.map(function(item){
        //console.log(item )
        return `<h1><div class="portfolio-item-inner shadow-box">
                                    <h2>${item.title}</h2>
                                    <a href="${item.text}">
                                        <div class="portfolio-img">
                                            <img src="${item.img}">
                                        </div>
                                    </a>
                                </div></h1>`
    })
    displayPojs=displayPojs.join("")
    //console.log(displayPojs)
    content.innerHTML=displayPojs
}

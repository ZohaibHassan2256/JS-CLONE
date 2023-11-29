const generatememebtn = document.querySelector(".meme-generator .btn")
const memeimage = document.querySelector(".meme-generator img")
const memetitle = document.querySelector(".MEME-TITLE")
const memeauthor = document.querySelector(".meme-author")

const updatedetails = (url , title,author) => {
    
    memeimage.setAttribute("src", url )
    memetitle.innerHTML = title;
    memeauthor.innerHTML = `Meme by = ${author}`;
    
}
const generatememe = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(response => response.json())
    .then(data => {
        updatedetails(data.url, data.title, data.author)
    })
}


generatememebtn.addEventListener("click", generatememe);
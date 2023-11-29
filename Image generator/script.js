const accesskey = "CkwU1dCQUjV3qz79fbbDaOgcgdHlCZ8s8LT7blMGK9U";
const formel = document.querySelector("form");
const inputel = document.getElementById("search-input");
const searchresults = document.querySelector(".search-results"); // Add a dot for class selector
const showmore = document.getElementById("Show-more-button");

let inputdata = "";
let page = 1;

async function searchImages() {
    inputdata = inputel.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`; // Use backticks for template literals
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchresults.innerHTML = "";
    }

    results.map((result) => {
        const imagewrapper = document.createElement("div");
        imagewrapper.classList.add("search-result"); // Correct the class name
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description; // Correct the property name
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description; // Correct the property name

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchresults.appendChild(imagewrapper);
    });

    page++;
    if (page > 1) {
        showmore.style.display = "block";
    }
}

formel.addEventListener("submit", (event) => {
    event.preventDefault(); // Add parentheses
    page = 1;
    searchImages();
});

showmore.addEventListener("click", () => {
    searchImages();
});

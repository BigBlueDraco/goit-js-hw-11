import { displayGallery, displayNextPage } from "./js/displayGallery";
var lightbox = new SimpleLightbox('.gallery a');

const search = document.querySelector("#js-search-form");
const loadMore = document.querySelector(".js-load-more");


loadMore.addEventListener("click", (e)=>{
    displayNextPage();
})

search.addEventListener("submit", (e)=>{
    e.preventDefault();
    displayGallery(e.target.elements.searchQuery.value)
})


import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { displayGallery, displayNextPage } from "./js/displayGallery";



const search = document.querySelector("#js-search-form");
const loadMore = document.querySelector(".js-load-more");


loadMore.addEventListener("click", (e)=>{
    displayNextPage();
    // lightbox.refresh();
})

search.addEventListener("submit", (e)=>{
    e.preventDefault();
    displayGallery(e.target.elements.searchQuery.value);
    // lightbox.refresh();
})


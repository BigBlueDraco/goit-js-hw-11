import { displayGallery } from "./js/displayGallery";
import {pixabayAPI} from "./js/pixabayAPI"

const search = document.querySelector("#js-search-form")

search.addEventListener("submit", (e)=>{
    e.preventDefault();
    displayGallery(e.target.elements.searchQuery.value)
})


import { pixabayAPI } from "./pixabayAPI";
import Notiflix from "notiflix";
const countryInfo = document.querySelector(".js-gallery");
const loadMore = document.querySelector(".js-load-more");
loadMore.style.display ='none';
let curentHits, maxHits;
export async function displayGallery(q){
    const {hits, totalHits} = await pixabayAPI.fetchImg(q);
    countryInfo.innerHTML = galleryMarkup(hits);
    curentHits=0;
    
    maxHits = totalHits;
    Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`)
    loadMore.style.display ='inline-block';
}
export async function displayNextPage(){
  if(maxHits <= curentHits){
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    loadMore.style.display ='none';
    return;
  }
  try{
  const {hits} = await pixabayAPI.loadNextPage();
  countryInfo.insertAdjacentHTML("beforeend", galleryMarkup(hits));
  curentHits+=hits.length;
  }catch(e){
  }
}

function galleryMarkup(arr = []){
  if(arr.length===0){
    Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.")
    return "";
  }
    return arr.reduce(
        (acc, elem) => {
            const {
                largeImageURL,
                likes,
                comments,
                downloads,
                views
            }= elem;
            acc += 
            `
            <div class="photo-card">
            <img
              class="photo-card__img"
              src="${largeImageURL}"
              alt=""
              loading="lazy"
            />
            <div class="photo-card__info">
              <p class="photo-card__info-item">
                <b>Likes</b> ${likes}
              </p>
              <p class="photo-card__info-item">
                <b>Views</b> ${views}
              </p>
              <p class="photo-card__info-item">
                <b>Comments</b> ${comments}
              </p>
              <p class="photo-card__info-item">
                <b>Downloads</b> ${downloads}
              </p>
            </div>
          </div>
          `;
        return acc;
    }, "");
}
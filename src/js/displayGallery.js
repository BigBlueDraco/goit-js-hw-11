import { pixabayAPI } from "./pixabayAPI";

export async function displayGallery(){
    const res = await pixabayAPI.fetchImg("cat");
    const countryInfo = document.querySelector(".js-gallery");
    countryInfo.insertAdjacentHTML = galleryMarkup(res);
    console.log(res);
}

function galleryMarkup(arr = []){
    return arr.reduce(
        (acc, elem) => {
            const {
                largeImageURL,
                likes,
                comments,
                downloads,
                views
            }= elem;
            console.log(elem.largeImageURL)
            console.log(elem.webformatURL)
            acc += 
            `<div class="photo-card">
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
          </div>`;
        return acc;
    }, "");
}
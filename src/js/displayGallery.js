import { pixabayAPI } from "./pixabayAPI";

export async function displayGallery(q){
    const res = await pixabayAPI.fetchImg(q);
    const countryInfo = document.querySelector(".js-gallery");
    countryInfo.innerHTML = galleryMarkup(res);
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
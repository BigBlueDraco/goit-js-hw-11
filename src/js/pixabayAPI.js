import axios from "axios";

export class pixabayAPI {
    static baseUrl = "https://pixabay.com/api/";
    static query = "";
    static key = "29897039-6335e8959bf94ffd3acb5a033"
    static image_type = "photo"
    static per_page = "10"
    static orientation = "horizontal"
    static safesearch = "true"
    static page = 1;
    static async fetchImg(q = "") {
        if (q.trim()) {
            pixabayAPI.query = q;
        }
        const resp = await axios.get(`${pixabayAPI.baseUrl}`, {
            params: {
                key: pixabayAPI.key,
                q: pixabayAPI.query,
                image_type: pixabayAPI.image_type,
                per_page: pixabayAPI.per_page,
                orientation: pixabayAPI.orientation,
                safesearch: pixabayAPI.safesearch,
                page: pixabayAPI.page,
            }
        })
        return resp.data;
    }
    static async loadNextPage() {
        pixabayAPI.page += 1;
        const res = await pixabayAPI.fetchImg();
        return res;
    }
}

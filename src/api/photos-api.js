import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const KEY = "AC_nMjspbvXco3DlqUFSXU_Nw6YXiCWSUT2nb4dvqGE";

export const fetchPhotosWithQuery = async (query, page) => {
    const response = await axios.get("/search/photos", {
        params: {
            client_id: KEY,
            query: query,
            page: page,
            per_page: 12,
            orientation: "landscape",
        }
    });
    return response.data;
};
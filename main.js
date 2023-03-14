import { createButtonReadMorePost } from "./js/buttonReadMore.js";
import { handlePosts } from "./js/listPosts.js";

export const mainContainer = document.querySelector( "#container-main" );

export async function populateMainContainer() {
    await handlePosts();

    createButtonReadMorePost();
}

populateMainContainer();

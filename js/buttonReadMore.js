import {
    mainContainer,
    populateMainContainer
} from "../main.js";
import { hasNextPage } from "./listPosts.js";

export function createButtonReadMorePost() {
    const buttonReadMorePost = document.createElement( "button" );

    buttonReadMorePost.id = "read-more-posts";
    buttonReadMorePost.innerText = "Ler mais...";

    hasNextPage === false && buttonReadMorePost?.classList.add( "hidden" );

    buttonReadMorePost.onclick = async function ( e ) {
        e.preventDefault();

        // @ts-ignore
        mainContainer.innerHTML = "";

        await populateMainContainer();
    };

    mainContainer?.insertAdjacentElement( "beforeend", buttonReadMorePost );
}

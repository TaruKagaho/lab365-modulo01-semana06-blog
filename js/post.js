import { createModal } from "../components/modal/modal.js";

export function createPost( postExample, localToAppend ) {
    const sectionPost = document.createElement( "section" );
    sectionPost.classList.add( "container-post" );
    sectionPost.setAttribute( "data-user-id", postExample.userId );
    sectionPost.setAttribute( "data-post-id", postExample.id );
    sectionPost.onclick = async function () {
        createModal( postExample );
    };

    const titlePost = document.createElement( "h3" );
    titlePost.innerText = postExample.title;

    const bodyPost = document.createElement( "p" );
    bodyPost.innerText = postExample.body;

    sectionPost?.append(
        titlePost,
        bodyPost,
    );
   
    localToAppend?.appendChild( sectionPost );
}

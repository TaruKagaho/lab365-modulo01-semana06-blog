import { createPost } from "../../js/post.js";
import { handleComments } from "../../js/listComments.js";

export const modalContainer = document.querySelector( "#container-modal" );

export function createModal( postChoosed ) {
    // @ts-ignore
    modalContainer.innerHTML = "";
    modalContainer?.classList.add( "modal" );
    modalContainer?.classList.remove( "hidden" );

    const closeImg = "./imgs/close-circle-fill.svg";    
    const closeButton = document.createElement( "img" );
    closeButton.setAttribute( "src", closeImg );
    // closeButton.src = closeImg;
    closeButton.onclick = function () {
        modalContainer?.classList.add( "hidden" );
    };

    modalContainer?.appendChild( closeButton );

    const modalTitle = document.createElement( "h2" );
    modalTitle.innerText = "Comentários do post selecionado";

    modalContainer?.appendChild( modalTitle );

    createPost( postChoosed, modalContainer );

    handleComments( postChoosed.id );
}

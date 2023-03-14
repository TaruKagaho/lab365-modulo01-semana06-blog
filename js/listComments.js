import { modalContainer } from "../components/modal/modal.js";
import { createComment } from "./comment.js";

async function getComments( postId ) {
    const res = await fetch( `https://jsonplaceholder.typicode.com/posts/${ postId }/comments` );

    const data = await res.json();

    return data;
}

export async function handleComments( postId ) {
    const commentList = await getComments( postId );
    
    const containerCommentList = document.createElement( "div" );
    containerCommentList.classList.add( "container-list-comments" );

    modalContainer?.appendChild( containerCommentList );

    commentList.forEach( post => createComment( post, containerCommentList ) );
}

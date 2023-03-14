export function createComment( commentExample, localToAppend ) {
    const sectionComment = document.createElement( "section" );
    sectionComment.classList.add( "container-comment" );
    sectionComment.setAttribute( "data-comment-id", commentExample.id );
    sectionComment.setAttribute( "data-post-id", commentExample.postId );

    const commentAuthor = document.createElement( "strong" );
    commentAuthor.innerText = commentExample.name;

    const bodyComment = document.createElement( "p" );
    bodyComment.innerText = commentExample.body;

    sectionComment?.append(
        commentAuthor,
        bodyComment,
    );

    localToAppend?.appendChild( sectionComment );
}

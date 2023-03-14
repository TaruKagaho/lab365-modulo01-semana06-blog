import { mainContainer } from "../main.js";
import { createPost } from "./post.js";

let postList = [];
export let hasNextPage = true;

let currentPage = 1;
let currentLimit = 20;

async function getPosts() {
    const res = await fetch( `https://jsonplaceholder.typicode.com/posts?_page=${ currentPage }&_limit=${ currentLimit }` );

    const data = await res.json();

    return data;
}

export async function handlePosts() {
    const tmpPostList = await getPosts();

    if ( tmpPostList.length === 0 ) {
        hasNextPage = false;
    } else {
        currentPage++;
        postList = [
            ...postList,
            ...tmpPostList,
        ];
    }

    postList.forEach( post => createPost( post, mainContainer ) );
}

// higher order function is function ,over a funvtion which mean the parameter of the function should be a another function.
import { posts } from "./HOFunction.js";
posts.forEach((post) => {
  console.log(post);
});
// to clear the function
console.clear();

// to filter the specific data
const filterPost = posts.filter((post) => {
  return post.version === 6.1;
});
console.log(filterPost);
// to map specifically
const mappedPost = filterPost.map((post) => {
  return post.name;
});
console.log(mappedPost);

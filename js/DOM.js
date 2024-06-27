// DOM is a standard for accessing the document
// javascript can change,remove,add,create,react all html elements and attribute and events and chage the style in css.
// const view1 = document.getElementById("view1");
// console.log(view1);
document.addEventListener("DOMContentLoaded", function () {
  const view1 = document.getElementById("view1");
  console.log(view1);
  view1.style.display = "flex";

  // another method to get the html document

  const view2 = document.querySelector("#view2");
  console.log(view2);
  view2.style.display = "flex";

  // acces throug the class
  const views = document.getElementsByClassName("view");
  console.log(views);
  // another way of access theough class- this method helps to acees the inner elements eg. div inside the selection
  const sameView = document.querySelectorAll(".view");
  console.log(sameView);

  // line 23 ,accessing the element
  const divs = view1.querySelectorAll("div");
  console.log(divs);

  // same as previous uisng tag name
  const sameDiv = view1.getElementsByTagName("div");
  console.log(sameDiv);

  // to select more specific in div(even)
  const evenDiv = view1.querySelectorAll("div:nth-of-type(2n)");
  console.log(evenDiv);

  // style
  evenDiv[4].style.backgroundColor = "blue";

  for (let i = 0; i < evenDiv.length; i++) {
    evenDiv[i].style.width = "140px";
  }

  // and became too more specific to write inner value
  const navTxt = document.querySelector("nav h1");
  console.log(navTxt);
  navTxt.textContent = "Document Object Model";

  // to modify or overwrite the complete data from include the element
  const navBar = document.querySelector("nav");
  navBar.innerHTML = "<h1>D-O-M</h1> <p>Javascript</p>";
  console.log(navBar);
  navBar.style.justifyContent = "space-around";

  // The TREE
  //DOM is like a tree structure we can define lot of brach ,so we can navigfate anyware as a child

  console.log(evenDiv[0]);
  // retriving the parent element
  console.log(evenDiv[0].parentElement);
  // and so call all the child belong to the parent
  console.log(evenDiv[0].parentElement.children);
  // to define all the elements inside the child
  console.log(evenDiv[0].parentElement.childNodes);
  // to check there have a child or not -t/f
  console.log(evenDiv[0].parentElement.hasChildNodes());
  // to know the last child(the enter)
  console.log(evenDiv[0].parentElement.lastChild);
  // to know the last elements child
  console.log(evenDiv[0].parentElement.lastElementChild);
  // same for first
  console.log(evenDiv[0].parentElement.firstChild);
  console.log(evenDiv[0].parentElement.firstElementChild);
  // to call sibilings-we can continue this by calling next sibling using . and . again
  console.log(evenDiv[0].parentElement.nextElementSibling);
  // navingatie over

  // how we can add element by own by using js
  view1.style.display = "none";
  view2.style.display = "flex";
  view2.style.flexDirection = "row";
  view2.style.flexWrap = "wrap";
  view2.style.margin = "10px";

  // to remove the element
  console.log(view2.lastElementChild);
  view2.lastElementChild.remove();

  // adding an element and styling it --HERE we used to chage this element into function to avoid code re-use and for the use of loop.
  const createDiv = (parent, iterate) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iterate; //"Hey There!";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.color = "black";
    newDiv.style.width = "120px";
    newDiv.style.height = "120px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
    // loop
  };
  for (i = 1; i < 11; i++) {
    createDiv(view2, i);
    // here something problem in view2 style
  }
});

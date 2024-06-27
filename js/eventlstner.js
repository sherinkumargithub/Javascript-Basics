// // event listner
/*
// document.addEventListener("DOMContentLoaded", function () {
const view = document.querySelector("#view2");
// console.log(view);
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
// console.log(h2);
// syntax for event listner
// .addEventListners(event, function,useCapture)
const action = () => {
  alert("hello developers");
};
h2.addEventListener("click", action, false);
// and also we can remove the event
h2.removeEventListener("click", action, false);
// but we cant remove event on anonymous function. eg;event1-click
/*
h2.addEventListener("click", function (event) {
  console.log(event.target);
  event.target.textContent = " community";
});
------
// event2- readystatechange --which means the browser completely loaded or executed the data from the server to site.
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    // used here to initalize the task or function
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      //   event.stopPropagation();
      //   view.style.backgroundColor = "purple";
      view.classList.toggle("purple");
      view.classList.toggle("blue");
    }
    // true
  );

  div.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation();
      div.style.backgroundColor = "grey";
    }
    // true
  );

  h2.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation();
      // event.target.textContent = "frontend";5
      const myTxt = event.target.textContent;
      // ternory
      myTxt === "webDeveloper"
        ? (event.target.textContent = "fronted")
        : (event.target.textContent = "webDeveloper");
    }
    // true
  );  
  // the above process is know as event bubbling up up..1
  // here to avoid bubbling or propagation we use the function call stoppropagation.2
  //   to get bubbling down we can change the default false usecapture into true though the process may reverse but it not visible.3
  //   after clicking the view,div .. the color if you need to repeat mean you use toggle method before that the color should mentioned in a class.4
  // but toggle not applicable on text content so here use simple if or ternary logic insted.5
};
*/

// event listner on form
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};

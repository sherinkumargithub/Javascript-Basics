// web storage api
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    initApp();
  }
});

const initApp = () => {
  const myContent = ["Earn", "grow", "give"];
  const myObject = {
    name: "sherin",
    myContent: ["Earn", "grow", "give"],
    logName: function () {
      console.log(this.name);
    },
  };

  window.sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));

  const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
  console.log(mySessionData);
};
// here we can use localstorage and also it work without window command.

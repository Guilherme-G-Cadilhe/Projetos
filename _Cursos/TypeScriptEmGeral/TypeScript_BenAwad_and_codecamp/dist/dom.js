"use strict";
const someElement = document.querySelector(".foo");
someElement.addEventListener("blur", (event) => {
    const target = event.target;
    console.log("event", target.value);
});

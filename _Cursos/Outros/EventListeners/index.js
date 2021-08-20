const divs = document.querySelectorAll("div");

addGlobalEventListener("click", "div", () => {
  console.log("hi");
});

function addGlobalEventListener(tipo, seletor, callback) {
  document.addEventListener(tipo, (e) => {
    if (e.target.matches(seletor)) {
      callback(e);
    }
  });
}

// divs.forEach((div) => {
//   div.addEventListener("click", () => {
//     console.log("hi");
//   });
// });

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener("click", (e) => {
//   console.log("Grandparent Bubble");
// });

// parent.addEventListener("click", printHi);
// setTimeout(() => {
//   parent.removeEventListener("click", printHi);
// }, 2000);
// function printHi() {
//   console.log("Hi");
// }

// parent.addEventListener("click", (e) => {
//   console.log("Parent Bubble");
// },{once: true});

// child.addEventListener("click", (e) => {
//   console.log("Child Bubble");
// });

// document.addEventListener("click", (e) => {
//   console.log("Document Bubble");
// });

// event.stopPropagation();

// // Bubble event é quando você clica no elemento e todos os elementos parentes são clicados também, indo do elemento mais proximo (o que vc clicou) para o maior da hierarquia ( o documento )
// grandparent.addEventListener("click", (e) => {
//   console.log("Grandparent");
// });
// parent.addEventListener("click", (e) => {
//   console.log("Parent");
// });
// child.addEventListener("click", (e) => {
//   console.log("Child");
// });
// document.addEventListener("click", (e) => {
//   console.log("Document");
// });

// // Capture event é o contrario, começa do documento e vai descendo na hierarquia até o elemento onde você clicou.

// grandparent.addEventListener("click", (e) => {
//   console.log("Grandparent Capture");
// },{capture: true});

// parent.addEventListener("click", (e) => {
//   console.log("Parent Capture");
// },{capture: true});

// child.addEventListener("click", (e) => {
//   console.log("Child Capture");
// },{capture: true});

// document.addEventListener("click", (e) => {
//   console.log("Document Capture");
// },{capture: true});

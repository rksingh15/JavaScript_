
/*
// let btn1 = document.querySelector("#btn1");

// 

// btn1.onclick = () => {
//   console.log(" am click ");
//   alert("click js btn");
// };

// let divv = document.querySelector("#divv");

// divv.onmouseenter = () => {
//   console.log(" am mouse enter ");
//   divv.style.backgroundColor = "lightblue";
// };
// divv.onmouseleave = () => {
//   console.log(" am mouse leave ");
//   divv.style.backgroundColor = "white";
// };
// 

// // Event object
// // btn1.onclick = (e) => {
// //   console.log( e);
// //     console.log(e.type);
// //     console.log(e.target);
// //     console.log(e.clientX);
// //     console.log(e.clientY);

  
// // };

// function handleClick(e) {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX);
//   console.log(e.clientY);
// }
// // btn1.addEventListener("click", (e) => {
// //   console.log(" am click using addEventListener ");
// //   alert("click js btn using addEventListener");
// // });

// //-------------------------------------------
// // btn1.addEventListener("click", handleClick);
---------------------------------------------

*/
let bb = "dark";
let btn1 = document.querySelector("#btn1");

function handleClick() {
  if (bb === "dark") {
    document.querySelector("body").style.backgroundColor = "blue";
    bb = "light";  // value change karo
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    bb = "dark";   // fir se dark kar do
  }
}

btn1.addEventListener("click", handleClick);



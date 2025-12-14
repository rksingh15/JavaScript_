// let h2 = document.querySelector("#myh2");
// h2.innerText = h2.innerText+" singh Kushwaha";

// let divv = document.querySelectorAll(".box");
// divv[0].innerText="New Value of box 1";


//attribute 

// let Abc = document.querySelector("h2");
// // let check = Abc.getAttribute("id");
// // console.log(check);
// //-----------------------------------------------------
// //for changing attribute
// console.log(Abc.setAttribute("id","heading"));

// //-----------------------
// // ------------------------------
// //styling through js 
// Abc.style.color="red";
// Abc.style.backgroundColor="yellow";
// Abc.style.border="2px solid black";

//-----------------
//insert
let button = document.createElement("button");
button.innerText="Click Me";
button.style.padding="10px 20px ";
button.style.fontSize="16px";
button.style.cursor="pointer";
button.style.color="white";
button.style.backgroundColor="blue";
//
document.querySelector("body").prepend(button);






// DOM element sselection
let div=document.querySelector(".container");
let btn=document.querySelector("button");
let heading=document.querySelector("h1");
let para=document.querySelector("p");

// Variable declaration
let number=10;
let message="Web Development";
const array=['A','B','C','D','E'];

// DOM manipulation
heading.style.fontFamily="Times New Roman";
div.style.height="200px";
div.style.width="200px";
div.style.margin="40px";
para.style.padding="12px";
div.style.backgroundColor="#2d9285";
btn.style.backgroundColor="#b1938b";
btn.style.color="white";
btn.style.border= "none";
btn.style.borderRadius="5px";
btn.style.height="40px";
btn.style.width="80px";
// btn.style.marginTop="20px";
btn.style.marginLeft="60px";
btn.style.cursor="pointer";

// Event handeling
btn.addEventListener("click",e =>{
    alert("hello world");
    console.log("button was clicked");
})

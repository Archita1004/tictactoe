let boxes=document.querySelectorAll(".box");
let restart=document.querySelector("#restart");
let newgame=document.querySelector("#newgame");
let msg=document.querySelector("#mess");
let design=document.querySelector(".design");
const winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turno=true;
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
      //const boxid=box.getAttribute("id");
      //console.log("You clicked",boxid);
      if(turno==true){
      box.innerText="O";
      turno=false;
      }
      else{
        box.innerText="X";
        turno=true;
      }
      box.disabled=true;
      wingame();
     });
});
const wingame=()=>{
  for(let pattern of winpattern){
    //console.log(pattern)
 //console.log(pattern[0],pattern[1],pattern[2]);
//console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
let p1=boxes[pattern[0]].innerText;
let p2=boxes[pattern[1]].innerText;
let p3=boxes[pattern[2]].innerText;
if(p1!="" && p2!="" && p3!=""){
if(p1==p2 && p2==p3){
  msg.style.backgroundColor="rgb(32, 182, 50)";
  let key=msg.innerText="The winner is player "+p1+"!!";
  disabledbtn();
  newgame.classList.remove("ngbtn");
  console.log(key);
}}
}
}
const disabledbtn=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const resetgame=()=>{
turno=true;
msg.style.backgroundColor="rgb(223, 111, 205)";
let readme=msg.innerText="LET'S START";
console.log(readme);
enableBoxes();
}

newgame.addEventListener("click",()=>{
  resetgame();
})

restart.addEventListener("click",()=>{
    resetgame();
});

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
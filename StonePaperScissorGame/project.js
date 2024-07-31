let us=0;
let cs=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#result")
const usp=document.querySelector("#us")
const csp=document.querySelector("#cs")

const gcomp=()=>{
    const options=["rock","paper","scissors"];
   const rand= Math.floor(Math.random() * 3)
   return options[rand]
}
const draw=()=>{
    console.log("game was draw")
    msg.innerText="Game was draw Play again!"
    msg.style.backgroundColor="orange";
    
}
const showwinner=(userwin,uc,cc)=>{
   if(userwin){
    us++;
    usp.innerText=us;
    msg.innerText=`You win! Your ${uc} beats ${cc}`;
    msg.style.backgroundColor="green";

   }
   else{
    cs++
    csp.innerText=cs;
    msg.innerText=`You lost! ${cc} beats your ${uc}`;
    msg.style.backgroundColor="red";
    
   }
}
const playgame=(uc)=>{
    
    const cc=gcomp()
   
    if(uc===cc){
       draw();
    }
    else{
        let userwin=true;
    if (uc==="rock"){
        userwin=cc==="paper" ? false : true;
    } 
    else if(uc==="paper")
    {
        userwin=cc==="scissors" ? false : true;
    } else{
        userwin=cc==="rock" ? false:true;
    }
    showwinner(userwin,uc,cc)
}
};
choices.forEach((choice)=>{
   
    choice.addEventListener("click", ()=>{
        const uc=choice.getAttribute("id");
        playgame(uc);
});
});
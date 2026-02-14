let btn=document.querySelectorAll(".box");
let rst=document.querySelector(".rtg")
let turn=true;
let msg=document.querySelector(".msg-cont");
let w=document.querySelector(".w");
let neww=document.querySelector(".new");
let currentPlayer;
let checkwinner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
Xmove=[];
Ymove=[];
const remL=()=>{
    if(Xmove.length>3){
        btn[Xmove[0]].innerText="";
        btn[Xmove[0]].style.backgroundColor="#ffffff"
        btn[Xmove[0]].disabled=false;
        Xmove.shift();
    }
    if(Ymove.length>3){
        btn[Ymove[0]].innerText="";
        btn[Ymove[0]].style.backgroundColor="#ffffff"
        btn[Ymove[0]].disabled=false;
        Ymove.shift();
    }
};
const winner=()=>{
    for(let p of checkwinner){
        let pos1=btn[p[0]].innerText;
        let pos2=btn[p[1]].innerText;
        let pos3=btn[p[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                w.innerText="Winner is"+currentPlayer;
                msg.style.display="flex";
                for(let b of btn){
                    b.disabled=true;
                }
            }
        }
    };
};
btn.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        if(turn){
            element.innerHTML= "X";
            turn=false;
            element.style.backgroundColor="#f66213";
            currentPlayer="player 1"
            Xmove.push(index);
        }else{
            element.innerHTML="O";
            turn=true;
            element.style.backgroundColor="#85f613";
            currentPlayer="player 2"
            Ymove.push(index);
           
        };
        element.disabled=true;
         remL();
        winner()
    })
});

const reset=()=>{
    for(let b of btn){
        b.disabled=false;
        b.innerText="";
        b.style.backgroundColor="#ffffff";
        Xmove=[]
        Ymove=[]
    }
    turn=true;
    msg.style.display="none"  
};
rst.addEventListener("click",()=>{
    reset()
});
neww.addEventListener("click",()=>{
    reset()
});

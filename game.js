const player=JSON.parse(sessionStorage.getItem("player"));
const master_num=sessionStorage.getItem("master_num");
const insider_num=sessionStorage.getItem("insider_num");
let is_Counting=true;
Countdown()

let time=300
for(let i in player){
    let newdiv=document.createElement("div")
    if(i==master_num){
        newdiv.innerHTML="<p>"+player[i]+"  マスター</p>"
    }else{
        newdiv.innerHTML="<p>"+player[i]+"    </p>"
        let newbtn=document.createElement("button");
        newbtn.textContent="決定!"
        newbtn.value=i;
        newbtn.onclick=function(){
            if( confirm(`${player[this.value]}がインサイダーでよろしいでしょうか？`) ){
                sessionStorage.setItem("result",this.value)
                window.location.href = './result.html';
            }
        }
        newdiv.querySelector("p").append(newbtn)
    }
    document.querySelector("#playerlist").append(newdiv)
}

function Countdown(){
    const Countdown=document.querySelector("#Countdown");
    intervalID=setInterval(() => {
        Countdown.textContent="残り時間 "+time+"秒";
        time--
        if(time<0){
            Countdown.innerHTML="<strong>終了!!</strong>";
            clearInterval(intervalID);
            is_Counting=false;
        }
    }, 1000);
}

function plus(){
    time+=10;
    if(!is_Counting){
        is_Counting=true;
        this.Countdown();
    }
    const Countdown=document.querySelector("#Countdown");
    Countdown.textContent="残り時間 "+time+"秒";
}

function minus(){
    const Countdown=document.querySelector("#Countdown");
    time-=10;
    if(time<0){
        time=-1;
        Countdown.innerHTML="<strong>終了!!</strong>";
    }else{
        Countdown.textContent="残り時間 "+time+"秒";
    }
}
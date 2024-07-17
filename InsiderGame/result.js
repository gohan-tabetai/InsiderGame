const player=JSON.parse(sessionStorage.getItem("player"));
const master_num=sessionStorage.getItem("master_num");
const insider_num=sessionStorage.getItem("insider_num");
const theme=sessionStorage.getItem("answer");
const result=sessionStorage.getItem("result")

document.querySelector("#theme").textContent=`お題 「${theme}」`

if(result==insider_num&&result!=null){
    document.querySelector("#result").textContent="庶民の勝ち!"   
}else if(result!= null){
    document.querySelector("#result").textContent="インサイダーの勝ち!"
}
for(let i in player){
    let newdiv=document.createElement("div")
    newdiv.innerHTML="<p>"+player[i]+"  </p>"
    if(i==insider_num){
        newdiv.querySelector("p").textContent+=" : インサイダー"
    }else if(i==master_num){
        newdiv.querySelector("p").textContent+=" : マスター"
    }else{
        newdiv.querySelector("p").textContent+=" : 庶民"
    }
    document.querySelector("#playerlist").append(newdiv)
}
//sessionStorage.clear()
function to_start(){
    window.location.href = '/';
}
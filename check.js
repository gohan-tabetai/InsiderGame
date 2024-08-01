let num=0;
let check_tmp=document.querySelector("#check").cloneNode(true)
let position_tmp=document.querySelector("#position").cloneNode(true)
const player=JSON.parse(sessionStorage.getItem("player"));
const master_num=sessionStorage.getItem("master_num")
const insider_num=sessionStorage.getItem("insider_num")
const answer=sessionStorage.getItem("answer")
if(!player ||!master_num ||!insider_num||!answer){
    window.location.href = "./"
}

change_template()

document.querySelector("#Text").append(check_tmp.content)

function change_template(){
    check_tmp=document.querySelector("#check").cloneNode(true)
    position_tmp=document.querySelector("#position").cloneNode(true)
    
    check_tmp.content.querySelector("p").textContent="あなたは"+player[String(num)]+"ですか?"
    if(num==master_num){
        position_tmp.content.querySelector("p").textContent="あなたはマスターです"
        
        theme=document.createElement("p")
        theme.textContent='お題は「'+answer+'」です'
        position_tmp.content.querySelector("p").append(theme)
    }
    else if(num==insider_num){
        position_tmp.content.querySelector("p").textContent="あなたはインサイダーです"
        
        theme=document.createElement("p")
        theme.textContent="お題は「"+answer+"」です"
        position_tmp.content.querySelector("p").append(theme)
    }else{
        position_tmp.content.querySelector("p").textContent="あなたは庶民です。"
    }
}
function check(){
    document.querySelector("#Text").textContent=null
    document.querySelector("#Text").append(position_tmp.content);
}
function next(){
    num++;
    if(num>=Object.keys(player).length){
        window.location.href = './game.html';
    }else{
        change_template();
        document.querySelector("#Text").textContent=null;
        document.querySelector("#Text").append(check_tmp.content);
    }
}
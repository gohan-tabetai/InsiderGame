const playerlist=document.querySelector(".playerlist")
const confirm_btn=document.querySelector("#confirm_btn")
const add_btn=document.querySelector("#add_btn")
const delete_btn=document.querySelector("#delete_btn")

loadtheme();

let players={}
if(players=JSON.parse(sessionStorage.getItem("player"))){
    for(let i in players){
        add(players[i]);
    }
}else{
    for(let i=0;i<4;i++){
        add();
    }
}

add_btn.onclick=function(){
    console.log("S")
    add()
}

confirm_btn.onclick=function(){
    players={}
    let players_document=playerlist.querySelectorAll("input")

    for(let i=0;i<players_document.length;i++){
        players[String(i)]=players_document[i].value
    }
    const master_num=Math.floor(Math.random()*Object.keys(players).length)
    let insider_num;
    while(1){
        insider_num=Math.floor(Math.random()*Object.keys(players).length)
        if(insider_num!=master_num){
            break;
        }
    }
    sessionStorage.setItem("player",JSON.stringify(players))
    sessionStorage.setItem("master_num",master_num);
    sessionStorage.setItem("insider_num",insider_num);
    window.location.href = './check.html';
}

function add(name=null){
    const player_num=playerlist.querySelectorAll("input").length
    const new_player="player"+player_num

    new_div=document.createElement("div")
    new_input=document.createElement("input")
    new_input.id=new_player
    new_input.value= name ? name : new_player;
    new_div.append(new_input)
    playerlist.append(new_div)
}

function del(){
    const player_num=playerlist.querySelectorAll("input").length
    if(player_num<4){
        return
    }
    playerlist.querySelectorAll("input")[player_num-1].remove()
}

async function loadtheme(){
    const response = await fetch('theme.json');
    if (response.ok) {
        const text = await (response.text());
        themes=JSON.parse(text)
        make_answer(themes)
    }
}

function make_answer(themes){
    const n=Math.floor(Math.random()*Object.keys(themes).length)
    const ans=themes[n]
    sessionStorage.setItem("answer",ans);
}
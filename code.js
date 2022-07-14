function compPlay(){
    let roll=Math.floor(Math.random()*3);
    if (roll==0) return "rock"
    else if (roll==1) return "paper"
    else return "scissors"
}

function compare(cmp, plyr ){
    if (cmp=="rock"&&plyr=="scissors") return 0
    else if (cmp=="scissors"&&plyr=="paper") return 0
    else if (cmp=="paper"&&plyr=="rock") return 0
    else if (cmp=="scissors"&&plyr=="rock") return 1
    else if (cmp=="paper"&&plyr=="scissors") return 1
    else if (cmp=="rock"&&plyr=="paper") return 1
    else return 3;  
}

function restart(){
    let btn = document.createElement("button");
    btn.innerHTML = "Play Again?";    
    btn.style.alignSelf="center";
    btn.style.padding="20px 80px";
    document.body.appendChild(btn);
    btn.addEventListener('click',()=>{
        btn.parentNode.removeChild(btn);
        btns.forEach((btn) => {btn.disabled=false}) 
    cs=0
    ps=0

    document.getElementById('cscore').textContent="Computer: "+cs;        
    document.getElementById('pscore').textContent="Player: "+ps;
    
    document.getElementById('winlose').setAttribute('style','font-size:18px');
    document.getElementById('winlose').setAttribute('style','font-weight:normal');
    document.getElementById('winlose').textContent="...";
    });

}

let wl="";
let cs=0;
let ps=0;

const btns=document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let cc=compPlay();
        let result=compare(cc,btn.id);
        if (result==0){
            wl="You Lose!"
            cs+=1
        }
        else if (result==1){
            wl="You win!"
            ps+=1
        }
        else{
            wl="Draw!"
        }
        let msg="Computer played "+cc+"! You played "+btn.id+"! "+wl;
            
        document.getElementById('winlose').textContent=msg;
        document.getElementById('cscore').textContent="Computer: "+cs;        
        document.getElementById('pscore').textContent="Player: "+ps;
        

        if (cs==3){
            document.getElementById('winlose').textContent="Computer victory!";
            document.getElementById('winlose').setAttribute('style','font-size:32px');
            document.getElementById('winlose').setAttribute('style','font-weight:bold');
            btns.forEach((btn) => {btn.disabled=true})
            restart()
        }
        else if (ps==3){
            document.getElementById('winlose').textContent="Player victory!";
            document.getElementById('winlose').setAttribute('style','font-size:32px');
            document.getElementById('winlose').setAttribute('style','font-weight:bold');
            btns.forEach((btn) => {btn.disabled=true})
            restart()
        }
    
    
            
    });
});





function play(e){
    console.log(this);
}

/*function game(){
    for (let i=0; i<5; i++){
        let plyrSl= prompt("Your Choice?").toLowerCase();
        let cmpSl=compPlay();
        console.log("You chose "+plyrSl);
        console.log("Computer chose "+cmpSl);
        console.log(compare(plyrSl,cmpSl));
        console.log("\n")

    }
}*/

//game();

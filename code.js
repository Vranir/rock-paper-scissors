function compPlay(){
    let roll=Math.floor(Math.random()*3);
    if (roll==0) return "rock"
    else if (roll==1) return "paper"
    else return "scissors"
}

function compare(cmp, plyr ){
    if (cmp=="rock"&&plyr=="scissors") return "You lose! Rock beats scissors!"
    else if (cmp=="scissors"&&plyr=="paper") return "You lose! Scissors beat paper!"
    else if (cmp=="paper"&&plyr=="rock") return "You lose! Paper beats rock!"
    else if (cmp=="scissors"&&plyr=="rock") return "You win! Rock beats scissors!"
    else if (cmp=="paper"&&plyr=="scissors") return "You win! Scissors beat paper!"
    else if (cmp=="rock"&&plyr=="paper") return "You win! Paper beats rock!"
    else return "Draw!";  
}

function game(){
    for (let i=0; i<5; i++){
        let plyrSl= prompt("Your Choice?").toLowerCase();
        let cmpSl=compPlay();
        console.log("You chose "+plyrSl);
        console.log("Computer chose "+cmpSl);
        console.log(compare(plyrSl,cmpSl));
        console.log("\n")

    }
}

game();

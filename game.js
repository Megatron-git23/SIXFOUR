let score=0;
let ballsleft=12;
let wickets=0;
let scoredata=document.getElementById("score");
let ballsleftdata=document.getElementById("balls");
let wicketsdata=document.getElementById("wk");
function playshot(){
    let logm=document.getElementById("logm");
    if(ballsleft===0 ||wickets===3){
        logm.innerHTML="GAME OVER FOR YOU ,NEED PREMIUM TO GO FORWARD";
        return;
    }
    const scores=[0,1,2,3,4,6,"W"];
    let result=scores[Math.floor(Math.random()*scores.length)];
    ballsleft--;

     if(result===6){
        score+=6;
        logm.innerHTML="It's a SIXER,SENSATIONALLLL";
     }
     else if(result===4){
        score+=4;
        logm.innerHTML="It's a FOUR,HURRAYYYY";
     }else if(result==="W"){
        wickets++;
        logm.innerHTML="Taken...LOST A WICKET...";
     }
     else if(result===0){
        score+=0;
        logm.innerHTML="DOT BALL,GOOD PACE FROM SREEKUMAR";
     }
     else if(result===1){
        score+=1;
        logm.innerHTML="Single taken ,good run between wickets";
     }
     else if(result===2){
        score+=2;
        logm.innerHTML="A well 2 runs,nice switching of strike...";
     }
     else{
        score+=3;
        logm.innerHTML="3 runs taken ,suddenly VIRAT KOHLI VIBE ENTERED THE STRIKE...";
     }
     scoredata.innerHTML=score;
     ballsleftdata.innerHTML=ballsleft;
     wicketsdata.innerHTML=wickets;

        if(ballsleft===0 ||wickets===3){
            logm.innerHTML="You are completely done.";
            logm.innerHTML="click restart to play again";
        }
     }
function restart(){
    score=0;
    ballsleft=12;
    wickets=0;
    scoredata.innerHTML=score;
    ballsleftdata.innerHTML=ballsleft;
    wicketsdata.innerHTML=wickets;

}

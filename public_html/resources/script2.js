/*
 * Usefull code:
 *  cambiar icono->
 *  .innerHTML="<i class=\"fas fa-skull\"></i>";   
 */

var selectedboats=0;
var score=0;

function assignAutomaticValues(){
    var aiCells=document.getElementsByClassName("ai");
    var num=Math.trunc(Math.random()*(4));
    var num2=Math.trunc(Math.random()*(4)+4);
    var num3=Math.trunc(Math.random()*(4)+8);
    var num4=Math.trunc(Math.random()*(4)+12);

    aiCells[num].name="boat";
    aiCells[num2].name="boat";
    aiCells[num3].name="boat";
    aiCells[num4].name="boat";   
    selectedboats=0;
}

function selectBoat(sth){
    var aiCells=document.getElementsByClassName("ai");
    var cont =0;
    for(var i=0;i<aiCells.length;i++){
        if(aiCells[i].name==="boat")cont++;
    }
    if(cont===0 && score===0){
        alert("Presiona Start Game para poder Jugar!");
        return;
    }
   
    
    if(selectedboats !==4){
        sth.name="boat";
        sth.innerHTML="<i class=\"fas fa-ship\"></i>";
        selectedboats++;
        if(selectedboats ===4){
            fillRestUp();
            return;
        }
    }else{
        alert("No more boats to select!");    
        
    }   
    
}

function fillRestUp(){
    console.log("entro");
    var usrCells=document.getElementsByClassName("usr");
    for(var i=0;i<usrCells.length;i++){
        if(usrCells[i].name !== "boat"){
            usrCells[i].innerHTML="<i class=\"fas fa-water\"></i>"; 
        }
    }
}

function usrShoot(sth){
    var aiCells=document.getElementsByClassName("ai");
    var cont =0;
    for(var i=0;i<aiCells.length;i++){
        if(aiCells[i].name==="boat")cont++;
    }
    if(cont===0 && score===0){
        alert("Presiona Start Game para poder Jugar!");
        return;
    }
    
    if(sth.name === "boat"){
        sth.innerHTML="<i class=\"fas fa-skull\"></i>";   
        sth.name="";
        score++;
        document.getElementById("scoreL").innerText="Score>>>"+score;
        checkWin();
    }else{
        sth.innerHTML="<i class=\"fas fa-water\"></i>";   
        sth.name="";
    }
    
}

function refresh(){
    location.reload(true);
}

function checkWin(){
    if(score===4){
       swal({
            title: "Good job!",
            text: "You Won!",
            className:"red-bg",
            dangerMode:true
        });
        
        swal("Game End, would you like to play again?", {
            className:"red-bg",
            buttons: {              
                cancel: "Exit",              
                play: {                
                    text: "Play Again",                
                    value: "play"
                }
              
            }
          })
          .then((value) => {
            switch (value) {
            
              case "play":
                location.reload(true);
                break;

              default:
                window.location.replace('index.html');
                
            }
          });
        
    }
}

function move(sth){
    var listCoords=["margin-left:5%;margin-top:15%","margin-left:5%;margin-top:15%","margin-left:25%;margin-top:15%","margin-left:5%;margin-top:25%","margin-left:50%;margin-top:25%","margin-left:70%;margin-top:25%",
    "margin-left:80%;margin-top:25%","margin-left:85%;margin-top:25%"];
    var numRan=Math.trunc(Math.random()*listCoords.length);
    sth.style=listCoords[numRan];
}

function returnn(){
    window.location.replace('index.html');
}
var pos = ["w","w","w","w","w","w","w","w","w"];
var gamerCurrent = "x";
var startGamer = "x"
var point1 = 0;
var point2 = 0;
var verificaW

var funciona = function(){
    var gamer1 = prompt("Digite o nome do jogador 1");
    document.getElementById("placarG1").innerHTML = gamer1 + '<div id="placarG1">:</div>';
    var gamer2 = prompt("Digite o nome do jogador 2");
    document.getElementById("placarG2").innerHTML = gamer2 + '<div id="placarG2">:</div>';
}

var verificaJogo = function() {
    var venceu = "w";
    if (
        ((pos[0] == pos[1]) && (pos[1] == pos[2]) || (pos[0] == pos[3]) && (pos[3] == pos[6]) || (pos[0] == pos[4]) && (pos[4] == pos[8]))
    ) { venceu = pos[0]; }
    if (
        ((pos[1] == pos[4]) && (pos[4] == pos[7]))
    ) { venceu = pos[1]; }
    if (
        ((pos[2] == pos[5]) && (pos[5] == pos[8]) || (pos[2] == pos[4]) && (pos[4] == pos[6]))
    ) { venceu = pos[2]; }
    if (
        ((pos[3] == pos[4]) && (pos[4] == pos[5]))
    ) { venceu = pos[3]; }
    if (
        ((pos[6]) == pos[7]) && (pos[7] == pos[8])) { venceu = pos[6]; }
    return venceu;
}

var showXeO = function(posicao) {
    if (pos[parseInt(posicao)] == 'w') {
        if (gamerCurrent == 'x') {
            document.getElementById(posicao).innerHTML = '<div class = "showXeO"><img src = "iconeX.png"></div>';
            pos[parseInt(posicao)] = "x";
            gamerCurrent = "o";

        } else {
            document.getElementById(posicao).innerHTML = '<div class = "showXeO"><img src = "iconeO.png"></div>';
            pos[parseInt(posicao)] = "o";
            gamerCurrent = "x";
        }
    }

    if (verificaJogo() != 'w') {
        if (verificaJogo() == 'x') {
            point1++;
        } else {
            point2++;
        }
        alert(verificaJogo() + " ganhou!");
        pos = ["w", "w", "w", "w", "w", "w", "w", "w", "w"];
        if (startGamer == 'x') {
            startGamer == 'o'
        } else {
            startGamer == 'x'
        }
        gamerCurrent == startGamer;
        for (var i = 0; i < 9; i++) {
            document.getElementById(i.toString()).innerHTML = '<div class = "showXeO"></div>';
        }
        for (var i = 0; i < 9; i++) {
            document.getElementById(i.toString()).innerHTML = "<di></div>";
        }
        document.getElementById("placarG1").innerHTML = placarG1 + ":" + point1;
        document.getElementById("placarG2").innerHTML = placarG2 + ":" + point2;
    
    }else {
        verificaW='w'
        for(var i=0; i < 9; i++){
            if(pos[i]=='w'){
                verificaZ = 'w'
            }
        }
        if(verificaW != 'w'){
            alert(verificaW + "VISH, DEU VELHA!")
        }
    } 
}

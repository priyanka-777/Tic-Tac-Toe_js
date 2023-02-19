function fun() {
 
    var b1, b2, b3, b4, b5, b6, b7, b8, b9,player1,player2;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
    player1=document.getElementById("name1").value;
    player2=document.getElementById("name2").value;
 
    // Checking if Player X won or not and after
    // that disabled all the other fields
    if (( b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "player1 won";
        win=player1+" won by "+player2;
        window.alert(win);
        my_func();
    }
    else if (( b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        win=player1+" won by "+player2;
        window.alert(win);
        my_func();
    }
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        win=player1+" won by "+player2;
        window.alert(win);
        my_func();
    }
    else if (( b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        win=player1+" won by "+player2;
        window.alert(win);
        my_func();
    }
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        win=player1+" won by "+player2;
        window.alert(win);
        my_func();
    }
    else if ((b3 == 'X') && ( b5 == 'X') && ( b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        win=player1+" won by "+player2;
        window.alert(win);
        my_func();
    }
    else if (( b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        win=player1+" won by "+player2;
        window.alert(win);
        my_func();
    }
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        win=player1+" won by "+player2;
        window.alert(win);
        my_func();
    }
    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((b1 == 'O') && (b2 == 'O') && (b3 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        win=player2+" won by "+player1;
        window.alert(win);
        my_func();
    }
    else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        win=player2+" won by "+player1;
        window.alert(win);
        my_func();
    }
    else if ((b7 == 'O') && (b8 == 'O') && (b9 =="O")) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        win=player2+" won by "+player1;
        window.alert(win);
        my_func();
    }
    else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        win=player2+" won by "+player1;
        window.alert(win);
        my_func();
    }
    else if ((b1 == 'O') && (b5 == 'O') && (b9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        win=player2+" won by "+player1;
        window.alert(win);
        my_func();
    }
    else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        win=player2+" won by "+player1;
        window.alert(win);
        my_func();
    }
    else if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        win=player2+" won by "+player1;
        window.alert(win);
        my_func();
    }
    else if ((b4 == 'O') && (b5 == 'O') && (b6 == "O")) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        win=player2+" won by "+player1;
        window.alert(win);
        my_func();
    }
 
    // Checking of Player 0 finish
     // Here, Checking about Tie
     else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
     || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
     (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
     b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
     (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
     b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
         document.getElementById('print')
             .innerHTML = "Match Tie";
         window.alert('Match Tie');
        my_func();
 }
    else {

     // Here, Printing Result
        if (flag == 1) {
         document.getElementById('print')
             .innerHTML = "Player 1 Turn";
        }
        else {
         document.getElementById('print')
             .innerHTML = "Player 2 Turn";
        }
    }
}
flag = 1;
function fun_1(id) {
    let player1=document.getElementById("name1").value;
    let player2=document.getElementById("name2").value;
    if(player1!=="" && player2!==""){
    if (flag == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        flag = 0;
    }
    else {
        document.getElementById(id).value = "O";
        document.getElementById(id).disabled = true;
        flag = 1;
    }
    fun();
}
else{
    alert("please enter player names");
}
}
 

//reseting function
function my_func(){
    location.reload();
    document.getElementById("b1").value='';
    document.getElementById("b2").value='';
    document.getElementById("b3").value='';
    document.getElementById("b4").value='';
    document.getElementById("b5").value='';
    document.getElementById("b6").value='';
    document.getElementById("b7").value='';
    document.getElementById("b8").value='';
    document.getElementById("b9").value='';
    document.getElementById("name1").value='';
    document.getElementById("name2").value='';
}
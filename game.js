function back() {
    window.location.replace("index.html");
}

player1_name = localStorage.getItem("p1");
player2_name = localStorage.getItem("p2");

player1_score = 0;
player2_score = 0;

document.getElementById("p1n").innerHTML = player1_name + " : ";
document.getElementById("p2n").innerHTML = player2_name + " : ";

document.getElementById("p1s").innerHTML = "<h3 style='display: inline-block'>" + player1_score + "</h3>";
document.getElementById("p2s").innerHTML = "<h3 style='display: inline-block'>" + player2_score + "</h3";

document.getElementById("p_question").innerHTML = "Player 1 Name: " + player1_name;
document.getElementById("p_answer").innerHTML = "Player 2 Name: " + player2_name;

function send() {
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    num3 = parseInt(num1) * parseInt(num2);
    qn = "<h4>" + num1 + "*" + num2 + "</h4>";
    ibox = "<br> Answer: <input type='text' id='iBox'>";
    btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = qn + ibox + btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("iBox").value;
    if (get_answer == num3) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("p1s").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("p2s").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("p_question").innerHTML = "question_turn - " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("p_question").innerHTML = "question_turn - " + player_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("p_answer").innerHTML = "answer_turn - " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("p_answer").innerHTML = "answer_turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
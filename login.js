function login() {
    player1 = document.getElementById("input1").value;
    player2 = document.getElementById("input2").value;
    localStorage.setItem("p1", player1);
    localStorage.setItem("p2", player2);
    window.location.replace("game.html");
}
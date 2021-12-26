function addUser() { 

    player_1 = document.getElementById("player1name").value ;
    player_2 = document.getElementById("player2name").value ;

    localStorage.setItem("player_1" , player_1);
    localStorage.setItem("player_2" , player_2);

    window.location = "game_page.html";
}
function get_score() {

    score = localStorage.getItem("score") ;
    document.getElementById("Update").innerHTML = "<h1>Score:" + score + "</h1>" ;
}

function back() {

    window.location = "activity_1.html";
}
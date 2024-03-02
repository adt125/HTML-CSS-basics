let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}
show_score();
function check(choice, rand) {

    let result = '';
    if (choice == rand) {
        return 'Tie.'
    }
    if (choice == 0) {
        if (rand == 1) {
            result = 'You lose.'
        }
        else {
            result = 'You win.'
        }
    }
    else if (choice == 1) {
        if (rand == 0) {
            result = 'You win.';
        }
        else {
            result = 'You lose.';
        }
    }
    else {
        if (rand == 0) {
            result = 'You lose.';
        }
        else {
            result = 'You win.';
        }
    }
    return result;
}

function choice_str(choice) {
    let c;
    if (choice == 0)
        c = "stone"
    else if (choice == 1)
        c = "paper";
    else
        c = "scissor";
    return c;
}
function play(choice) {

    let rand = Math.floor(Math.random() * 10) % 3;
    let result = check(choice, rand);
    if (result === 'You win.')
        score.wins++;
    else if (result === 'You lose.')
        score.losses++;
    else
        score.ties++;

    localStorage.setItem('score', JSON.stringify(score));
    show_choice(choice,rand);
    show_result(result);
    show_score();
}
function reset() {
    document.getElementById("choice").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
    show_score();
    localStorage.removeItem('score');
}
function show_choice(choice,rand) {
    document.getElementById("choice").innerHTML =
        `You chose: <b>${choice_str(choice)}</b>, cpu chose: <b>${choice_str(rand)}</b>`;
}
function show_result(result) {
    document.getElementById("result").innerHTML =
        `${result}`;
}
function show_score() {
    document.getElementById("score").innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
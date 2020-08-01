document.onkeydown = checkKey;

let playerx = 0;
let playery = 0;
let doorx = 29;
let doory = 8;

//Stop arrow keys moving the screen around
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

//Check win condition
function checkWin() {
	console.log("Position x is " + playerx + " and position y is " + playery);
	if (playerx === doorx && playery === doory) {
		console.log("win");
		document.getElementById("winMessage").style.display=("inline");
	}
}

//Keys to move the player
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
	if (playery>0){
	    	playery--;
		//Move player 24px (player dimension) in the desired direction
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
	}
    }
    else if (e.keyCode == '40') {
        if (playery<15){
        	playery++;
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
        }
    }
    else if (e.keyCode == '37') {
//Moving left
	if (playerx>0){
	    	playerx--;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
	}
    }
    else if (e.keyCode == '39') {
//Moving right
	if (playerx<31){
	    	playerx++;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
	}
    }

}

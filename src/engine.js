// the game itself
var game;

// gameState | gameState | unlocked | pointsObjective
var levels = new Array(
	["game", gameState, true]
);
var currentLevelIndex = -1;

// a selection of colors to be randomly picked and set as background color
var bgColors = [0x00ff00];

window.onload = function() {
    // creation of the game
	game = new Phaser.Game(640, 960, Phaser.AUTO, "");
    // creation of the main (and only) game state
    game.state.add("boot", bootState);
    game.state.add("load", loadState);
    game.state.add("train", trainState);
    game.state.add("menu", menuState);
    for(var i = 0; i<levels.length ; i++){
    	    game.state.add(levels[i][0], levels[i][1]);
    }
    
    game.state.start("boot");
}

function getWidthPercentage(percentage){
	return game.width*percentage/100;	
}

function getHeightPercentage(percentage){
	return game.height*percentage/100;	
}

function getGameHeightWithoutTopBar(){
	return game.height-getWidthPercentage(actionBarHeight);
}

var actionBarHeight = 10;
function createBackBar(context, backCallbackAction){
    var bar = game.add.graphics();
    bar.beginFill(0x000000, 0);
    bar.drawRect(0, 0, game.width, getWidthPercentage(actionBarHeight));

    //var backButton = game.add.sprite(0, 0, "backButton");
    var backButton = game.add.button(0,0,"backButton", backCallbackAction);

    backButton.width = getWidthPercentage(actionBarHeight);
    backButton.height = getWidthPercentage(actionBarHeight);
    backButton.inputEnabled = true;

    backButton.events.onInputDown.add(backCallbackAction, context);
}

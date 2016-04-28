var loadState= {
	preload: function(){
		// preloading the images we are going to use
                // the ball
                game.load.image("ball", "assets/ball.png");
                game.load.image("backButton", "assets/back_icon.png");
                game.load.audio('exoAudio', ['assets/audio/Exo_mama_mix.mp3']);
                
	},
	create: function(){
                // center the game horizontally 
                game.scale.pageAlignHorizontally = true;
                // center the game vertically
                game.scale.pageAlignVertically = true;
                // setting the scale mode to cover the largest part of the screen possible while showing the entire game
                game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                // setting the document background color to tint color
                document.body.style.background = "#00ff00";
                // setting the game background color to tint color
                game.stage.backgroundColor = "#00ff00";

                game.state.start("menu");
	}
}



function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
}
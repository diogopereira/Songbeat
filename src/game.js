var gameState = {
     create: function(){
		createBackBar(this, function(){game.state.start("menu");});

     	music = game.add.audio('exoAudio');
    	music.play();

     }
 }
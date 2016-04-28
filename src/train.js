var bt1, bt2, bt3;
var bts = new Array(bt1, bt2, bt3);
var nBts = bts.length;
var animatedSprites = new Array();
var marginBottom = 50;
var bt1Key, bt2Key, bt3Key;

var trainState = {
     create: function(){
		createBackBar(this, function(){game.state.start("menu");});
		bt1Key = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    	bt2Key = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    	bt3Key = game.input.keyboard.addKey(Phaser.Keyboard.THREE);

		for (var i = 0; i<nBts; i++) {
			this.createBT(i);	
		};

		music = game.add.audio('exoAudio');
    	music.play();

     },
     update: function(){
     	if(bt1Key.isDown){
			this.clickOnBT(0);
     	}
     	if(bt2Key.isDown){
			this.clickOnBT(1);
     	}
     	if(bt3Key.isDown){
			this.clickOnBT(2);
     	}
     },
     createBT: function(index){
		bts[index] = game.add.sprite( (game.width/nBts)*index + game.width/(nBts*2), game.height-marginBottom, "ball");    	
		bts[index].anchor.set(0.5);
		bts[index].width = 100;
		bts[index].height = 100;
		bts[index].inputEnabled = true;
		bts[index].events.onInputDown.add(function(){this.clickOnBT(index)}, this);

		var barWidth = 10;
		var bar = game.add.graphics();
    	bar.beginFill(0xffffff, 0.8);
    	bar.drawRect(((game.width/nBts)*index + game.width/(nBts*2))-barWidth/2, 0, barWidth, game.height-marginBottom);

     },
     clickOnBT: function(index){
     	var clickSprite = game.add.sprite( (game.width/nBts)*index + game.width/(nBts*2), game.height-marginBottom, "ball");    	
		clickSprite.anchor.set(0.5);
		clickSprite.width = 50;
		clickSprite.height = 50;
		// params are: properties to tween, time in ms, easing and auto-start 
		game.add.tween(clickSprite).to({x: (game.width/nBts)*index + game.width/(nBts*2), y: -25}, 500, Phaser.Easing.Quadratic.InOut, true);

     	//animatedSprites.add(clickSprite);
     }

 }
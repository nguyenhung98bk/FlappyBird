var pipe = function(game){
	this.time = 0;
	this.game = game;
	this.image = null;
	this.loaded = false;
	this.x = 240;
	this.y = 200;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.loaded = true;
		}
		this.image.src = 'pipe.jpg';
	}
	this.update = function(){
		console.log()
		if(this.game.gameStart == true && this.game.gameOver == false){
		this.x-=(2*(Math.floor(this.time/5)+1));
		if(this.x <= -50){
			this.x = 300;
			this.time ++;
			this.y = Math.floor(200+(Math.random()*155));
		}}
	}
	this.draw = function(){
		if(self.loaded == false){
			return;
		}
		this.game.context.drawImage(this.image,this.x,this.y-150-415);
		this.game.context.drawImage(this.image,this.x,this.y);
	}
}
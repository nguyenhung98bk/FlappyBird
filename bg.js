var bg = function(game){
	this.game = game;
	this.image = null;
	this.loaded = false;
	this.x = 0;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.loaded = true;
		}
		this.image.src = 'background.png';
	}
	this.update = function(){
		if(this.game.gameOver == false){
		this.x--;
		if(this.x == -288){
			this.x = 0;
		}
	}
	}
	this.draw = function(){
		if(self.loaded == false){
			return;
		}
		this.game.context.drawImage(this.image,this.x,0);
		this.game.context.drawImage(this.image,this.x+397,0);
	}
}
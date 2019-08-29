var base = function(game){
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
		this.image.src = 'base.jpg';
	}
	this.update = function(){
		if(this.game.gameOver == false){
			this.x-=2;
			if(this.x == -288){
				this.x = 0;
			}
		}
	}
	this.draw = function(){
		if(self.loaded == false){
			return;
		}
		this.game.context.drawImage(this.image,this.x,405);
		this.game.context.drawImage(this.image,this.x+397,405);
	}
}
var bird = function(game){
	this.game = game;
	this.image2 = null;
	this.loaded2 = false;
	this.x = 80;
	this.y = 200;
	this.speedY = 0;
	this.giatoc = 0.5;
	this.direction = 'down';

	this.init = function(){
		this.loadImage();
	}

	this.flap = function(){
		this.game.gameStart = true;
		this.speedY = -10;
	}

	this.loadImage = function(){
		this.image2 = new Image();
		this.image2.onload = function(){
			self.loaded = true;
		}
		this.image2.src = 'bird2.png';
	}
	this.update = function(){
		if(this.game.gameStart==true){
			if(this.y < 488){
				if(this.direction == 'down'){
					this.speedY += this.giatoc;
				}
				else{
					this.speedY -= this.giatoc;
				}
				this.y += this.speedY;
				if(this.y <= 0){
					this.y = 0;
				}
			}
			else{
				this.y = 488;	
			}
			if(this.y > 405){
				this.game.gameOver = true;
			}
			this.checkHitPipe();
		}
	}

	this.checkHitPipe = function(){
		if(
			(
				this.game.pipe.x == this.x + 40 ||
				(
					this.game.pipe.x < this.x + 39 && 
					this.game.pipe.x + 50 > this.x
				)
			) &&
			(
				this.game.pipe.y < this.y+34 ||
				this.game.pipe.y-150 > this.y+5	
			)
		){
			this.game.gameOver = true;
		}
	}


	this.draw = function(){
		if(self.loaded2 == false){
			return;
		}
		this.game.context.drawImage(this.image2,this.x,this.y);
	}
}
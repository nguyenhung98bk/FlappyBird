var diem = function(game){
	this.game = game;
	this.point = 0;

	this.update =function(){
    		this.point=this.game.pipe.time;
	}

	this.draw = function(){
		this.game.context.font = "50px Comic Sans MS";
		this.game.context.fillStyle = "red";
		this.game.context.fillText(this.point,50,50);
	}
	this.drawGameOver = function(){
		this.game.context.font = "50px Comic Sans MS";
		this.game.context.fillStyle = "red";
		this.game.context.fillText("Game Over",100,200);	
	}
}
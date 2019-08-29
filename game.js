var game = function(){
	this.canvas = null;
	this.context = null;
	this.width = 300;
	this.height = 515;
	this.bird = null;
	this.bg = null;
	this.base = null;
	this.pipe = null;
	this.diem = null;

	this.gameOver = false;
	this.gameStart = false;


	var self = this;

	this.init = function(){
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		document.body.appendChild(this.canvas);


		this.bird = new bird(this);
		this.bird.init();

		this.bg = new bg(this);
		this.bg.init();

		this.base = new base(this);
		this.base.init();

		this.pipe = new pipe(this);
		this.pipe.init();

		this.diem = new diem(this);


		this.listenMouse();
		this.loop();
	}

	this.listenMouse = function(){
		this.canvas.addEventListener('click',function(){
			self.bird.flap();
		})
	}

	this.loop = function(){
		self.update();
		self.draw();
		setTimeout(self.loop, 33);
	}

	this.update = function(){
		if(this.gameOver){
			this.bird.giatoc = 2;
			this.bird.speedY += this.bird.giatoc;
			this.bird.y += this.bird.speedY;
			if(this.bird.y > 488){
				this.bird.y = 488;
			}
			setTimeout(function(){
				self.refresh();
			}, 2000);
		}
		this.bird.update();
		this.bg.update();
		this.pipe.update();
		this.base.update();
		this.diem.update();
	}

	this.draw = function(){
		this.bg.draw();
		this.pipe.draw();
		this.base.draw();
		this.diem.draw();
		this.bird.draw();
	}
	this.refresh = function(){
		this.pipe.time = 0;
		this.bird.speedY = 0;
		this.bird.giatoc = 0.5;
		this.diem.point = 0;
         this.bird.x = 80;
         this.bird.y = 200;
         this.pipe.x = 240;
         this.pipe.y = 200;
         this.gameOver = false;
         this.gameStart = false;
    }
}

var g = new game();
g.init();
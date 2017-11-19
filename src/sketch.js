var _scene = null;

function setup(){
	createCanvas(640, 480);
	_scene = new Scene();
}

function draw(){
	_scene.draw();
}

function mousePressed(){
	_scene.click(mouseX, mouseY);
	if (_scene.SelectedObj == null){
		var p = new Point();
		p.X = mouseX;
		p.Y = mouseY;

		_scene.AdjObjs.push(p);
		_scene.SelectedObj = p;		
	}
}
var Point = function(){
	this.X = null;
	this.Y = null;
	this.Name = null;
	this.Selected = false;

	this.draw = function(){
		fill(255, 122, 122)
		if (this.Selected)
			ellipse(this.X, this.Y, 10);
		else 
			ellipse(this.X, this.Y, 5);

		textSize(10);
		if (this.Name) 
			text(this.Name, this.X, this.Y);
	}

	this.dist = function(x, y){
		return Math.sqrt((this.X - x)*(this.X - x) + (this.Y - y)*(this.Y - y));
	}
}
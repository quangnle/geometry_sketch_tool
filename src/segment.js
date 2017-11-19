var Segment = function(){
	this.A = null;
	this.B = null;
	this.Selected = false;
	this.initFunc = null;

	this.draw = function(){
		if (this.Selected)
			stroke(2);
		else 
			stroke(1);
		line(this.A.X, this.A.Y, this.B.X, this.B.Y);
	}

	this.dist = function(x,y){
		var pAx = x - this.A.X;
		var pAy = y - this.A.Y;
			
		var ux = this.B.X - this.A.X;
		var uy = this.B.Y - this.A.Y;
		var lenu = Math.sqrt(ux*ux + uy*uy);

		var cross = ux * pAy - uy * pAx;
		var d = Math.abs(cross) / lenu;

		var pa2 = (x - this.A.X) (x - this.A.X) + (y - this.A.Y) * (y - this.A.Y);
		var pb2 = (x - this.B.X) (x - this.B.X) + (y - this.B.Y) * (y - this.B.Y);
		var ah2bh2 = pa2 + pb2 - 2*d*d;

		if (lenu * lenu < ah2bh2) return -1;
		return d;
	}
}
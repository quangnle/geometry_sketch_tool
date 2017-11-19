var Scene = function(){

	this.AdjObjs = [];
	this.GenObjs = [];

	this.SelectedObj = null;

	this.draw = function(){
		if (this.AdjObjs){
			for (var i = 0; i < this.AdjObjs.length; i++){
				this.AdjObjs[i].draw();
			}
		}

		if (this.GenObjs){
			for (var i = 0; i < this.GenObjs.length; i++){
				this.GenObjs[i].initFunc();
				this.GenObjs[i].draw();
			}
		}
	}

	this.click = function(mx, my){
		if (this.AdjObjs){
			this.SelectedObj = null;
			var minIdx = -1;
			var minDist = 100000000;
			for (var i = 0; i < this.AdjObjs.length; i++){
				var dist = this.AdjObjs[i].dist(mx, my);
				this.AdjObjs[i].Selected = false;

				if (dist <= minDist){
					minDist = dist;
					minIdx = i;
				}
			}

			if (minDist < 2.0) {
				this.SelectedObj = this.AdjObjs[minIdx];
				this.SelectedObj.Selected = true;
			}
		}
	}
}
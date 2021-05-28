function Cores(x,y,m,F,v,R,color,id=100){
	this.x=x;
	this.id=id;
	this.y=y;
	this.m=m;
	this.F=new Vector;
	this.F=F;
	this.v=new Vector;
	this.v=v;
	this.color=color;
	var that=this;
	
	this.draw=function(ctx){
		ctx.beginPath();
		ctx.fillStyle=color;
		ctx.arc(that.x,that.y,R,0,2*Math.PI);
		ctx.fill();
	}
	
	this.move=function(dx,dy){
		that.x+=dx;
		that.y+=dy;
	}
}
function Vector (x=0,y=0){
	this.x=x;
	this.y=y;
}
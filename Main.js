window.addEventListener('load',main,false);
function main() {
	var ctx = can.getContext('2d');
	var w1=can.width;
	var h=can.height;
	var cores=[];
	var r = new Vector();
	var r_abs;
	var F= new Vector();
	var v= new Vector();
	var w= new Vector();
	var a=40;
	var betha1=4000;
	var betha2=600;
	var Fx,Fy=0;
	var v0x=1;
	var v0y=0;
	var kol=0;
	var D1 = -2000;
	var T=2*Math.PI*Math.sqrt((0.0003*a*a)/(72*2000));
	var dt=T/20;
	for (var i=115;i<=175;i+=30){
	for (var j=370;j<=430;j+=30){
		var F= new Vector(); 
		var v= new Vector();
		var a3= new Cores (i,j,300,F,v,15,'red');
		cores.push(a3);
	}
	}
	var F= new Vector(); 
	var v= new Vector();
	var a1 = new Cores (230,400,300,F,v,15,'red', 1);
		cores.push(a1);
	var F= new Vector(); 
	var v= new Vector();
	var a2= new Cores (205,385,300,F,v,15,'red', 2);
		cores.push(a2);
	var F= new Vector(); 
	var v= new Vector();
	var a4= new Cores (205,415,300,F,v,15,'red', 3);
		cores.push(a4);
	

	for (var i=603;i<=w1-250;i+=55){
		console.log(i);
		for (var j=15;j<=h-30;j+=30){
		var F= new Vector(); 
		var v= new Vector();
		var a2= new Cores (i,j,40,F,v,15,'black');
		cores.push(a2);
		kol++;
	}
	}
	for (var i=630;i<=w1-260;i+=55){
		console.log(i);
		for (var j=30;j<=h-30;j+=30){
		var F= new Vector(); 
		var v= new Vector();
		var a2= new Cores (i,j,40,F,v,15,'black');
		cores.push(a2);
		kol++;
	}
	}
	console.log(kol);
	for (var i=0;i<344;i++){
		cores[i].v.x=0;
		cores[i].v.y=0;
	}
	function draw (){
		ctx.clearRect(0,0,w1,h);
	for(var i=0;i<344;i++){
		cores[i].draw(ctx);
	}
	}
	for (var i=0;i<12;i++){
	cores[i].v.x=v0x;
	cores[i].v.y=v0y;
	}
	console.log(cores)
	function phys(){
		
		
		for (var i=0;i<344;i++){
			cores[i].F.x=0;
			cores[i].F.y=0;
		}
		
		for (var i=0;i<344;i++){
			for(var j=0;j<344;j++){
					r.x=cores[j].x-cores[i].x;
					r.y=cores[j].y-cores[i].y;
					r_abs=Math.sqrt(Math.pow(r.x,2)+Math.pow(r.y,2));
					if(i!=j && r_abs<=a/(Math.sqrt(2))){
					Fx=((-12*D1/Math.pow(a,2))*(Math.pow(a/r_abs),8)-Math.pow(a/r_abs,14))*r.x;
					Fy=((-12*D1/Math.pow(a,2))*(Math.pow(a/r_abs),8)-Math.pow(a/r_abs,14))*r.y;
					Fx=Fx-betha2*cores[i].v.x;
					Fy=Fy-betha1*cores[i].v.y;
					}
					else{
						Fx=0;
						Fy=0;
					}
					cores[i].F.x+=Fx;
					cores[i].F.y+=Fy;
					Fx=0;
					Fy=0;
		}
		
		
	}
			
		for(var i=0;i<344;i++)
		{
			w.x=(cores[i].F.x)/(cores[i].m);
			w.y=(cores[i].F.y)/(cores[i].m);
			cores[i].v.x=cores[i].v.x+w.x*dt;
			cores[i].v.y=cores[i].v.y+w.y*dt;
		    cores[i].move(cores[i].v.x,cores[i].v.y);
		}
//	console.log(cores)
	}
	function control (){
	phys();
	draw();
	}
	setInterval(control,1000/120);
}

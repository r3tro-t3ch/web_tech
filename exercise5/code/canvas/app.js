/***
 * Canvas 1
 */
var c1=document.getElementById("canvas_1");
var ctx=c1.getContext("2d");

ctx.strokeStyle = "red";
ctx.lineWidth= 2;
ctx.strokeRect(20,25,100,80)

ctx.lineWidth=7;
ctx.strokeStyle="blue";
ctx.strokeRect(70,80,100,50)

ctx.lineWidth=12;
ctx.strokeStyle="green";
ctx.strokeRect(100,35,50,80)




/***
 * Canvas 2
 */

var c2 = document.getElementById("canvas_2");
ctx = c2.getContext("2d");

ctx.fillStyle= "#5ef700" ;
ctx.fillRect(20,25,80,80);


ctx.beginPath();
ctx.lineWidth= 1;
ctx.strokeStyle = "#2689ff ";
ctx.moveTo(80, 90);
ctx.lineTo(120, 10);
ctx.lineTo(160, 90);
ctx.closePath();
ctx.fillStyle ="rgba( 38, 137, 255 , 0.5)";
ctx.fill();

ctx.beginPath();
ctx.arc(175,90,30,0, 2 * Math.PI);
ctx.fillStyle ="red";
ctx.fill();

/***
 * Canvas 3
 */
var c3 = document.getElementById("canvas_3");
ctx = c3.getContext("2d");

ctx.fillStyle="#0e7cff";
ctx.fillRect(50,10,120,40)

ctx.fillStyle="#00a116";
ctx.fillRect(50,50,40,100);

ctx.fillStyle="#ffdc00";
ctx.fillRect(90,110,100,40);

ctx.fillStyle="#c42100";
ctx.fillRect(150,10,40,100);



/***
 * Cnvas 4
 */
var c4 = document.getElementById("canvas_4");
ctx = c4.getContext("2d");


ctx.strokeStyle = "orange";
ctx.lineWidth = 4;
ctx.strokeRect(10,10,230,200);

var grd = ctx.createLinearGradient(0,0,200,200);
grd.addColorStop(0,"orange");
grd.addColorStop(1,"blue");
ctx.fillStyle = grd;
ctx.fillRect(20,20,120,80);


/***
 * Canvas 5
 */
var c5 = document.getElementById("canvas_5");
ctx = c5.getContext("2d");
 

ctx.font="10px";
ctx.fillStyle="black";
ctx.fillText("Sales per Year",125,10);

ctx.font="7px";
ctx.fillStyle="red";
ctx.fillText("250",83,65);

ctx.font="7px";
ctx.fillStyle="red";
ctx.fillText("2011",80,230);

ctx.font="7px";
ctx.fillStyle="blue";
ctx.fillText("200",43,95);

ctx.font="7px";
ctx.fillStyle="blue";
ctx.fillText("2010",40,230);

ctx.font="7px";
ctx.fillStyle="green";
ctx.fillText("175",123, 115);

ctx.font="7px";
ctx.fillStyle="green";
ctx.fillText("2012",120,230);

ctx.strokeStyle = "black";
ctx.lineWidth= 1;
ctx.strokeRect(0,0,300,250);


ctx.moveTo(20,20);
ctx.lineTo(20,220);
ctx.stroke();


ctx.moveTo(20,220);
ctx.lineTo(200,220);
ctx.stroke();

ctx.fillStyle= "blue";
ctx.fillRect(40,100,20,120);

ctx.fillStyle= "red";
ctx.fillRect(80,70,20,150);

ctx.fillStyle= "green";
ctx.fillRect(120,120,20,100);

/***
 * Canvas 6
 */
 var c6 = document.getElementById("canvas_6");
 ctx = c6.getContext("2d");


ctx.strokeStyle = "green";
ctx.lineWidth = 4;

let initPoint = 5
let dimesion = 240

for (let i = 0; i < 12; i++){
    ctx.strokeRect(initPoint,initPoint,dimesion + 20,dimesion);
    initPoint += 10;
    dimesion -= 20;
}


/***
 * Canvas 7
 */
var c7 = document.getElementById("canvas_7");
ctx = c7.getContext("2d");

ctx.beginPath();
ctx.arc(80,80,60,0,Math.PI,false);
var grd2 = ctx.createLinearGradient(0,0,150,150);
grd2.addColorStop(1,"#d2007c")
grd2.addColorStop(0,"#d23300")
ctx.fillStyle = grd2;
ctx.fill();

ctx.beginPath();
ctx.arc(200,80,60,0, Math.PI,true);
var grd3 = ctx.createLinearGradient(50,50,200,200);
grd3.addColorStop(1,"#0053d3")
grd3.addColorStop(0,"#02b5e5")
 
ctx.fillStyle = grd3;
ctx.fill();


/***
 * Canvas 8
 */
var c8 = document.getElementById("canvas_8");
ctx = c8.getContext("2d");



ctx.beginPath();
ctx.lineWidth= 1;
ctx.strokeStyle = "violet";
ctx.moveTo(80, 50);
ctx.lineTo(10, 100);
ctx.lineTo(150, 100);
ctx.closePath();
ctx.fillStyle ="brown";
ctx.fill();

ctx.fillStyle="#0148f8";
ctx.fillRect(10,100,140,70)

ctx.fillStyle="white";
ctx.fillRect(20,130,30,50)

ctx.fillStyle="white";
ctx.fillRect(80,130,40,20)

ctx.beginPath();
ctx.arc(200,90,20,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();

ctx.fillStyle="brown";
ctx.fillRect(195,110,10,60)
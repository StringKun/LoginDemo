/**
 * Created by song on 2017/3/20.
 */
var can1;
var can2;
var ctx1;
var ctx2;
var lasttime;
var detaltime;


var bgPic ;

var star;

var h;
var w ;
document.body.onload = start;
function start() {
    console.log("aa");
    init();
    lasttime = Date.now();
    detaltime = 0;
    gameLoop();
}

function init() {

     h = screen.height - 200;
     w = screen.width - 10;


    can1 = document.getElementById("canvas1");
    can1.setAttribute('width', w);
    can1.setAttribute('height', h);
    ctx1 = can1.getContext("2d");

    can2 = document.getElementById("canvas2");
    can2.setAttribute('width', w);
    can2.setAttribute('height', h);
    ctx2 = can2.getContext("2d");

    bgPic = new Image();

    star = new starObj();
    star.init();

    bgPic.src = "./src/bg2.jpg";



   // ctx1.drawImage(start1, 0, 0, 20, 20);
}
function gameLoop() {
    requestAnimationFrame(gameLoop);
    var now = Date.now();
    detaltime = now - lasttime  ;
    lasttime = now;

    ctx1.drawImage(bgPic, 0, 0, w, h);

    star.draw();
   // star.draw();
    console.log("star", star);
    console.log("loop",detaltime );

}
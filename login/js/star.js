/**
 * Created by song on 2017/3/20.
 */
/**
 * 问题在光泽变化不平滑，需要更改，加上dela
 */
var starObj = function () {
    this.isMax = [];//bool
    this.time = [];
    this.x = [];
    this.y = [];
    this.life_time = []; //存活时间
    this.jianbain = [] ; //渐变时间
    this.star_pic = new Image();
    this.star2_pic = new Image();
}
starObj.prototype.num = 50;
starObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
      //  this.isMax[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.born(i);
    }
    for(var j = 0 ; j < 10; j++){
        this.suiji();
    }

    this.star_pic.src = "./src/star2.png";
    this.star2_pic.src = "./src/star1.png";
}
starObj.prototype.draw = function () {
    for(var i = 0; i < this.num; i++){
        if(this.isMax[i]){
            if(this.time[i] >= this.life_time[i]){
                this.born(i);
                this.suiji();
            }
            else if(this.time[i] < this.life_time[i]){
                if(this.time[i] <= 2 * this.life_time[i] / 5){
                    ctx1.save();
                    ctx1.globalAlpha = this.jianbain[i];
                    ctx1.beginPath();
                    ctx1.drawImage(this.star_pic, this.x[i], this.y[i], 20 , 20);
                    ctx1.closePath();
                    ctx1.restore();
                    this.jianbain[i] +=  detaltime/1000;
                }else if(this.time[i] <= 3 * this.life_time[i] / 5){
                    ctx1.save();
                    ctx1.drawImage(this.star2_pic, this.x[i], this.y[i], 20 , 20);
                    ctx1.restore();
                    this.jianbain[i] = 1;
                }
                else if(this.time[i] < this.life_time[i]){
                    ctx1.save();
                    ctx1.globalAlpha = this.jianbain[i];
                    ctx1.beginPath();
                    ctx1.drawImage(this.star2_pic, this.x[i], this.y[i], 20 , 20);
                    ctx1.closePath();
                    ctx1.restore();
                    this.jianbain[i] -=  detaltime/1000;
                }
            }
            this.time[i] += detaltime;
        }
        else{
            ctx1.save();
            ctx1.globalAlpha = 0.5;
            ctx1.beginPath();
            ctx1.drawImage(this.star_pic, this.x[i], this.y[i], 20 , 20);
            ctx1.closePath();
            ctx1.restore();
        }

    }
}
starObj.prototype.born = function (i) {
        this.isMax[i] = false;
        this.time[i] = 0;
        this.x[i] = w/2 + Math.random() * 200 + i*10;
        this.y[i] = 20 + Math.random() * 200 + i*2;
        this.life_time[i] = (Math.random()*2 + 2) * 1000;
        this.jianbain[i] = 0;
}
starObj.prototype.suiji = function () {
    var sui = parseInt(Math.random()*49+1, 10); //0-49随机数
    if(!this.isMax[sui]){
        this.isMax[sui] = true;
    }else{
        this.suiji();
    }

}
/**
 * Created by tongqi on 4/5/16.
 */
/*
 msg system:
 stop;start;drop;create;

 plane status:
 flying:1;
 stop:0;
 null:-1;
 */
function plane(num){
    var obj={
        no:num,
        flight:{
            start:function(){
                if(planeList[num].status==0) {
                    if (obj.power > 0) {
                        obj.status = 1;
                        clearPlane(num);
                        var func = setInterval(function () {
                            clearPlane(num);
                            planeList[num].angle += 1;
                            planeList[num].angle = planeList[num].angle % 360;
                            planeList[num].energy.charge();
                            planeList[num].energy.disCharge();
                            planeType(num);
                            showPower(num);
                            if (planeList[num].power <= 0||planeList[num].status==0) {
                                clearInterval(func);
                                planeList[num].flight.stop();
                            }
                        }, 24);
                    }
                }
            },
            stop:function(){
                obj.status=0;
                var func=setInterval(function()
                {
                     showPower(num);
                     planeList[num].energy.charge();
                    if(planeList[num].status>0||planeList[num].status==-1)
                     clearInterval(func);
                },24)
            },
            drop:function(){
                obj.status=-1;
                setTimeout(function(){clearPlane(num)},100);
            },
            self_drop:function(){
                obj.status=-1;
                planeArr[msg.no]=false;
                setTimeout(function(){clearPlane(num)},100);
            }
        },
        energy:{
            charge:function() {
                obj.power += 0.2;
                if(obj.power >= 100)
                    obj.power = 100;
            },
            disCharge:function(){
                if(obj.status==1)
                    obj.power-=0.5;
                if(obj.power<=0) {
                    obj.power = 0;
                    obj.status=0;
                }
            }
        },
        power:100,
        status:0,
        angle:0
    }
    return obj;
}


/**
 * Created by tongqi on 4/5/16.
 */
var Mediator=
{
    StartMsg: function(msg) {
        setTimeout(function () {
            if (Math.random() < 0.7) {
                msg.cmd = 'start';
                planeList[msg.no].flight.start();
                textArea.value+="cmd:"+msg.cmd+"   id: "+msg.no+'\n';
            }
            else
            {
                msg.cmd = 'Packet Loss';
                textArea.value+="cmd:"+msg.cmd+"   id: "+msg.no+'\n';
            }
        },1000);
    },
    StopMsg: function(msg){
        setTimeout(function(){
            if (Math.random() < 0.7) {
                msg.cmd = 'stop';
                planeList[msg.no].flight.stop();
                textArea.value+="cmd:"+msg.cmd+"   id: "+msg.no+'\n';
            }
            else
            {
                msg.cmd = 'Packet Loss';
                textArea.value+="cmd:"+msg.cmd+"   id: "+msg.no+'\n';
            }
        },1000);
    },
    DropMsg: function(msg){
        setTimeout(function(){
            if(Math.random()<0.7){
                msg.cmd = 'drop';
                planeList[msg.no].flight.drop();
                planeArr[msg.no]=false;
                textArea.value+="cmd:"+msg.cmd+"   id: "+msg.no+'\n';
            }
            else
            {
                msg.cmd= 'Packet Loss';
                textArea.value+="cmd:"+msg.cmd+"   id: "+msg.no+'\n';
            }
        },1000);
    }
}

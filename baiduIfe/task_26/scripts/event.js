var EventUtil = {
    addHandler: function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type]=handler;
        }
    }
};
EventUtil.addHandler($$('start1'),'click',function() {
    var msg={no:1, cmd:""};
    Mediator.StartMsg(msg);
})
EventUtil.addHandler($$('stop1'),'click',function(){
    var msg={no:1, cmd:""};
    Mediator.StopMsg(msg);
})
EventUtil.addHandler($$('drop1'),'click',function(){
    var msg={no:1, cmd:""};
    Mediator.DropMsg(msg);
})

EventUtil.addHandler($$('start2'),'click',function() {
    var msg={no:2, cmd:""};
    Mediator.StartMsg(msg);
})
EventUtil.addHandler($$('stop2'),'click',function(){
    var msg={no:2, cmd:""};
    Mediator.StopMsg(msg);
})
EventUtil.addHandler($$('drop2'),'click',function(){
    var msg={no:2, cmd:""};
    Mediator.DropMsg(msg);
})

EventUtil.addHandler($$('start3'),'click',function() {
    var msg={no:3, cmd:""};
    Mediator.StartMsg(msg);
})
EventUtil.addHandler($$('stop3'),'click',function(){
    var msg={no:3, cmd:""};
    Mediator.StopMsg(msg);
})
EventUtil.addHandler($$('drop3'),'click',function(){
    var msg={no:3, cmd:""};
    Mediator.DropMsg(msg);
})

EventUtil.addHandler($$('start4'),'click',function() {
    var msg={no:4, cmd:""};
    Mediator.StartMsg(msg);
})
EventUtil.addHandler($$('stop4'),'click',function(){
    var msg={no:4, cmd:""};
    Mediator.StopMsg(msg);
})
EventUtil.addHandler($$('drop4'),'click',function(){
    var msg={no:4, cmd:""};
    Mediator.DropMsg(msg);
})
EventUtil.addHandler($$('new'),'click',newPlane);

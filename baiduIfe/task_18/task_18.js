var left_in = document.getElementById("left-in");
var right_in = document.getElementById("right-in");
var left_out = document.getElementById("left-out");
var right_out = document.getElementById("right-out");
var content = document.getElementById("wrap");
var queue=new Array();


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

function isValid(input)
{
    return /^\d+$/.test(input);
}
function render()
{
    var str="";
    for(x in queue)
    {
        str+="<div class='content'>"+queue[x]+"</div>"
    }
    content.innerHTML=str;
}

function leftin()
{
    var text = document.getElementById("input").value;
    if(isValid(text)) {
        queue.unshift(text);
        render();
    }
    else
    alert("please input the digit");
}

function rightin()
{
    var text = document.getElementById("input").value;
    if(isValid(text)) {
        queue.push(text);
        render();
    }
    else
        alert("please input the digit");
}

function leftout()
{
    var text = document.getElementById("input").value;
    if(isValid(text)) {
        queue.shift(text);
        render();
    }
    else
        alert("please input the digit");
}
function rightout()
{
    var text = document.getElementById("input").value;
    if(isValid(text)) {
        queue.pop(text);
        render();
    }
    else
        alert("please input the digit");
}
EventUtil.addHandler(left_in,'click',leftin);
EventUtil.addHandler(right_in,'click',rightin);
EventUtil.addHandler(left_out,'click',leftout);
EventUtil.addHandler(right_out,'click',rightout);


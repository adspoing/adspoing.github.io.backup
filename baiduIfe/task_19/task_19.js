var left_in = document.getElementById("left-in");
var right_in = document.getElementById("right-in");
var left_out = document.getElementById("left-out");
var right_out = document.getElementById("right-out");
var content = document.getElementById("wrap");
var num = document.getElementById("wrapNum");
var rand= document.getElementById("random");
var mySort=document.getElementById("sort");
var queue=new Array();
var flag=0;//从大到小或者从小到大

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
    if(/^\d+$/.test(input))
    {
        if(parseInt(input)>=10&&parseInt(input)<=100)
        return true;
        else {
            alert("please input number between 10-100");
            return false;
        }
    }
    alert("please input 10-100 integer");
    return false;
}

function queueNum(queue)
{
    if(queue.length>60) {
        alert("You could only input 60 numbers");
        return false;
    }
    else
    return true;

}
function render()
{
    var str="";
    var str2="";
    for(x in queue)
    {
        str+="<div class='box'>"
        str+="<div class='content' style='height:"+queue[x]+"px;'>"+queue[x]+"</div>"
        str+="</div>"
        str2+="<div class='num'>"+queue[x]+"</div>"

    }
    content.innerHTML=str;
    num.innerHTML=str2;

}
function sortRender(i)
{
    var str="";
    var str2="";
    for(x in queue)
    {
        str+="<div class='box'>"
        if(x == i) {
            str += "<div class='content' style='height:" + queue[x] + "px; background-color:#7fffd4;'>" + queue[x] + "</div>"
            str2+="<div class='num' style='background-color:#7fffd4'>"+queue[x]+"</div>"
        }
            else
                str += "<div class='content' style='height:" + queue[x] + "px;'>" + queue[x] + "</div>"

        str+="</div>"
        str2+="<div class='num'>"+queue[x]+"</div>"

    }
    content.innerHTML=str;
    num.innerHTML=str2;
}
function leftin()
{
    var text = document.getElementById("input").value;
    if(isValid(text)) {
        queue.unshift(text);
        if(queueNum(queue))
        render();
        else
        queue.shift();
    }
}

function rightin()
{
    var text = document.getElementById("input").value;
    if(isValid(text)) {
        queue.push(text);
        if(queueNum(queue))
            render();
        else
        queue.pop();
    }
}

function leftout()
{
    var text = document.getElementById("input").value;
        queue.shift();
        render();
}
function rightout()
{
    var text = document.getElementById("input").value;
        queue.pop();
        render();
}
/*
生成随机序列
 */
function random(){
    queue=[];
    for(var i=0;i<60;i++) {
        var temp = Math.ceil(Math.random() * 90 + 10);
        queue.push(temp);
    }
    render();
}

function bubble(){
    flag=(flag==0)?1:0;
    var i=queue.length-1;
    var mySort=setInterval(function(){
        console.log(i);
        var tmp;
        if(i<=0)
        {
            clearInterval(mySort);
            return;
        }
            for(var j=0;j<i;j++)
            {
                if(flag==0) {
                    if (queue[j] < queue[j + 1]) {
                        var tmp = queue[j];
                        queue[j] = queue[j + 1];
                        queue[j + 1] = tmp;
                        tmp=j;
                    }
                }
                else
                {
                    if (queue[j] > queue[j + 1]) {
                        var tmp = queue[j];
                        queue[j] = queue[j + 1];
                        queue[j + 1] = tmp;
                        tmp=j;
                    }
                }
            }
            sortRender(tmp);
            i--;
    },200);
}

EventUtil.addHandler(left_in,'click',leftin);
EventUtil.addHandler(right_in,'click',rightin);
EventUtil.addHandler(left_out,'click',leftout);
EventUtil.addHandler(right_out,'click',rightout);
EventUtil.addHandler(rand,'click',random);
EventUtil.addHandler(mySort,'click',bubble);


var left_in = document.getElementById("sure");
var content = document.getElementById("wrap");
var tag=document.getElementById("tag");
var tagList=document.getElementById("tag-List");
var queue=new Array();
var tags=new Array();

/*
 事件兼容性
 */
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


/*
trim操作
 */
String.prototype.trim=function()
{
    return this.replace(/(^\s)|(\s*$)/g,"");
}

//


function editTag(){
    this.tmp = this.innerHTML;
    this.innerHTML ="点击删除"+this.innerHTML;
    this.className ="editcontent";
}

function reedit() {
    this.innerHTML = this.tmp;
    this.className="content2";
}

function del()
{
    for(x in tags)
    {
        if(this.tmp == tags[x])
        {
            tagList.removeChild(tagList.childNodes[x]);
            tags.splice(x,1);
        }
    }
    console.log(tags);
}

EventUtil.addHandler(tagList,"mouseover", function(){
    var event=arguments[0]||window.event,target=event.target||event.srcElement;
    if(target && target.tagName === "li".toUpperCase()){
        editTag.call(target,event);
    }
});

EventUtil.addHandler(tagList,"mouseout", function(){
    var event=arguments[0]||window.event,target=event.target||event.srcElement;
    if(target && target.tagName === "li".toUpperCase()){
        reedit.call(target,event);
    }
});

EventUtil.addHandler(tagList,"click", function(){
    var event=arguments[0]||window.event,target=event.target||event.srcElement;
    if(target && target.tagName === "li".toUpperCase()){
        del.call(target,event);
    }
});



/*
增加一个Tag
 */
function addtag(){
    var txt=document.getElementById("tag").value;
    if(/[\t\s,，、;；]+/.test(txt)|| event.keyCode==13){
        txt=txt.trim();
        if(tags.indexOf(txt)==-1)
        tags.unshift(txt);
        renderTag();
        document.getElementById("tag").value="";
    }
}

/*
绘制tag
 */
function renderTag(){
    var tmp="";
    for(x in tags)
    {
        tmp+="<li class='content2'>"+tags[x]+"</li>"
    }
    tagList.innerHTML=tmp;
}



/*
判断是否是数字
 */
function isNumber(input)
{
    if( /^\d+$/.test(input))
    return true;
    else
    {
        return false;
    }
}
/*
对输入进行分词
 */
function myInput(input)
{
    inputArr=input.trim();
    return inputArr.split(/[\n\r\t\s,，、;；]+/g);
}

/*
绘制
 */
function render()
{
    var str="";
    for(x in queue)
    {
        str+="<div class='content'>"+queue[x]+"</div>"
    }
    content.innerHTML=str;
}

/*
添加一个兴趣爱好
 */
function leftin()
{
    var text = document.getElementById("input").value;
    if(isNumber(text)) {
        if(queue.indexOf(text)==-1)
        queue.push(text);
        if(queue.length>10)
        queue.shift();
        render();
    }
    else
    {
        var tmpArr=new Array();
        tmpArr=myInput(text);
        for(x in tmpArr)
        {
            if(queue.indexOf(tmpArr[x])==-1)
            queue.push(tmpArr[x]);
            if(queue.length>10)
                queue.shift();
        }
        render();
    }
}




EventUtil.addHandler(tag,'keyup',addtag);
EventUtil.addHandler(left_in,'click',leftin);


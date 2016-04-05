var preOrder=document.getElementById("pre");
var inOrder=document.getElementById("in");
var postOrder=document.getElementById("post");
var root=document.getElementsByClassName("root")[0];
var result=new Array();
function preTravel(node)
{
    if(node!=null)
    {
        result.push(node);
        preTravel(node.firstElementChild);
        preTravel(node.lastElementChild);
    }
}
function inTravel(node)
{
    if(node!=null)
    {
        inTravel(node.firstElementChild);
        result.push(node);
        inTravel(node.lastElementChild);
    }
}

function postTravel(node)
{
    if(node!=null)
    {
        postTravel(node.firstElementChild);
        postTravel(node.lastElementChild);
        result.push(node);
    }
}
addEvent(preOrder,"click",show);
addEvent(inOrder,"click",show);
addEvent(postOrder,"click",show);

function addEvent(element,type,handler){
    if(element.addEventListener) {
        element.addEventListener(type,handler,false);
    }
    else if(element.attachEvent)
    {
        element.attachEvent("on"+type,handler);
    }
    else
        element["on" + type]=handler;
}

var head,timer;

function show(){
    var event=arguments[0]||window.event,target=event.target||event.srcElement;
    if(result.length>0) {
        head.style.backgroundColor = "#fff";
        result = [];
        clearTimeout(timer);
    }
    if(target && target.id === "pre"){
        preTravel(root);
    }
    else if(target && target.id === "in")
    {
        inTravel(root);
    }
    else if(target && target.id === "post")
    {
        postTravel(root);
    }
    console.log(result);
    animation();

}


function animation()
{
    head=result.shift();
    if(head)
    {
        head.style.backgroundColor="#0000ff";
        timer=setTimeout(function(){
            head.style.backgroundColor="#fff";
            animation();
        },500);
    }
}
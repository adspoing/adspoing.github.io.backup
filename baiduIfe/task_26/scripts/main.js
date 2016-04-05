function $$(id)
{
    return document.getElementById(id);
}
var canvas=$$('canvas');
var cans=canvas.getContext('2d');
var planeArr=[];
var planeList=[];
/* initialize*/
for(var i=1;i<5;i++)
{
    planeArr[i]=false;
}
var textArea=$$('text');

/*draw star*/
function drawArc()
{
    cans.arc(400,300,80,0,Math.PI*2);
    cans.fillStyle = 'blue';
    cans.fill();
}


drawArc();



function newPlane(){
    for(var i=1;i<5;i++)
    {
        if(planeArr[i]==false)
        {
            planeArr[i]=true;
            planeList[i]=plane(i);
            initPlane(i);
            textArea.value+="The new plane's id:"+i+"\n";
            break;
        }
    }
    if(i==5)
    {
        textArea.value+="You can no more add plane \n";
    }
}
function planeType(num)
{
    cans.fillStyle = 'yellow';
    this.radius=300-num*40;
    this.x=370+this.radius*Math.sin(Math.PI*planeList[num].angle/180);
    this.y=num*40-20+this.radius*(1-Math.cos(Math.PI*planeList[num].angle/180));
    if (planeList[num].status >= 0)
    {
        cans.fillRect(this.x, this.y, 60, 20);
    }
    else
        cans.clearRect(this.x,this.y,60,20);
}
function initPlane(num)
{
    planeType(num);
    showPower(num);
}


function clearPlane(num)
{
    this.radius=300-num*40;
    this.x=370+this.radius*Math.sin(Math.PI*planeList[num].angle/180);
    this.y=num*40-20+this.radius*(1-Math.cos(Math.PI*planeList[num].angle/180));
    cans.clearRect(this.x-2,this.y-2,64,24);
}

function showPower(num)
{
    this.radius=300-num*40;
    this.x=370+this.radius*Math.sin(Math.PI*planeList[num].angle/180);
    this.y=num*40-20+this.radius*(1-Math.cos(Math.PI*planeList[num].angle/180));
    cans.fillStyle = 'red';
    cans.fillRect(this.x,this.y,60*planeList[num].power/100,20);
}

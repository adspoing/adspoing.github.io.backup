var input=document.getElementById("input");
var tipsDom=document.getElementById("tips");
var tips={
    error_length:{
        "text":"长度为4~16个字符"
    },
    error_empty:{
        "text":"姓名不能为空"
    },
    ok:{
        "text":"名称格式正确"
    }
}

var Reg = /^.{4,16}$/;

function verify(){
    var text=input.value.trim().rep_Chinese();
    if(text.length==0)
    {
        tipsDom.innerHTML=tips.error_empty.text;
        tipsDom.style.color="red";
        input.style.border="2px solid red";
    }
    if(Reg.test(text))
    {
        tipsDom.innerHTML=tips.ok.text;
        tipsDom.style.color="#eee";
        input.style.border="1px solid #a8a8a8";
    }
    else
    {
        tipsDom.innerHTML=tips.error_length.text;
        tipsDom.style.color="red";
        input.style.border="2px solid red";
    }
}
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g,"");
}
String.prototype.rep_Chinese=function(){
    return this.replace(/[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g,"aa");
}
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var table="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"
var tb=document.getElementById("aqi-table");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=document.getElementById("aqi-city-input").value;
    var aqi=document.getElementById("aqi-value-input").value;
    table+="<tr><td>"+city+"</td><td>"+aqi+"</td><td><button onclick=delBtnHandle(this)>删除</button></td>";
    return table;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    tb.innerHTML=table;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(obj) {
    var tr=obj.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
    updateTable();
    //renderAqiList();
}

function updateTable(){
    console.log("task");
    console.log(tb.children[0]);
    console.log(tb.children[0]);
}
function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var btn=document.getElementById("add-btn");
    btn.addEventListener('click', function(){
        addBtnHandle();
    })
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    //delBtnHandle();

}

init();
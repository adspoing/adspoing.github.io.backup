
/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
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

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData={

}

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
   var canvas=document.getElementsByClassName("aqi-chart-wrap");
    var str="";
    var height;
    console.log(pageState.nowGraTime);
    for(x in chartData[pageState.nowGraTime])
    {
        str+="<div class='chart "+pageState.nowGraTime+"'>";
        if(pageState.nowGraTime=='day')
        {
            height=chartData[pageState.nowGraTime][x];
        }
        else if(pageState.nowGraTime=='week')
        {
            height=chartData[pageState.nowGraTime][x]/7;
        }else
        {
            height=chartData[pageState.nowGraTime][x]/30;
        }
        str+="<div class='box' style='height:"+height+"px;background:"+getRandomColor()+"'></div>"
        str+="</div>";
    }
    canvas[0].innerHTML=str;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    if(pageState.nowGraTime == this.value)
       return;
    pageState.nowGraTime=this.value;
    renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    // 确定是否选项发生了变化
    console.log(this.value);
    if(pageState.nowSelectCity == this.value)
        return;
    pageState.nowSelectCity = this.value;
    // 设置对应数据
    initAqiChartData();
    renderChart();
    // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var tm=document.getElementsByName("gra-time");
    for(x in tm){
        EventUtil.addHandler(tm[x],"click",graTimeChange);
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
      var city=document.getElementById("city-select");
      var tmp="";
      for(x in aqiSourceData)
      {
          tmp+="<option>"+x+"</option>";
      }
      city.innerHTML=tmp;
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
      EventUtil.addHandler(city,"change",citySelectChange);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    var month={};
    pageState.nowSelectCity=document.getElementById("city-select").value;
    console.log(pageState.nowSelectCity)
     for(x in aqiSourceData) {
         if (x == pageState.nowSelectCity) {
             var day =new Array();
             var week = new Array();
             var city = x;
             var data = aqiSourceData[city];
             var initWeekDay = 5; //2016年1月1日是星期五
             var thisWeek = 0;
             for (y in data) {
                 day.push(data[y]);
                 thisWeek += data[y];
                 initWeekDay++;
                 if (initWeekDay == 7) {
                     week.push(thisWeek);
                     initWeekDay = 1;
                     var thisWeek = 0;
                 }
             }
             chartData.day = day;
             chartData.week = week;
             var initMonth = 01;
             var month = new Array();
             var thisMonth=0;
             for( z in data){
                 var nowMonth= z.slice(5,7);
                 if(nowMonth == initMonth)
                    thisMonth+=data[z];
                 else{
                     month.push(thisMonth);
                     thisMonth=0;
                     initMonth+=1;
                 }
             }
             month.push(thisMonth);
             chartData.month = month;
             console.log(chartData);
         }
     }
    renderChart();
}

/**
 * 得到随机颜色
 */
var getRandomColor = function(){

    return '#'+(Math.random()*0xffffff<<0).toString(16);

}
/**
 * 初始化函数
 */
function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
}

init();
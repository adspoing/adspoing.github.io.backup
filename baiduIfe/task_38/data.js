/**
 * Created by tongqi on 4/27/16.
 */
var data={
    gridColumns:[
        {
            name:'姓名',
            sortActive:'no'
        }
        ,
        {
            name:'语文',
            sortActive:'yes'
        },
        {
            name:'数学',
            sortActive:'yes'
        },
        {
            name:'英文',
            sortActive:'yes'
        },
        {
            name:'总分',
            sortActive:'yes'
        }],
    gridData:[
        {姓名:'小明',语文:'80',数学:'90',英文:'70',总分:'240'},
        {姓名:'小红',语文:'90',数学:'60',英文:'90',总分:'240'},
        {姓名:'小亮',语文:'60',数学:'100',英文:'70',总分:'230'},
        {姓名:'小王',语文:'90',数学:'70',英文:'85',总分:'245'}

    ]
}

var table=createTable('table',data);


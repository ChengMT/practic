var arrJob =[
    {
        post:"软件开发工程师",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"人事经理",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"测试工程师",
        area:"上海",
        time: "1分钟前"
    },
    {
        post:"测试工程师",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"软件开发工程师",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"研发工程师",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"管理员",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"工程管理",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"人事经理",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"产品经理",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"架构工程师",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"理财经理",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"3D设计师",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"产品经理",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"测试工程师",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"理财经理",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"3D设计师",
        area:"北京",
        time: "1分钟前"
    },
    
    {
        post:"研发工程师",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"架构工程师",
        area:"广州",
        time: "1分钟前"
    },
    {
        post:"工程管理",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"人事经理",
        area:"上海",
        time: "1分钟前"
    },
    
    {
        post:"架构工程师",
        area:"上海",
        time: "1分钟前"
    },
    {
        post:"管理员",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"产品经理",
        area:"上海",
        time: "1分钟前"
    },
    
    {
        post:"3D设计师",
        area:"上海",
        time: "1分钟前"
    },
    {
        post:"研发工程师",
        area:"上海",
        time: "1分钟前"
    },
    {
        post:"管理员",
        area:"上海",
        time: "1分钟前"
    },
    {
        post:"软件开发工程师",
        area:"上海",
        time: "1分钟前"
    },
    {
        post:"理财经理",
        area:"北京",
        time: "1分钟前"
    },
    {
        post:"研发工程师",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"工程管理",
        area:"上海",
        time: "1分钟前"
    },
    {
        post:"人事经理",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"工程管理",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"架构工程师",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"产品经理",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"测试工程师",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"3D设计师",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"管理员",
        area:"深圳",
        time: "1分钟前"
    },
    {
        post:"理财经理",
        area:"上海",
        time: "1分钟前"
    },
    {
        post:"软件开发工程师",
        area:"广州",
        time: "1分钟前"
    },
];


//display函数显示不同地区被选择时的无缝滚动的显示
function display(newArr){
    var allJob='';
    for(var i=0; i<newArr.length; i++){
        allJob += '<p><span  class="left">'+ newArr[i].post + '</span><span class="center">'+ newArr[i].area + '</span><span class="right">'+ newArr[i].time + '</span></p>';
    }
    document.getElementsByClassName("box1").item(0).innerHTML= allJob;
    document.getElementsByClassName("box2").item(0).innerHTML= allJob;
}

//以下函数的调用使arrJOB里面area是不同地区时候产生对应的新的数组，即筛选出相同地区的对象，组成一个新的数组
function Area(area){
    var currentArea=[];
    for(var i=0;i<arrJob.length;i++){
        if(arrJob[i].area == area){
            currentArea.push(arrJob[i]);
        }
    }
    return  currentArea;
}

// 页面初始化、首先需要在页面显示全部的工作 
display(arrJob);

//以下是用事件监听来完成任务，最终还有使用DOM操作来完成的方法
var loca=document.querySelector(".location");
loca.onclick=function(event){
    var target = event.target || event.srcElement;
    // console.log(event);
    switch(target.id){
        case "all":
            document.querySelector(".clicked").classList.remove("clicked");
            document.getElementById("all").className += ' ' + "clicked";
            display(arrJob);
            break;
        case "shenzhen":
            document.querySelector(".clicked").classList.remove("clicked");
            document.getElementById("shenzhen").className += ' ' + "clicked";
            display( Area("深圳") );
            break;
        case "shanghai":
            document.querySelector(".clicked").classList.remove("clicked");
            document.getElementById("shanghai").className += ' ' + "clicked";
            display( Area("上海") );
            break;
        case "guangzhou":
            document.querySelector(".clicked").classList.remove("clicked");
            document.getElementById("guangzhou").className += ' ' + "clicked";
            display( Area("广州") );
            break;
        case "beijing":
            document.querySelector(".clicked").classList.remove("clicked");
            document.getElementById("beijing").className += ' ' + "clicked";
            display( Area("北京") );
            break;
    }
    
}

//以下是使用DOM操作来判定选择的是哪个地方

// //以下是选择“全部”时显示无缝滚动的职务信息 和 “全部”字体加粗，下边框显示绿色代表被选中
// document.getElementById("all").onclick=function(){
//     document.querySelector(".clicked").classList.remove("clicked");
//     var newStyle=document.getElementById("all");
//     newStyle.className += ' ' + "clicked";
//     // 以上是第一种方法，使得点击后，“全部”显示加粗和底边的border变为绿色

//     // newStyle.style.setProperty('border-bottom','solid 3px green');
//     // newStyle.style.setProperty('font-weight','bold');
//     // 以上是第二种方法，使得点击后，“全部”显示加粗和底边的border变为绿色
    
//     display(arrJob);
// }

// //以下是选择“深圳”时的onclick事件，显示职务及“深圳”字体加粗
// document.getElementById("shenzhen").onclick =function(){
//  //需要在新增新的样式之前把之前选择的地址的样式先去除掉   
//     document.querySelector(".clicked").classList.remove("clicked");
////以下是选中后增加样式
//     document.getElementById("shenzhen").className += ' ' + "clicked";
//     console.log(document.getElementById("shenzhen").className.split(' '));
//     //以下是无缝滚动
//     display( Area("深圳") );
// }

// //以下是选择“上海”时的onclick事件，显示职务及“上海”字体加粗
// document.getElementById("shanghai").onclick =function(){
//     document.querySelector(".clicked").classList.remove("clicked");
//     document.getElementById("shanghai").className += ' ' + "clicked";
//     display( Area("上海") );
// }

// //以下是选择“广州“时的onclick事件，显示职务及“广州”字体加粗
// document.getElementById("guangzhou").onclick =function(){
//     document.querySelector(".clicked").classList.remove("clicked");
//     document.getElementById("guangzhou").className += ' ' + "clicked";
//     display( Area("广州") );
// }

// //以下是选择“北京”时的onclick事件，显示职务及“北京”字体加粗
// document.getElementById("beijing").onclick =function(){
//     document.querySelector(".clicked").classList.remove("clicked");
//     document.getElementById("beijing").className += ' ' + "clicked";
//     display( Area("北京") );
// }




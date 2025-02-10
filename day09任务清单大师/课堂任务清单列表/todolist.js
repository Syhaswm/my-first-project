// 1.获取节点
let inp = document.querySelector("#title"); // 输入框
let ol = document.querySelector("#todolist"); // ol容器
let count = document.querySelector("#todocount"); // 事件个数

// 存放所有数据的容器
let data = [];
// 2.对input框绑定键盘事件
inp.onkeydown = function(e){
    // 确定是否按下了enter键
    // e就是事件对象，会检测到关于触发这个事件的所有信息
    if(e.keyCode == 13){
        // 获取输入框的值
        let value = inp.value;
        // 清除字符串两端空白内容
        value = value.trim();
        if(value.length != 0){
            data.push(value);
            // 清空input的值
            inp.value = "";
            // 重置数据 页面效果初始化
            ol.innerHTML = "";
            // 渲染出现 封装函数
            render();
            // 计数函数调用
            getCout();
        }else{
            alert("不能添加空白内容");
        }
    }
}

// 渲染函数
function render(){
    // 循环data数据
    for(let i=0;i<data.length;i++){
        // 索引
        // 数据
        // 生成一个li标签
        let li = document.createElement("li");
        // 对li填充内容
        li.innerHTML = `
        <p>${data[i]}</p>
        <a href="javascript:;" onclick="delet(this)"></a>
        `
        // 将li追加到ol里
        ol.append(li);
    }
}

// 删除函数
function delet(t){
    // t代表点击的那个a标签 通过a找到父节点li
    // 1.页面效果的删除
    // 2.删除点击的那个data数据   通过li里面文本，去data里面对应删除那个文本数据
    let text = t.parentNode.innerText;
    // // 通过数据获取在data里面的索引值
    let index = data.indexOf(text);
    // // 通过data数组的索引，删除指定的元素
    // // splice(参数一：根据指定的索引位置开始删除，参数二：是删除个数)
    data.splice(index,1);
    ol.removeChild(t.parentNode);
    // 计数函数调用
    getCout();
};

// 计数函数
function getCout(){
    // 取决于ol子元素的个数
    count.innerHTML = ol.children.length;
};

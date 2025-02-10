// 获取节点
let inp = document.querySelector("#title"); // 输入框节点
let ol = document.querySelector("#todolist"); // ol容器节点
let count = document.querySelector("#todocount"); // 事件个数

// 存放所有数据的容器
let data = [];
// 键盘事件 点击事件，双击事件
// 给输入框写键盘事件
inp.onkeydown = function (e) {
    // 确定是否按下enter键
    // 此时的e就是事件对象，会检测到关于事件的所有信息
    if (e.keyCode == 13) {
        let value = inp.value;
        // 清楚value的左右空白
        value = value.trim();
        // 有内容才添加
        if (value.length != 0) {
            // 把内容存储起来
            data.push(value);
            // 清空input框的值
            inp.value = "";
            // 让内容渲染出现 格式化快捷键shift+alt+f
            // 渲染函数功能
            // 渲染之前都先让数据先清空一次,初始化一次
            ol.innerHTML = "";
            render();
            // 触发顺序变化
            getCount();
        }else{
            alert("空白内容不能添加");
        }
    }
}
// 渲染函数 
function render(){
    // 将每一件事情渲染到ol的li里面
    // 循环所有数据
    for(let i=0;i<data.length;i++){
        // 打印出每一条数据
        // 每循环一次就创建一个li标签
        let li = document.createElement("li");
        // 对li添加内容
        li.innerHTML = `
        <p>${data[i]}</p>
        <a href="javascript:;" onclick="delet(this)"></a>
        `;
        // 将li添加到ol容器
        ol.append(li);
    }
}
// 删除功能
function delet(t){
    // 删除 此时传来的this就代表a标签本身
    // 删除li 先找到li，再通过ol.removeChild(子元素)
    // 还要删除真正的数据 innerText  li节点的内容
    let text = t.parentNode.innerText;
    // 根据数据获取在data里的索引值
    let index = data.indexOf(text);
    // 根据那条数据的索引删除掉本数据
    // splice(参数一根据哪个索引位置删除，参数二是删除个数)
    data.splice(index,1);
    // 页面效果删除，
    ol.removeChild(t.parentNode);
    // 计数
    getCount();
}
// 计数函数
function getCount(){
    // 取决于ol子元素的长度
    count.innerHTML = ol.children.length;
}
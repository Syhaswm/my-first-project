var inp = document.querySelector("#title")
var ol = document.querySelector("#todolist")
var count = document.querySelector("#todocount")
let data = []
inp.onkeydown = function(e){
    if (e.keyCode == 13){
        let value = inp.value;
        value = value.trim();
        if (value.length != 0){
            data.push(value);
            inp.value = "";
            // console.log(data);
            ol.innerHTML = "";
            render();
            getCount();
        }
        else{
            alert("不能添加空白内容！");
        }
    }
}

function render(){
    for (let i = 0;i<data.length;i++)
    {
        let li = document.createElement("li");
        li.innerHTML = `
        <p>${data[i]}</p>
        <a href="javascript:;" onclick="delet(this)"></a>
        `
        ol.append(li);
    }
}
function delet(t){
    ol.removeChild(t.parentNode)
    let text = t.innerText
    let index = data.indexOf(text)
    data.splice(index,1)
    getCount()
}

function getCount(){
    count.innerHTML = ol.children.length
}

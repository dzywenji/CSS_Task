// 头部部分：找雇主、找护工两个按钮的交替效果
/* 
1、找到要操作的元素
2、定义事件处理函数：点击事件，当点击到谁，谁的z-index层级就高
3、调用目标元素对象的添加事件监听函数，参数为：点击事件，事件处理函数，冒泡阶段触发
*/

var oEmployers = document.getElementById('employers');
var oCarers = document.getElementById('carers');

var fn = function(event) {
    if (event.target == oCarers) {
        oCarers.style.zIndex = 3;
        oEmployers.style.zIndex = 1;
    } else {
        oCarers.style.zIndex = 1;
        oEmployers.style.zIndex = 3;
    }

}

oEmployers.addEventListener('click', fn, false);
oCarers.addEventListener('click', fn, false);
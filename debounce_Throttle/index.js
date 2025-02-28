// 防抖 搜索输入框 resize事件 表单验证
let debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
};
// 按钮点击  页面滚动
let throttle = (fn, delay) => {
    let timer = null;
    return function (...args) {
        if (timer) {
            return;
        }
        fn.apply(this, args);
        timer = setTimeout(() => {
            timer = null;
        }, delay);
    };
};

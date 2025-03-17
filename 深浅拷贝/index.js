let obj  = {
    a: 1,
    b: 2,
    c: 3
};
let p = structuredClone(obj);
let q = JSON.parse(JSON.stringify(obj));
function deepClone(target) {
    // 处理特殊对象类型
    if (target instanceof Date) {
        copy = new Date(target.getTime());
        return copy;
    }

    if (target instanceof RegExp) {
        copy = new RegExp(target);
        return copy;
    }

    if (
        Object.prototype.toString.call(target) !== '[object Object]'
        && Object.prototype.toString.call(target) !== '[object Array]'
    ) {
        return target;
    }
    let copy = Array.isArray(target) ? [] : {};
    Object.keys(target).forEach((key) => {
        copy[key] = target[key] instanceof Object ? deepClone(target[key]) : target[key];
    });
    return copy;
};

function shallowCopy() {
    let newobj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newobj[key] = obj[key];
        }
    }
    return newobj;
}

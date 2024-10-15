function memoize(fn) {
    const cacheThis = new Map();

    return function(...args) {
        const thisArg = this || window;
        if(!cacheThis.has(thisArg)) {
            cacheThis.set(thisArg, new Map());
        }
        const cache = cacheThis.get(thisArg);
        const cacheKey = JSON.stringify(...args);
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        }
        const result = fn.apply(thisArg, args);
        cache.set(cacheKey, result);
        return result;
    };
}

const func = (a, b) => {
     return a + b;
}
let memoed = memoize(func);
console.log(memoed(1, 2)); // 3
console.log(memoed(1, 2)); // 3 (从缓存中获取)
console.log(memoed(1, 3)); // 4
console.log(memoed(1, 2)); // 3 (从缓存中获取)

function funcThis(b) {
     return `${this.a}_${b}`;
}
memoed = memoize(funcThis);
const a = {
    a: 1,
    memoed
};
const b = {
    a: 2,
    memoed
};
console.log(a.memoed(2)); // "1_2"
console.log(a.memoed(2)); // "1_2" (从缓存中获取)
console.log(b.memoed(2)); // "2_2"
console.log(a.memoed(3)); // "1_3"
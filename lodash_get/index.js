let obj = {
    a: {
        b: {
            c: {
                d: {
                    x: 1
                }
            }
        }
    }
};
function get(object, path, defaultValue) {
    let arr = path.split('.');
    let result  = object;
    for (let key of arr) {
        if (result === null || !(key in result)) {
            return defaultValue;
        }
        result = result[key];
    }
    return result;
}
console.log(get(obj, 'a.b.c.b.x', -1));


const obj2 = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        c: 3
    },
    e: 4
};

let deepGet = (obj) => {
    let ans = {};
    let dfs = (obj, level, s) => {
        if (obj instanceof Object) {
            Object.keys(obj).forEach(key => {
                dfs(obj[key], level + 1, s + '.' + key);
            });
        }
        else {
            ans[s] = {
                value: obj,
                level: level
            };
        }
    };

    Object.keys(obj).forEach(key => {
        dfs(obj[key], 1, key);
    });

    return ans;
};
console.log(deepGet(obj2));

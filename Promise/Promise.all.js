let myPromiseAll = async (promises) => {
    return await new Promise((resolve, reject) => {
        let count = 0;
        let ans = [];
        if (!Array.isArray(promises)) {
            return Promise.reject(new TypeError('Expected an array'));
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                ans[index] = res;
                count++;
                if (count === promises.length) {
                    resolve(ans);
                }
            }).catch(error => {
                reject(error);
            });
        });
    });
};

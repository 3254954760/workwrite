let PromiseRetry = (task, delay, times) => {
    return new Promise((resolve, reject) => {

        let attemp = () => {
            task().then(resolve).catch(err => {
                if (times > 0) {
                    times--;
                    console.log('重试');
                    setTimeout(() => {
                        attemp();
                    }, delay);
                }
                else {
                    reject(err);
                }
            });
        };
        attemp();
    });
};

let task = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(0);
        }, 1000);
    });
};
PromiseRetry(task, 1000, 3).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

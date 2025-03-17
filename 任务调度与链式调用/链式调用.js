class scheduler {
    constructor() {
        this.queue = [];
        this.beforeTask = null;
    }

    add(task) {
        this.queue.push(task);
        return this;
    }

    async start() {
        // 若有前置任务，先执行前置任务
        if (this.beforeTask) {
            this.beforeTask();
        }
        // 遍历任务队列，依次执行任务
        for (const task of this.queue) {
            if (typeof task === 'function') {
                const result = task();
                // 如果任务返回的是 Promise，等待 Promise 完成
                if (result instanceof Promise) {
                    await result;
                }
            }
        }
    }

    wait(delay) {
        const waitTask = () => {
            return new Promise((resolve) => {
                setTimeout(resolve, delay);
            });
        };
        this.tasks.push(waitTask);
        return this;
    }

    before(task) {
        this.beforeTask = task;
        return this;
    }
}

let task = () => {
    return new scheduler();
};

// task()
//     .add(() => {
//         console.log('task1');
//     })
//     .add(() => {
//         console.log('task2');
//     })
//     .start();
// task1 -> task2


// task()
//     .add(() => {
//         console.log('task1');
//     })
//     .wait(2000)
//     .add(() => {
//         console.log('task2');
//     })
//     .start();
// task1 -> 2000ms 后 -> task2


task()
    .add(() => {
        console.log('task1');
    })
    .wait(2000)
    .add(() => {
        console.log('task2');
    })
    .before(() => {
        console.log('task3');
    })
    .start();
//  task3 -> task1 -> 2000ms 后 -> task2

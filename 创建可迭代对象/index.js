class MyIterator {
    constructor(data) {
        this.data = data;
        this.index = 0;
    }

    // 实现[Symbol.iterator]()方法
    [Symbol.iterator]() {
        let data = this.data;
        let index = this.index;
        return {
            next() {
                if (index < data.length) {
                    return {value: data[index++], done: false};// 这里index++是关键
                }
                return {done: true};

            },
            return() {
                console.log('终止迭代');
                return {done: true};
            }
        };
    }
}
const data = [1, 2, 3, 4, 5];
const myIterator = new MyIterator(data);
// console.log(myIterator[Symbol.iterator]().next());
for (const item of myIterator) {
    console.log(item);
}

class MyEventEmit {
    constructor() {
        this.events = {};
    }

    on(event, fn) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(fn);
    }

    emit(event, ...args) {
        this.events[event].forEach(fn => {
            fn(...args);
        });
    }

    off(type, handle) {
        if (!this.events[type]) {
            return;
        }
        this.events[type] = this.events[type].filter(item => item !== handle);
    }

    once(event, fn) {
        const wrapper = (...args) => {
            fn(...args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }

}
const ee = new MyEventEmit();
ee.once('wakeUp', (name) => {
    console.log(`${name} 1`);
});
ee.on('eat', (name) => {
    console.log(`${name} 2`);
});
ee.on('eat', (name) => {
    console.log(`${name} 3`);
});
const meetingFn = (name) => {
    console.log(`${name} 4`);
};
ee.on('work', meetingFn);
ee.on('work', (name) => {
    console.log(`${name} 5`);
});

ee.emit('wakeUp', 'xx');
ee.emit('wakeUp', 'xx'); // 第二次没有触发
ee.emit('eat', 'xx');
ee.emit('work', 'xx');
ee.off('work', meetingFn); // 移除事件
ee.emit('work', 'xx'); // 再次工作

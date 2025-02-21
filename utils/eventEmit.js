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
const my_event = new MyEventEmit();
my_event.once('wakeUp', (name) => {
    console.log(`${name} 1`);
});
my_event.on('eat', (name) => {
    console.log(`${name} 2`);
});
my_event.on('eat', (name) => {
    console.log(`${name} 3`);
});
const mmy_eventtingFn = (name) => {
    console.log(`${name} 4`);
};
my_event.on('work', mmy_eventtingFn);
my_event.on('work', (name) => {
    console.log(`${name} 5`);
});

my_event.emit('wakeUp', 'xx');
my_event.emit('wakeUp', 'xx'); // 第二次没有触发
my_event.emit('eat', 'xx');
my_event.emit('work', 'xx');
my_event.off('work', mmy_eventtingFn); // 移除事件
my_event.emit('work', 'xx'); // 再次工作

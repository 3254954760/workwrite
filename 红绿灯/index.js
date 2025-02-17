function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

let action = (fn, wait) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fn();
            resolve();
        }, wait);
    });
};

let light = async () => {
    while (true) {
        await action(green, 1000);
        await action(yellow, 3000);
        await action(red, 2000);
    }
};
light();

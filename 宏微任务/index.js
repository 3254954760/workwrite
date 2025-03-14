setTimeout(() => console.log(1));
new Promise((resolve) => {
  resolve();

  console.log(2);
}).then(() => {
  setTimeout(() => console.log(3));

  console.log(4);

  Promise.resolve()
    .then(() => {
      console.log(5);
    })
    .then(() => {
      Promise.resolve().then(() => {
        console.log(6);
      });
    });
});

console.log(7);

console.log(1);
const asyncFunc = async () => {
    console.log(2);
    const res = await Promise.resolve();
    console.log(5);
    return res;
};
asyncFunc().then((res) => {
    console.log(6);
    setTimeout(() => {
        console.log(8);
    }, 0);
});
setTimeout(() => {
    console.log(9);
}, 0);

new Promise((resolve) => {
    console.log(10);
    resolve();
}).then(() => {
    console.log(11);
})
// 1 2  10 5  11 6  9  8




console.log('start');
setTimeout(() => {
 console.log('setTimeout');
});

requestAnimationFrame(() => {
 console.log('requestAnimationFrame');
});

var p = new Promise(resolve => {
 console.log('promise');
 resolve();
})
 .then(() => {
   console.log('then1');
   return new Promise()
 })
 .then(() => {
   console.log('then2');
 });

async function a() {
 console.log('async1');
 await p;
 console.log('async2');
}
a();

console.log('end');

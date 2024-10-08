var length = 10;

function fn() {
  return this.length + 1;
}

var obj1 = {
  length: 5,

  test1: function () {
    return fn();
  },
};

const a = obj1.test1.call();
console.log("a:" + a); // 11

const b = obj1.test1();
console.log("b:" + b); // 11

obj1.test2 = fn;
const c = obj1.test2.call(); // 11
console.log("c:" + c);

const d = obj1.test2(); // 6
console.log("d:" + d);



var name = "123";
let obj = {
    name: "345",
    getName: function() {
        function getInfo() {
            console.log(this.name);
        }
        getInfo();
    }
};
// obj.getName();
var name = "123";
let object = {
    name: "345",
    getName: function() {
       let getInfo=()=> {
            console.log(this.name);
        }
        getInfo();
    }
};
// object.getName();

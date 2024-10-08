function add(...args) {
    console.log(Object.prototype.toString.call(args))
    let sum = args.reduce((acc, cur) => acc + cur, 0);
    function sumof() {
        return sum;
    }
    function nextAdd(...newArgs) {
        sum += newArgs.reduce((acc, cur) => acc + cur, 0);
        return nextAdd;
    }
    nextAdd.sumof = sumof;
    return nextAdd;
}
function sumAdd(...args){
    let sum =args.reduce((acc, cur) => acc + cur, 0);

    function nextAdd(...newArgs) {
        if(newArgs.length===0){
            return sum
        }
        sum += newArgs.reduce((acc, cur) => acc + cur, 0);
        return nextAdd;
    }
    return nextAdd
}
// let ans = add(2, 3)(3)(2).sumof();
let ans =sumAdd(2, 3)(3)(2)()
console.log(ans);  // 输出 10

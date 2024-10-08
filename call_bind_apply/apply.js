Function.prototype.myApply = function(obj, arr){
    obj.fn = this
    obj.fn(...arr)
    delete obj.fn
}
let obj= {
    name:'张三'
}
function Person(age,address){
    console.log(this.name,age,address)
}
Person.myApply(obj,['18','四川'])
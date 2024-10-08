Function.prototype.mycall = function(obj, ...args){
    obj.fn = this
    obj.fn(...args)
    delete obj.fn
}
let obj= {
    name:'张三'
}
function Person(age){
    console.log(this.name,age)
}
Person.mycall(obj,'18')
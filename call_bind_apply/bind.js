Function.prototype.myBind = function(obj, ...args){
    obj.fn = this
    return () =>{
        obj.fn(...args)
    }
}
let obj= {
    name:'张三'
}
function Person(age){
    console.log(this.name,age)
}
Person.myBind(obj,'18')()
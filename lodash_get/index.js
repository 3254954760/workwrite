let obj = {
    a:{
        b:{
            c:{
                d:{
                    x:1
                }
            }
        }
    }
}
function get(object,path,defaultValue){
    let arr = path.split(".")
    let result  = object
    for(let key of arr){
        if(result ===null || !(key in result)){
            return defaultValue
        }
        result = result[key]
    }
    return result
}
console.log(get(obj,'a.b.c.b.x',-1))

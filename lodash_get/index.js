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
    arr.forEach(key=>{
        if(result ===null || !(key in result)){
            return defaultValue
        }
        result = result[key]
    })
    return result
}
get(obj,'a.b.c.d.x',-1)

class Scheduler {
    constructor(){
        this.maxTask =2
        this.queue =[]
        this.running =0
        this.map= new Map()
    }
  add(task) {
      this.queue.push(task)
      return new Promise((resolve,reject)=>{
          this.map.set(task,{resolve,reject})
          this.run()
      })
   }
    run(){
        if(this.running<this.maxTask && this.queue.length>0){
            this.running++;
            let task = this.queue.shift()
            const {resolve,reject} = this.map.get(task)
            task().then((data)=>{
                this.running--
                resolve(data)
                this.run()
            }).catch(err =>{
                reject(err)
                this.running--
                this.run()
            })
        }
    }
}

const timeout = (time) => new Promise((resolve,reject) => {
  setTimeout(()=>{
    resolve()
    reject('报错'+time)
  }, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
    .catch(err => console.log(err))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
addTask(600, '6')
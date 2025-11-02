const obj = {
    user:{
        age:18,
        name:'kevin'
    }
}
const produce=(base,fn:(draft:any)=>void)=>{
   const modified = {}
    const handler = {
       get(target,prop,receiver){
           if(prop in modified){
               return modified[prop]
           }
           return Reflect.get(target,prop,receiver)
       }
    }
}
const newObj =produce(obj,(draft)=>{
    draft.user.name='demo'
    draft.user.age=20
})
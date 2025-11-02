class Node {
    constructor(element) {
        this.element = element //1
        this.next = null //  null
    }
}
class LinkList {
    constructor(element){
        this.head = null //1
        this.size = 0 //1
    }
    append(element){
        let node = new Node(element) // {ele:3,next:null}
        if(this.head === null) {
            this.head = node
        } else {
            let current = this.getNode(this.size -1)
            console.log('current',current)
            current.next = node
        }
        this.size ++
    }
    appendAt(position,element){
        if(position <0 || position>this.size){
            throw new Error('position out range')
        }
        let node = new Node(element)
        if(position===0){
            node.next = this.head
            this.head = node
        } else{
            let pre = this.getNode(position - 1)
            node.next = pre.next
            pre.nexs  = node
        }
        this.size++
    }

    removeAt(position){
        if(position <0 || position>=this.size){
            throw new Error('position out range')
        }
        let current = this.head
        if(position===0){
         this.head = current.next
        } else{
            let pre = this.getNode(position-1)
            current = pre.next
            pre.next = current.next
        }
        this.size --
    }
    indexOf(element){
        let current = this.head
        for(let i=0;i<this.size.length;i++){
            if(current.element === element){
                return i
            }
            current =current.next
        }
        return -1
    }
    getNode(index){ // 0
        if(index<0||index >=this.size){
            throw new Error('out range')
        }
        let current = this.head
        for(var i =0;i<index;i++){
            current = current.next
        }
        console.log('current222',current)
        return current
    }
}
let ll = new LinkList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)
ll.removeAt(0)
let index=  ll.indexOf(3)
console.dir(ll,{
    depth:100
})
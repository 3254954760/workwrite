const arr = [
    { id: 1, name: 'i1' },
    { id: 2, name: 'i2', parentId: 1 },
    { id: 4, name: 'i4', parentId: 3 },
    { id: 3, name: 'i3', parentId: 2 },
    { id: 7, name: 'i7', parentId: 3 },
    { id: 8, name: 'i8', parentId: 3 }
]
let arrToTree = (arr) => {
    let nodeMap ={}
    let roots =[]
    arr.forEach((item) => {
        nodeMap[item.id] = {
        ...item,
        children:[]
       }
    })
    arr.forEach(item => {
        const {id,parentId} =item;
        if(parentId){
            nodeMap[parentId].children.push(nodeMap[id])
        }
        else {
            roots.push(nodeMap[id])
        }
    })
    return roots
}
console.log(arrToTree(arr))


const tree = [
    {
      id: 1,
      name: 'i1',
      children: [
        {
          id: 2,
          name: 'i2',
          children: [
            {
              id: 3,
              name: 'i3',
              children: []
            },
            {
              id: 4,
              name: 'i4',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: 'i5',
      children: []
    }
];
let treeToArrAns =[]
let treeToArr = (tree,parentId) => {
    tree.forEach(item => {
        const {id,name,children} = item;
        treeToArrAns.push({id,name,parentId})
        treeToArr(children,id)
    })
}
treeToArr(tree,null)
console.log(treeToArrAns)

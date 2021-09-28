window.dom = {
    find(selector , scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(node , name , value){
        if (arguments.length === 3){
            // dom.style(node , 'color' , 'pink')
            node.style[name] = value
        }else if (arguments.length === 2){
            if (typeof name === 'string'){
                //dom.style(node , 'color')
                return node.style[name]
            }else if (name instanceof Object) {
                //dom.style(node , {color : 'blue'})
                const object = name
                for (key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList , fn){
        for (let i = 0 ;i< nodeList.length ;i++){
            fn.call(null , nodeList[i])
        }
    }
}
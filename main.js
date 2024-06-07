function comp(array1, array2){
    if (array1 == null || array2 == null) return false 
    
    array1 = array1.map((x) => Math.pow(x, 2))
  
    while (array1.length != 0 || array2.length != 0){
      if (!array2.includes(array1[0])) return false
      
      array2.splice(array2.indexOf(array1[0]), 1)
      array1.shift()
    }
  
    return array1.length == array2.length
  }
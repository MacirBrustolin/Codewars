/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
  console.log('----')
  
  var filteredArray = arr.filter(function(item, pos){
    return arr.indexOf(item)== pos
  })
  
  console.log(filteredArray)
  
  for(let i = 0; i < filteredArray.length; i++){
    let indices = []
    let idx = arr.indexOf(filteredArray[i]);
    
    console.log(idx)
    
    while (idx !== -1) {
      indices.push(idx);
      idx = arr.indexOf(filteredArray[i], idx + 1);
    }
    
    console.log(indices)
    if (indices.length == 1) return arr[indices[0]]
  }
}

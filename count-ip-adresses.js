/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipsBetween(start, end){
  let startSplit = start.split('.')
  let endSplit = end.split('.')
  let acc = 0
  
  for (let i = 0 ; i < startSplit.length; i++){
    if (i == 0){
      acc += (endSplit[i] - startSplit[i]) * 256 * 256 * 256
    }
    else if( i == 1){
      acc += (endSplit[i] - startSplit[i]) * 256 * 256
    }
    else if (i == 2){
      acc += (endSplit[i] - startSplit[i]) * 256
    }
    else {
      acc += (endSplit[i] - startSplit[i])
    }
  }
  return acc
}

/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(n){
  let nDivided = n
  let actualPrime = 2
  let counter
  let primeCount = 0
  let result = ""

  do { 
    while (nDivided % actualPrime == 0){
        nDivided = nDivided / actualPrime
        primeCount++
      }
    
    if (primeCount > 1){
      result = result + `(${actualPrime}**${primeCount})`
    }
    else if (primeCount == 1) {
      result = result + `(${actualPrime})`
    }
    primeCount = 0
    if (actualPrime % 2 == 0){
      actualPrime++
    }
    else {
      actualPrime+=2
    }
    

    while(true){
      let l = Math.floor(Math.sqrt(actualPrime))
      counter = 0
      for(let i = 2; i <= l; i++){
        if(actualPrime % i == 0){
          counter++
          actualPrime+=2
          break
        }  
      }
      if(counter == 0)
        break
    }
    if(actualPrime == nDivided){
      result = result + `(${actualPrime})`
      break
    } 
  } while (true)
  return result
}

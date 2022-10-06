/*
Common denominators

You will have a list of rationals in the form

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints. You have to produce a result in the form:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"
depending on the language (See Example tests) in which D is as small as possible and

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note:
Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

Note for Bash:
input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12"
*/

function convertFrac(lst){
  let denArr = []
  let LCM
  let response = ''
  
  lst.forEach(x => denArr.push(x[1]))

  LCM = lcm(denArr)

  for (let i = 0; i < lst.length; i++){
    for (let j = 0; j < 10000000000000000; j++){
      if( (j / LCM) == lst[i][0] / lst[i][1]){
        response += `(${j},${LCM})`
        break
      }
    }
  }
  return response
}

function gcd2(a, b) {
    // Greatest common divisor of 2 integers
    if(!b) return b===0 ? a : NaN;
    return gcd2(b, a%b);
}

function lcm2(a, b) {
    // Least common multiple of 2 integers
    return a*b / gcd2(a, b);
}

function lcm(array) {
    // Least common multiple of a list of integers
    var n = 1;
    for(var i=0; i<array.length; ++i)
      n = lcm2(array[i], n);
    return n;
}

/*
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

Task:
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
Notes:
The weight array is at least as long as the number of names, it may be longer.

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

See Examples Test Cases for more examples.
*/

function rank(st, we, n) {
  let som, index = [], winValue, arrNames = []
  let arrSt = st.split(',')
  let arrWin = []
  let arr = []
  
  if (st.length == 0) return 'No participants'
  if (arrSt.length < n) return 'Not enough participants'
  
  for(let i = 0; i < arrSt.length; i++){
    som = 0
    for(let j= 0; j < arrSt[i].length; j++){
      som += arrSt[i].toLowerCase().charCodeAt(j) - 96
    }
    arrWin.push((som + arrSt[i].length) * we[i])
  }
  
  arr = arrWin.slice()
  
  winValue = arrWin.sort((a, b) => b - a)[n - 1]
  arr.forEach((x, i) => { if (x == winValue){ index.push(i)} })
  
  index.forEach((x) => {
      arrNames.push(arrSt[x])
    })
  if (arrNames.length > 1){
    arrNames.sort()
    return arrNames[n - 1 - arrWin.indexOf(winValue)]
  }
  else {
    return arrNames[0]
  } 
}

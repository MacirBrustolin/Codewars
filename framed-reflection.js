/*
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.

*/

function mirror(text){
  let arrText = text.split(' ')
  let stringResp = ''
  
  const maxLength = arrText.reduce((acc, cur) => acc.length > cur.length ? acc : cur, '')
  console.log(maxLength.length)
  
  for (let j = 0; j < maxLength.length + 4; j++){
      stringResp += '*'
    }
  stringResp += '\n'
  for(let i = 0; i < arrText.length; i++){
    stringResp += '* ' + arrText[i].split("").reverse().join("")
    for (let f = 0; f < maxLength.length - arrText[i].length + 1; f++){
      stringResp += ' '
    }
    stringResp += '*\n'
  }
  for (let k = 0; k < maxLength.length + 4; k++){
      stringResp += '*'
    }
  return stringResp
}

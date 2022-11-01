/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let arr = s.split('')
  let acc = ''
  
  arr.forEach((x, i) => {
    for(let j = 0; j <= i; j++){
      if (j == 0){
        acc += String(arr[i]).toUpperCase()
      }
      else {
        acc += String(arr[i]).toLowerCase()
      }
    }
    if (i + 1 < arr.length) acc += '-'
  })
  return acc
}

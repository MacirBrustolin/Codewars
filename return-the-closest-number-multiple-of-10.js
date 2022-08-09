/*
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40
*/

const closestMultiple10 = num => {
  console.log(num)
  let up = Math.floor(num), down = Math.floor(num), upCount = 0, downCount = 0
  while (up % 10 !== 0 ){
    up++
    upCount++
  }
  while (down % 10 !== 0 ){
    down--
    downCount++
  }
  console.log(up)
  console.log(upCount)
  console.log(down)
  console.log(downCount)
  return upCount > downCount ? down : up;
};

/*
You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN
To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/
So here we passed one valley
*/

function countingValleys(s) {
  let count = 0
  let passed = 0
  let entryValley = false
  let exitValley = false
  for (let i = 0; i < s.length; i++){
    if (s.charAt(i) == 'U'){
      count++
    } else if (s.charAt(i) == 'D'){
      count--
    }
    if (count == -1 && entryValley == false){
      entryValley = true
    } else if (count == 0 && entryValley == true){
      entryValley = false
      passed++
    }
    console.log(count)
    console.log(passed)
    console.log(entryValley)
  }
  return passed
}

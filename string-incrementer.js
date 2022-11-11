/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/


function incrementString (strng) {
  let arr = strng.split('')
  let chars = arr.filter(x => isNaN(x))
  let nums = arr.filter(function (item) {
        return (parseInt(item) == item)
      })
  let numsTotal = nums.length
  
  nums = Number(nums.join('')) + 1

  while (String(nums).length < numsTotal){
    nums = '0' + String(nums)
  }
  
  return chars.join('') + nums
}

/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
  let xArr = x.split('')
  for (let i = 0; i < x.length; i++){
    if (xArr[i] == 'a'){
      xArr[i] = 'b'
    } else if (xArr[i] == 'b'){
      xArr[i] = 'a'
    }
  }
  return xArr.join('')
}

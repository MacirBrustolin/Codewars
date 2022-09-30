/*
In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
This kata inspired by Sort rectangles and circles by area.
*/

/*NOT MODIFYINNG THE INPUT*/




/*MODIFYING THE INPUT ARRAY*/
function sortByArea(array) {
  return array.sort((a, b) => {
    let areaA = 0
    let areaB = 0
    if (a instanceof Array) {
      areaA = a[0] * a[1]
    } else {
      areaA = a * a * Math.PI
    }
    if (b instanceof Array) {
      areaB = b[0] * b[1]
    } else {
      areaB = b * b * Math.PI
    }
    return areaA - areaB
  })
}

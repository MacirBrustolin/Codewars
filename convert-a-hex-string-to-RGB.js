/*
When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

Example
"#FF9933" --> {r: 255, g: 153, b: 51}
*/

function hexStringToRGB(hexString) {
  let nums = hexString.split('#')
  let r, g, b
  
  r = nums[1][0].toLowerCase() + nums[1][1].toLowerCase()
  g = nums[1][2].toLowerCase() + nums[1][3].toLowerCase()
  b = nums[1][4].toLowerCase() + nums[1][5].toLowerCase()
  
  let obj = {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  }
  
  return obj
}

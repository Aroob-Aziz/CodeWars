// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!
// If there are multiple brightest colors, return the first one:

// #Solution#01
const c = ["#001000", "#000000", "#000000"];
const c1 = ["#ABCDEF", "#123456"];
const c2 = ["#FF0000", "#FFFF00", "#01130F"];

const convert_hexToRgb = function (hex_value) {
  let component = hex_value.split("");
  let hash = component.splice(0, 1);
  let red = component.splice(0, 2).join("");
  let green = component.splice(0, 2).join("");
  let blue = component.splice(0, 2).join("");
  let red_decimal = parseInt(red, 16);
  let green_decimal = parseInt(green, 16);
  let blue_decimal = parseInt(blue, 16);
  const rgb_array = [];
  rgb_array.push(red_decimal);
  rgb_array.push(green_decimal);
  rgb_array.push(blue_decimal);
  let max = rgb_array[0];

  for (let i = 0; i < rgb_array.length; i++) {
    if (rgb_array[i] > max) max = rgb_array[i];
  }

  return max;
};

function brightest(colors) {
  let newArray = [];
  for (let i = 0; i < colors.length; i++) {
    let str = colors[i].toString();
    let v = convert_hexToRgb(str);
    newArray.push(v);
  }
  // console.log(newArray);

  let max = newArray[0];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) max = newArray[i];
  }

  const obj = {};
  colors.forEach((element, index) => {
    obj[element] = newArray[index];
  });
  // console.log(obj);

  for (const property in obj) {
    // console.log(`${property}: ${obj[property]}`);
    if (obj[property] == max) return property;
  }
}

// Solution#02:

function brightest(colors) {
  let colorIndex = 0,
    maxValue = 0;
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i],
      r = parseInt(color.slice(1, 3), 16),
      g = parseInt(color.slice(3, 5), 16),
      b = parseInt(color.slice(5, 7), 16),
      value = Math.max(r, g, b);
    if (value > maxValue) {
      maxValue = value;
      colorIndex = i;
    }
  }
  return colors[colorIndex];
}
console.log(brightest(c1));

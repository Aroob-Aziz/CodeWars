// My solution
const convert_hexToRgb = function (hexString) {
  if (hexString.length === 7) {
    let component = hexString.split("");
    const hash = component.splice(0, 1);
    const red = component.splice(0, 2).join("");
    const green = component.splice(0, 2).join("");
    const blue = component.splice(0, 2).join("");
    let red_decimal = parseInt(red, 16);
    let green_decimal = parseInt(green, 16);
    let blue_decimal = parseInt(blue, 16);
    // const map1 = new Map();
    // map1.set("r", red_decimal);
    // map1.set("g", green_decimal);
    // map1.set("b", blue_decimal);
    // return map1;
    return {
      r: red_decimal,
      g: green_decimal,
      b: blue_decimal,
    };
  }
};

console.log(convert_hexToRgb("#FF9933"));

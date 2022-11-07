// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'

//Solution#01:
function maskify(cc) {
  const elements = cc.split("");
  const final = [];
  for (let i = 0; i < elements.length; i++) {
    if (
      i === elements.length - 1 ||
      i === elements.length - 2 ||
      i === elements.length - 3 ||
      i === elements.length - 4
    ) {
      final.push(elements[i]);
    } else {
      final.push("#");
    }
  }
  return final.join("");
}

//Solution#02:
function alternate_maskify(cc) {
  cc = cc.split("");
  for (var i = 0; i < cc.length - 4; i++) {
    cc[i] = "#";
  }

  cc = cc.join("");
  return cc;
}
//   console.log(maskify('batman'));
//   console.log(alternate_maskify('batman'));

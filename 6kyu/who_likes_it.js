// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// my solution
function likes(names) {
  let len = names.length;
  if (len === 0) {
    return `no one likes this`;
  } else if (len === 1) {
    return `${names[0]} likes this`;
  } else if (len === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (len === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    let remaining = len - 2;
    return `${names[0]}, ${names[1]} and ${remaining} others like this`;
  }
}

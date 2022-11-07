// <!-- Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative. -->

// <!-- mySolution -->

function findNextSquare(sq) {
  const square_root = Math.trunc(Math.sqrt(sq));
  const check_perfect_square = Math.pow(square_root, 2);
  console.log(
    `The square root of a number is ${square_root} and ${
      check_perfect_square == sq
        ? "it's a perfect square"
        : "it's not a perfect square"
    }`
  );
  if (check_perfect_square == sq) {
    const next_perfect_squre = Math.pow(square_root + 1, 2);
    return `The next perfect square is ${next_perfect_squre}`;
  } else {
    return -1;
  }
}

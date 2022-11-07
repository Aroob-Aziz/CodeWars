// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// MySolution
const arr = ["A", "A", "T", "T", "G", "G", "C", "C"];

function DNAStrand(dna) {
  const arr1 = [];
  for (let i = 0; i <= dna.length; i++) {
    if (dna[i] === "A") {
      arr1.push(dna[i].replace("A", "T"));
    } else if (dna[i] === "T") {
      arr1.push(dna[i].replace("T", "A"));
    } else if (dna[i] === "G") {
      arr1.push(dna[i].replace("G", "C"));
    } else if (dna[i] === "C") {
      arr1.push(dna[i].replace("C", "G"));
    }
  }
  return arr1.join("");
}

console.log(DNAStrand(arr));

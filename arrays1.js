const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

films[2] = "Jurassic Park";

films.push("A.I.");

console.log(films);
console.log("My favourite " + director + " film is " + films[1]);
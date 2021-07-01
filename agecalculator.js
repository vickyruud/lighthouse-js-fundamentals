function ageCalculator(name, yearOfBirth, currentYear){
  let age = "";
  age = currentYear - yearOfBirth ;
  return name + ' is ' + age + ' years old.';
}
console.log(ageCalculator("Miranda", 1903, 2015));

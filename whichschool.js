let age = 18; //declare age variable
let school = "" //declare variable school
const whichSchool = function (age){
  
  if(age < 13){
    school = "Elementary School";
    return school
  }
  else if(age >= 13 && age <= 18){
    school = "Secondary School";
    return school
  }
  else {
    school = "Lighthouse Labs";
    return school
  }
}
console.log(whichSchool(age))

let team = [ "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(team){
  if(team.length >= 7){
    return true
  }
  return false
}


console.log(hasEnoughPlayers(team));
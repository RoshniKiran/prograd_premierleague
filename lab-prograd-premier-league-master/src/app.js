//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  man_det=[managerName, managerAge, currentTeam, trophiesWon]
  return man_det
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(dat){
    if (dat.length == 3){
      return { defender: dat[0], midfield: dat[1], forward: dat[2] }
    }
    else if (dat==0){
      return null
    }
    else if (dat.length!=3){
        return { defender: dat[0], midfield: dat[1], forward: dat[2] }
    }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(yr){
    var new_dat=players.filter( elem => elem.debut == yr)
    return new_dat
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos){
  var new_dat=players.filter( elem => elem.position == pos)
  return new_dat
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awrd){
  var newlst = []
  for (const prop in players){
      for (const aw in players[prop].awards){
        if (awrd == players[prop].awards[aw].name)
        newlst.push(players[prop])
      }
  }
  return newlst
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awrd, times){
  var newlst = []
  for (const prop in players){
    let cnt =0
      for (const aw in players[prop].awards){
        if (awrd == players[prop].awards[aw].name)
          cnt = cnt + 1;
      }
      if (cnt==times){
        newlst.push(players[prop])
      }
  }
  return newlst
}


//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awrd, cntry){
  var newlst = []
  for (const prop in players){
    if (players[prop].country==cntry){
      for (const aw in players[prop].awards){
        if (awrd == players[prop].awards[aw].name)
        newlst.push(players[prop])
      }
    }
  }
  return newlst
}


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(awrd, tm, ag){
  var newlst = []
  for (const prop in players){
    if (players[prop].team==tm && players[prop].age < ag){
      // for (const aw in players[prop].awards){
        if (players[prop].awards.length>=awrd)
          newlst.push(players[prop])
      // }
    }
  }
  return newlst
}



//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

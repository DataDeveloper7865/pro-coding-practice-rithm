function wordScores(strings) {
  let scores = [];
  for (let string of strings) {
    let currScore = 0;
    for (let char of string) {
      if (char.toUpperCase() in letterToScores) {
        currScore += letterToScores[char.toUpperCase()];
      } else {
        currScore = null;
        break;
      }
    }
    scores.push(currScore);
  }
  return scores;
}

function wordScores(strings) {
  let scores = [];
  for (let string of strings) {
    let currScore = 0;
    for (let char of string) {
      if (char.toUpperCase() in letterToScores) {
        currScore += letterToScores[char.toUpperCase()];
      } else {
        currScore = null;
        break;
      }
    }
    scores.push(currScore);
  }
  return scores;
}


function scoreReducer(string) {
  string.reduce((acc, curr, i, arr) => {
    acc += letterToScores[curr.toUpperCase()];
  }
}

let letterToScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};


//map 
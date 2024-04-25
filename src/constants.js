
 export const TURNS = {
    X: '😵',
    O: '😛'
 }
  
  export const Winner_Combos = [
  /*TODO: We could simplify the code more, creating abc position conditionals*/
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //cross
  [0, 4, 8],
  [2, 4, 6]
  ]
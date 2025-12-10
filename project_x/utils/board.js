import { create_player } from "./player.js";
export function create_bord() {
  const bord = [];
  for (let i = 0; i < 3; i++) {
    const arr = [];
    for (let j = 0; j < 3; j++) {
      arr.push("_");
    }

    bord.push(arr);
  }
  return bord;
}

export function FillsABoard(row,col,bord,sign){
  if(bord[row][col]==='_'){
    bord[row][col]= sign
    return true
  }
  else if(bord[row][col]!=='_'){
    console.log('is not good please enter agine');
   return false
   }
 } 


export function IfIsWin(board){
    for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !=='_'&&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      return board[i][0];
    }
  }

  for (let j = 0; j < 3; j++) {
    if (
      board[0][j]!=='_'&&
      board[0][j] === board[1][j] &&
      board[1][j] === board[2][j]
    ) {
      return board[0][j];
    }
  }

  if (
    board[0][0] !=='_'&&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }

  if (
    board[0][2] !=='_'&&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }

  return null
}
export function printAllBoard(board){
  for (let i = 0; i <board.length ; i++) {
    console.log(board[i]);
   }
 } 

 


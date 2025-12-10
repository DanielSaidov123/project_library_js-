import { create_player, ruffel_sign } from "./utils/player.js";
import {
  create_bord,
  FillsABoard,
  IfIsWin,
  printAllBoard,
} from "./utils/board.js";
import input from "analiza-sync";

function init() {
  console.log("Welcome to the game X Circle");
  const name1 = input("enter name: ");
  const name2 = input("enter name: ");
  const p1 = create_player(name1);
  const p2 = create_player(name2);
  const obj_players = ruffel_sign(p1, p2);
  console.log(obj_players.p1);
  console.log(obj_players.p2);
  const matrix = create_bord();
  let digit = "X";
  do {
    printAllBoard(matrix);
    const row = input("enter row: ");
    const coll = input("enter col: ");
    if (row < 3 && row >= 0 && coll < 3 && coll >= 0)  {
      if (digit == "X") {
        const x=FillsABoard(row, coll, matrix, "X");
        if(x){  digit='O'}
        else{continue}
       
      } else if (digit == "O") {
        const x=FillsABoard(row, coll, matrix, "O");
        if(x){  digit='X'}
        else{continue}
      }
    }
  } while (IfIsWin(matrix) !== "X" && IfIsWin(matrix) !== "O");
  printAllBoard(matrix)
  console.log(`${IfIsWin(matrix)} is win`);
 
  
}


init();

//npm install analiza-sync
//npm init -y
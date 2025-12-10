import { sampleLoans } from "../data/storage.js";
import{createLoan} from '../models/loanFactory.js'
function borrowBook(id,bookId, memberId){
    return(createLoan(id,bookId, memberId))
 } 

function returnBook(loanId){
    
 } 

function getActiveLoans(){
    return sampleLoans.filter((loan)=>loan.isActive==true)
 } 

function getAllLoans(){
    return sampleLoans
 } 


function getOverdueLoans(){

} 

function getLoansByMember(memberId){
    for (let i = 0; i <sampleLoans.length ; i++) {
        if(sampleLoans.memberId===memberId){
            return sampleLoans[i]
         };
     }
 } 

function getLoansByBook(bookId){
    for (let i = 0; i <sampleLoans.length ; i++) {
        if(sampleLoans.bookId===bookId){
            return sampleLoans[i]
         };
     }
 } 


console.log(getAllLoans( ));

import { sampleMembers } from "../data/storage.js";
function addMember(memberData){ 
    sampleMembers.push(memberData)
} 

function getAllMembers(){
    return sampleMembers
 } 

function findMemberById(memberId){
    for (let i = 0; i <sampleMembers.length ; i++) {
        if(sampleMembers[i].id==memberId){
            return sampleMembers[i]
         };
     }
     return 'is not found'
 } 


function findMemberByEmail(email){
    for (let i = 0; i <sampleMembers.length ; i++) {
        if(sampleMembers[i].email==email){
            return sampleMembers[i]
         };
     }
     return 'is not found'
 } 

function deleteMember(memberId){
    for (let i = 0; i <sampleMembers.length ; i++) {
        if(sampleMembers[i].id==memberId){
            sampleMembers.splice(i,1)
         };
     }
     return 'is not found'
 } 

function getMostActiveMembers(limit){
     sampleMembers.sort((a, b) => {
      if (a.activeLoans.length+a.loanHistory.length < b.activeLoans.length+b.loanHistory.length) {
        return -1;
      }
      if (a.activeLoans.length+a.loanHistory.length > b.activeLoans.length+b.loanHistory.length) {
        return 1;
      }
    
      return 0;
    });
    return sampleMembers.splice(-limit)
 } 

 function checkCanBorrow(memberId){
    for (let i = 0; i <sampleMembers.memberId ; i++) {
        if(sampleMembers[i].memberId==memberId){
             if(sampleMembers[i].activeLoans>3){
                return false
              };
         };
     }
     return true
  } 

function getMemberStats(memberId){
    
 } 
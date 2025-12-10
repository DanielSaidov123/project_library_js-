function createMember(id, name, email, phone) {
  return {
    id,
    name,
    email,
    phone,
    joinDate: new Date(),
    activeLoans: [],
    loanHistory: [],
  };
}
function canMemberBorrow(member) {
  if (member.activeLoans.length >= 3) {
    return false;
  } else {
    return true;
  }
}

function addActiveLoan(member, loanId) {
  member.activeLoans.push(loanId);
  return member;
}
function removeActiveLoan(member, loanId) {
  let loa = null;
  for (let i = 0; i < member.activeLoans.length; i++) {
    if (member.activeLoans[i] === loanId) {
      loa = i;
      break
    }
  }
  if(loa==null){return member}
  member.activeLoans.splice(loa, 1);
  member.loanHistory.push(loanId)
  return member;
}


function getTotalBooksRead(member){ 
    let count=0
    for (let i = 0; i <member.loanHistory.length ; i++) {
        count++
     }
     return count
} 




 







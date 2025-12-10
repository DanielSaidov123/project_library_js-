export function createLoan(id, bookId, memberId) {
  return {
    id,
    bookId,
    memberId,
    borrowDate: new Date(),
    dueDate: null,
    returnDate: null,
    isActive: true
  };
}

function returnLoan(loan){
    loan.returnDate=new Date().toJSON()
    return loan
 } 


function isLoanOverdue(loan){
    return loan.dueDate<new Date()
 } 

function getDaysOverdue(loan){
    return (loan.returnDate -loan.dueDate)/10000000
 } 







 


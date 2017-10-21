
/*const getSum = (total, num) => {
    
          return total + num;
        
};*/

const expensesTotal = (expenses) => {
   
    // if (expenses.length > 0) { 
        
        //if (expenses.length > 1) {
            return expenses.map( (expense) => {
                return expense.amount
            }) 
            .reduce((total,num) => total + num, 0) 
            // .reduce(getSum,0) 
            
       /* } else {
            return expenses[0].amount;
        }*/
       
    // }
    
    // return 0;
    
};

export default expensesTotal;
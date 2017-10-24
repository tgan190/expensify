// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
          
      // console.log('action',action);
      return state.map((expense) => {
        if (expense.id === action.id) {
           // console.log ('updating  redux...matched');
          return {
            ...expense,
            ...action.updates
          };
        } else {
            // console.log ('updating failed redux...no match');
          return expense;
        };
      });
    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};

import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ShowExpenseTotal from './ShowExpenseTotal';

const ExpenseDashboardPage = () => (
  <div>
    <ShowExpenseTotal />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

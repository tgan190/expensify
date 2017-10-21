import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';

export const ShowExpenseTotal = (props) => (
    <p>You are viewing {props.expenses.length} expenses totalling: <span>  {numeral(expensesTotal(props.expenses)/100.0).format('$0,0.00')}</span></p>
    );


const mapStateToProps = (state) => 
  ({
    expenses: selectExpenses(state.expenses, state.filters)
  });

export default connect(mapStateToProps)(ShowExpenseTotal);
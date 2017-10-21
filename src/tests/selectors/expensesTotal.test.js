import expensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

it ('should compute the total amount for expenses viewed', () => {
    const total = expensesTotal(expenses);
    expect(total).toBe(114195);
})

it ('should return 0 for no expenses viewed', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0);
})

test ('should return amount for a single expense viewed', () => {
    const total = expensesTotal([expenses[1]]);
    expect(total).toBe(109500);
})
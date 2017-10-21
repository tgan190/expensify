import React from 'react';
import { shallow } from 'enzyme';
import {ShowExpenseTotal} from '../../components/ShowExpenseTotal';
import expenses from '../fixtures/expenses';

test('should show count and total expenses for one expense', () => {
    const wrapper = shallow(<ShowExpenseTotal expenses={[expenses[0]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should show count and total expenses for 3 expenses', () => {
    const wrapper = shallow(<ShowExpenseTotal expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
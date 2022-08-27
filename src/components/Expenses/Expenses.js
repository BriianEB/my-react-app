import './Expenses.css';

import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {
    var expenses = props.expenses;

    var [filter, setFilter] = useState('2020');

    function filterChangeHandler(selectedFilter) {
        setFilter(selectedFilter);
    }

    var filteredExpenses = expenses.filter(function (expense) {
        return expense.date.getFullYear().toString() === filter;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selectedFilter={filter} onChangeFilter={filterChangeHandler}/>
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;

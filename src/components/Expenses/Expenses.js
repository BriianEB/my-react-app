import './Expenses.css';

import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {
    var expenses = props.expenses;

    var [filter, setFilter] = useState('');

    function filterChangeHandler(selectedFilter) {
        setFilter(selectedFilter);
        console.log(selectedFilter);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selectedFilter={filter} onChangeFilter={filterChangeHandler}/>
            {expenses.map(function (expense) {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                );
            })}
        </Card>
    );
}

export default Expenses;

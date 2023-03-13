import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditting(false);
  };
  const [isEditting, setIsEditting] = useState(false);
  const startEdittingHandler = () => {
    setIsEditting(true);
  }
  const stopEdittingHandler = () => {
    setIsEditting(false);
  }

  return (
    <div className="new-expense">
      {!isEditting && <button onClick={startEdittingHandler}>Add New Expense</button>}
      {isEditting && <ExpenseForm onCancel={stopEdittingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense;
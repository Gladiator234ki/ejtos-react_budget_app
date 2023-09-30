import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExp = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const inp = event.target.value;
        const proposedBudget = parseInt(inp);
        const remaining  = budget - totalExp;
        if (proposedBudget >= totalExp && proposedBudget <= 20000) {
            setNewBudget(proposedBudget);
        } else if (proposedBudget > 20000) {
            alert("Budget cannot exceed 20,000.");
        }
        else if (proposedBudget < remaining){
            alert("Budget cannot be lower than remaining budget:"+remaining);
        }
         else {
            alert("Budget cannot be lower than spending; it has to be higher.");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span> Budget:{currency}</span>
            <input
                type="number"
                step="10"
                min={totalExp}
                max="20000"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;

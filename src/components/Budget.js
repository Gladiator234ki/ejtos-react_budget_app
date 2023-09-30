import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const inp = event.target.value;
        if(inp<=20000 && inp>=2000)
        {
            setNewBudget(inp);
            upda
        }
        else if(inp<2000){
            alert("budget cannot fall below the set value");
        }
        else
        {
            alert("Budget cannot exceed 20000!!");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="100" min="2000" max="20000"value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;


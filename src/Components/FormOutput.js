import React from 'react';
import './FormOutput.css';

function FormOutput({tasks}){
    return(
        <ul className='ul'>
         { tasks.map((task) => (
            <li className='li'><span>{task.name} ({task.age} Years old)</span></li>
          ))}
        </ul>
    )
}
export default FormOutput;
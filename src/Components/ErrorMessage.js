import React from 'react';
import './ErrorMessage.css';

function ErrorMessage(props){
    return(
        <div>
        <div className='error' onClick={props.onConfirm} />
        <div className='e1'>
        
            <header>
        <h2>{props.title}</h2>
            </header>
            <main>
            <p>{props.message}</p>
            </main>
            <footer>
                <button className='buttons' onClick={props.onConfirm}>Close</button>
            </footer>
            
        </div>
        </div>
    )
}
export default ErrorMessage;
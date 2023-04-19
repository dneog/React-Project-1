import React from 'react';
import ReactDOM from 'react-dom';
import './ErrorMessage.css';

const Backdrop =( props) => {
    return <div className='error' onClick={props.onConfirm} />
}

const ModelOverlay = (props)=> {
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



const ErrorMessage= (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm} />, document.getElementById('backdrop-root'))}

            {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
            document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default ErrorMessage;
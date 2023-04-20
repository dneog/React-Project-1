import React from 'react'
import { useState } from 'react';
import './InputForm.css';
import FormOutput from './FormOutput';
import ErrorMessage from './ErrorMessage';


function InputForm({tasks, setTasks}){
    const [username, setUsername]= useState('');
    const [collegeName, setCollegeName]= useState('');
    const [age, setAge]= useState('');
    const [error, setError]= useState()

    function onSubmitHandler(event){
        event.preventDefault();
        const task={
            name : username,
            age : age,
            college: collegeName
        }
        setUsername('');
        setAge('');
        setCollegeName('');
      

       if(username.trim().length===0 || age.trim().length===0 ){
        setError({
            title: 'Invalid Error',
            message: 'Please Enter a valid name, age and college name'

        });
        return; 
       }
       if(collegeName.trim().length===0 ){
        setError({
            title: 'Invalid Error',
            message: 'Please Enter a valid College name'

        });
        return; 
       }
       if(+age< 1){
        setError({
            title: 'Invalid Error',
            message: 'Please Enter a valid Age'

        });
        return;
       }
       setTasks([...tasks, task])
    }

    function handleUsername(event){
       setUsername(event.target.value);
       
    }
    function handleCollegeName(event){
       setCollegeName(event.target.value);
       
    }
    function handleAge(event){
       setAge(event.target.value);
       
    }

    const errorHandler= ()=> {
        setError(null)
    }
    return(
        <div>
        {error && <ErrorMessage title={error.title} message={error.message} onConfirm={errorHandler}/>}
       <form onSubmit={onSubmitHandler}>
        <div className="form-control">
            <label className='label' htmlFor="">Username</label>
            <input className='input' type="text" onChange={handleUsername} value={username} name='name' />
            <label className='label' htmlFor="">Collage Name</label>
            <input className='input' type="text" onChange={handleCollegeName} value={collegeName} name='college' />
            <label className='label' htmlFor="">Age (Years)</label>
            <input className='input' type="number" onChange={handleAge} value={age} name='age' />
            <button type='submit' className='button'>Add User</button>
        </div>
       
       </form>
        
       </div>
       
    );
}
export default InputForm;
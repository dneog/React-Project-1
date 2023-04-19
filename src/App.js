import { useState } from 'react';
import './App.css';
import InputForm from './Components/InputForm';
import FormOutput from './Components/FormOutput';

function App() {
  const [tasks, setTasks]= useState([]);
  return (
  <div>
    <section className='inputform'>
    <InputForm tasks={tasks} setTasks={setTasks} />
    </section>
    <section className='output'>
    <FormOutput tasks={tasks} setTasks={setTasks} />
    </section>
  </div>
  );
}

export default App;

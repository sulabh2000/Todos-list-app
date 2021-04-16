import './App.css';
import Header from './MyComponents/Header';
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am deleting it",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "Going to market for job1"
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "Going to mall for job2"
    },
    {
      sno: 3,
      title: "Coding Contest",
      desc: "Contest on monday"
    }
  ])

  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './MyComponants/Header';
import { Todos } from './MyComponants/Todos';
import { Footer } from './MyComponants/Footer';
import Todo from './MyComponants/Todo';
import AddTodo from './MyComponants/AddTodo';
import About from './MyComponants/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", "todo");
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List"  searchbar={true} />
        {/* <div style={{
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/006/878/140/non_2x/laser-background-futuristic-horizon-background-technology-backdrop-modern-abstract-3d-illustration-free-photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'relative',
        minHeight: '100vh',
        padding: '20px',
        backgroundrepeat: 'no-repeat',
        zindex: '-1'
      }}> */}
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        {/* </div> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

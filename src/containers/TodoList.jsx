import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";
import { fetchData } from "../redux/actions/index";
import {
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";
import { addTodo } from "../redux/actions/index";
import "../scss/TodoList.scss";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const isLoading = useSelector((state) => state.todos.isLoading);
  //  use for all the dispatch actions
  const dispatch = useDispatch();
  // local state for the input
  const [inputTodo, setInputTodo] = useState("");
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  // handle onChange event
  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };
  // handle onClick event
  const addNewTodo = () => {
    if (inputTodo.trim().length > 1) {
      let newTodoList = {
        id: Math.random(),
        content: inputTodo,
      };
      dispatch(addTodo(newTodoList));
    } else {
      //  Display erro message....
      alert("Please input something....");
    }
  };
  return (
    <section id="section-todo" className="todo-list">
      <h3 className="title">TO DO LIST NEW DEMO PROJECT</h3>
      {""}
      {isLoading ? (
        <div>
          <Spinner animation="border" variant="info" />
        </div>
      ) : todoList.length > 0 ? (
        <ListGroup>
          {" "}
          {todoList.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}{" "}
        </ListGroup>
      ) : (
        <p className="msg-empty"> You don 't have anything to do! Awesome!</p>
      )} 
      <InputGroup className="mt-3">
        <FormControl
          onChange={handleInput}
          value={inputTodo}
          placeholder="ADD TODOS................"
          id="todo-input"
          type="text"
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={addNewTodo}>
            {""}
            ADD ITEM{""}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </section>
  );
};
export default TodoList;

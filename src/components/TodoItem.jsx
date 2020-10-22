import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroupItem } from "react-bootstrap";

import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { removeTodo, updateTodoItems } from "../redux/actions/index";

const TodoItem = (props) => {
  const todoList = useSelector((state) => state.todos.todoList);
  const [isEdit, updateEdit] = useState(false);
  const [inputUpdate, setInputUpdate] = useState(props.item.content);
  // Dispatch all actions
  const dispatch = useDispatch();

  // Revove = filter
  const removeTodoItem = (todoId) => {
    // filter to get the todoId which to be remove
    let newTodoList = todoList.filter((item) => item.id !== todoId);
    dispatch(removeTodo(newTodoList));
  };
  const updateItemFunc = (todoId) => {
    updateEdit(false);
    let newTodoList = [...todoList];
    newTodoList.forEach((element, index) => {
      if (element.id === todoId) {
        element.content = inputUpdate;
      }
    });
    dispatch(updateTodoItems(newTodoList));
  };
  const canncelItemFunc = () => {
    setInputUpdate(props.item.content);
    updateEdit(false);
  };
  const handleInput = (e) => {
    setInputUpdate(e.target.value);
  };
  const renderShowMode = () => (
    <div className="show-mode">
      <span>{props.item.content}</span>
      <div>
        <Button
          variant="warning"
          className="mr-2"
          onClick={() => {
            updateEdit(!isEdit);
          }}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            removeTodoItem(props.item.id);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
  const renderEditMode = () => (
    <InputGroup>
      <FormControl onChange={handleInput} value={inputUpdate} type="text" />
      <InputGroup.Append>
        <Button
          variant="danger"
          onClick={() => {
            canncelItemFunc();
          }}
        >
          {" "}
          Cancel{" "}
        </Button>
        <Button
          variant="success"
          onClick={() => {
            updateItemFunc(props.item.id);
          }}
        >
          {" "}
          Update{" "}
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
  return (
    <div>
      <ListGroupItem key={props.item.id}>
        {isEdit === false ? renderShowMode() : renderEditMode()}
      </ListGroupItem>
    </div>
  );
};
export default TodoItem;

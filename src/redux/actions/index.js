import getPeople from "../../data/totoListData";
export const fetchData = () => {
  return (dispatch) => {
    dispatch(getData());
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data));
      })
      .catch((err) => console.log("err: ", err));
  };
};
export const getData = () => ({
  type: "FETCHING_DATA",
});
export const getDataSuccess = (data) => ({
  type: "FETCHING_DATA_SUCCESS",
  payload: data,
});
export const getDataFailure = () => ({
  type: "FETCHING_DATA_FAILURE",
});
export const addTodo = (newTodoList) => ({
  type: "ADD_TODO",
  payload: newTodoList,
});
export const removeTodo = (newTodoList) => ({
  type: "REMOVE_TODO",
  payload: newTodoList,
});
export const updateTodoItems = (newTodoList) => ({
  type: "UPDATE_TODO",
  payload: newTodoList,
});

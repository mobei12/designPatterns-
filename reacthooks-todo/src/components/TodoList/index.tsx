import React, {FC, ReactElement, useCallback, useEffect, useReducer} from "react";
import TodoInput from "./TodoInput";
import List from "./List";
import {ACTION_TYPE, IState, ITodo} from "./typeings";
import {todoReducer} from "./todoReducer";

const TodoList: FC = (): ReactElement => {

	const initialState: IState = {
		todoList: []
	}

	/**
	 * @description 惰性初始化
	 * @param initTodoList{ITodo}
	 */
	function init(initTodoList: ITodo[]): IState {
		return {
			todoList: []
		}
	}

	const [state, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		console.log(state.todoList)
	}, [state.todoList])
	const addTodo = useCallback(
		(todo: ITodo) => {
			dispatch({type: ACTION_TYPE.ADD_TODO, payload: todo})
		}, []
	)
	const removeTodo = useCallback(
		(id: number) => {
			dispatch({type: ACTION_TYPE.REMOVE_TODO, payload: id})
		}, []
	)
	const toggleTodo = useCallback(
		(id: number) => {
			dispatch({type: ACTION_TYPE.TOGGLE_TODO, payload: id})
		}, []
	)
	return (
		<div className="todo-list">
			<TodoInput addTodo={addTodo} todoList={state.todoList}/>
			<List todoList={state.todoList} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
		</div>
	)
}
export default TodoList
import React, {FC, ReactElement} from 'react';
import {ITodo} from "../typeings";

interface IProps {
	todo: ITodo;
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
}

const TodoItem: FC<IProps> = ({todo, toggleTodo, removeTodo}): ReactElement => {
	return (
		<div className='todo-item'>
			<input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
			<span style={{textDecoration:todo.completed?'line-through':'none'}}>{todo.content}</span>
			<button onClick={() => removeTodo(todo.id)}>删除</button>
		</div>
	)
}
export default TodoItem
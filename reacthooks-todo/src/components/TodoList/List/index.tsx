import React, {FC, ReactElement} from 'react';
import {ITodo} from "../typeings";
import TodoItem from "./TodoItem";

interface IProps {
	todoList: ITodo[];
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
}

const TodoList: FC<IProps> = ({todoList, toggleTodo, removeTodo}): ReactElement => {
	return (
		<div className='to-list'>
			{
				todoList && todoList.map((item: ITodo) => {
					return (
						<TodoItem key={item.id} todo={item} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
					)
				})
			}
		</div>
	)
}
export default TodoList
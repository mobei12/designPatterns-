import React, {useRef, FC, ReactElement} from "react";
import {ITodo} from "../typeings";

interface IProps {
	addTodo: (todo: ITodo) => void;
	todoList: ITodo[]
}

const TodoInput: FC<IProps> = ({addTodo, todoList}): ReactElement => {
	const inputEl = useRef<HTMLInputElement>(null)
	const addItem = (): void => {
		const val: string = inputEl.current!.value.trim()
		if (val.length > 0) {
			const isTrue = todoList.find(todo => todo.content === val)
			if (isTrue) {
				alert('重复了')
				return
			}
			addTodo({
				id: new Date().getTime(),
				content: val,
				completed: false
			})
		}
		inputEl.current!.value = ''
	}
	return (
		<div className='todo-input'>
			<input ref={inputEl} type='text' placeholder='请输入代办项目'/>
			<button onClick={addItem}>增加</button>
		</div>
	)
}
export default TodoInput
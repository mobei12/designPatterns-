import {ACTION_TYPE, IAction, IState, ITodo} from "./typeings";

function todoReducer(state: IState, action: IAction): IState {
	const {type, payload} = action
	switch (type) {
		case ACTION_TYPE.ADD_TODO:
			return {
				...state,
				todoList: [...state.todoList, payload as ITodo]
			};
		case ACTION_TYPE.REMOVE_TODO:
			return {
				...state,
				todoList: state.todoList.filter((IDo: ITodo) => payload !== IDo.id)
			};
		case ACTION_TYPE.TOGGLE_TODO:
			return {
				...state,
				todoList: state.todoList.map((IDo: ITodo): ITodo => {
					return IDo.id === payload ? {...IDo, completed: !IDo.completed} : {...IDo}
				})
			};
		default:
			return state
	}
}

export {todoReducer}
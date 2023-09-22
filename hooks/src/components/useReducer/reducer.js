import { TODO_ACTIONS } from "./case";

export const reducer = (state, action) => {
    switch(action.type) {
        case TODO_ACTIONS.ADD_TASK: return [
            ...state,
            {
                id: state.length + 1,
                name: action.payload
            }
        ]
        case TODO_ACTIONS.DELETE_TASK: return state.filter(task => task.id !== action.payload);
        case TODO_ACTIONS.RESET_TASKS: return init(action.payload);
        default : return state
    }
}

export function init(initialState) {
    return initialState;
}
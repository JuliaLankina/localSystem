import { GET_FOLDER, CREATE_FOLDER, GET_FILES } from "../actions/actionType"

const initialState = {
    folders: [],
    files: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_FOLDER:
            return{
                ...state,
                folders: action.payload
            }
        case CREATE_FOLDER:
            return {
                ...state,
                folders: state.folders.concat(action.payload)
            }    
        case GET_FILES:
            return{
                ...state,
                files: action.payload
            }   
        default: return state
    }
}

export default reducer


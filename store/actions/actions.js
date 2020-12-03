import axios from 'axios'
import { CREATE_FOLDER, GET_FOLDER, ADD_FILE, GET_FILES } from './actionType'


export const getFolders = () => {

    return dispatch => {

        axios.get('/getFolder')
            .then(response => {
                dispatch({
                    type: GET_FOLDER,
                    payload: response.data      
                })
        })
    }
}

export const createFolder = (folder) => {

    return dispatch => {

        axios.post('/addFolder',{
            id: folder.id,
            url: folder.url,
            date: folder.date}          
        )
            .then(response => {
                dispatch({
                    type: CREATE_FOLDER,
                    payload: Object.values(response.data)[Object.values(response.data).length-1]      
                })
        })
    }
}

export const addFile = (folder) => {

    return dispatch => {

        axios.post('/addFile', {
            id_folder: folder.id,
            url_folder: folder.url
        })
        .then(response => {
            console.log(response.data)
            dispatch({
                type: ADD_FILE,
                payload: response.data
            })
        })
    }
}
export const getFiles = (idFolder) => {

    return dispatch => {
        axios.get(`/getFile/${idFolder}`)
            .then(response => {
                dispatch({
                    type: GET_FILES,
                    payload: response.data      
                })
        })
    }
}
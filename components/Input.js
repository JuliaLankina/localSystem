import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createFolder, addFile } from '../store/actions/actions';


const createDate = () => {

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return `${dd}.${mm}.${yyyy}`
}

const Input = () => {
    const dispatch = useDispatch()
    const folders = useSelector(state => state.folders)

    let [folderInput, setInput] = useState("")


    const addFolder = (e) => {
        e.preventDefault()

        let sortedFolders = [...folders].sort((a, b) => b.id - a.id)

        const folder = {
            id: sortedFolders[0] ? sortedFolders[0].id + 1 : 1,
            url: folderInput,
            date: createDate()
        }

        const file = {
            id: folder.id,
            url: folder.url
        }

        dispatch(createFolder(folder))
        dispatch(addFile(file))

        setInput('')
    }

    return(
        <div className="header-container">
            <h1>Директории и файлы</h1>
            <div className="input-container">
                <form onSubmit={(e) => addFolder(e)}>
                    <label htmlFor="input-files">Новая директория</label>
                    <input 
                        type="text" 
                        id="input-files" 
                        placeholder="sdf/sds/sds/dirs_with_files" 
                        required
                        value={folderInput}
                        onChange={e => setInput(e.target.value)}
                        />
                    <button type="submit">Добавить в список</button>
                </form>
            </div>
        </div>
    )
}

export default Input
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip } from '@material-ui/core';
import { getFolders } from '../store/actions/actions'
import Input from './Input'
import Modal from './Modal'
import { calculateWeigth } from './Row';

const Main = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [files, setFiles] = useState()

    const updateIsOpenState = () => {   
        setIsOpen(true)   
    }

    const folders = useSelector(state => state.folders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFolders())
    }, [])

    const updateFilesState = (folder) => {
        setFiles(folder) 
    }

    const clearState = (value) => {
        setFiles(value)
    }
 
    return (
        <>
            <div className="container">
                <Input key={folders}/>  
                <div className="table-container">
                    <h2>Список директорий и файлов</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Базовая директория</th>
                                <th>Директорий</th>
                                <th>Файлов</th>
                                <th>Суммарный размер файлов</th>
                                <th></th>
                            </tr>                   
                        </thead>
                        <tbody>
                            {folders.length === 0 ?
                                <div>
                                    <h2>Server error</h2>
                                </div>:
                                folders.map((folder) => 
                                <tr>
                                    <td>{folder.date}</td>
                                    <Tooltip title={folder.url} placement='top'>
                                        <td className="min-symbol">{folder.url}</td>
                                    </Tooltip>
                                    
                                    <td>{folder.num_dirs}</td>
                                    <td>{folder.num_files}</td>
                                    <td>{calculateWeigth(folder.sum_weight) }</td>
                                    <td>
                                        <button onClick={() => {
                                            updateFilesState(folder)
                                            updateIsOpenState()    
                                        }}>Файлы</button>
                                    </td>
                                </tr>)}    
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal open={isOpen} onClose={() => {
                setIsOpen(false)
                clearState('')}} folderInfo={files}/>
        </>

    )
}

export default Main
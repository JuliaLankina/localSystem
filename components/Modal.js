import React, { useEffect } from 'react'
import Row from './Row'

const Modal = ({open, onClose, folderInfo}) => {

    if (!open) return null
    return (
        <div className="modal-container">
        <div className="modal-container-content">       
            <h3>{`${folderInfo.url} ${folderInfo.date}`}</h3>
            <div className="modal-table">
                <table className="modal-table-table">
                    <thead>
                        <tr>
                            <th>Файл</th>
                            <th>Размер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Row key={folderInfo.id} folderId={folderInfo.id}/>   
                    </tbody>
                </table>
            </div>
            <div className="modal-button">
                <button onClick={onClose}>Закрыть</button>
            </div>
            
        </div>       
    </div>
    )    
}

export default Modal
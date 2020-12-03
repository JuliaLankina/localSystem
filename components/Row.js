import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../store/actions/actions'


const sortByAlphabet = (arr) => {
    return [...arr].sort((a, b) => {

        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1      
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1 
        
        return 0;
    })
}

export const calculateWeigth = (weigth) => {

    const a = weigth/1024

    if (a < 1) return `${weigth} byte`
    else if (a >= 1 && a < 1024) return `${a.toFixed(1)} Kb`
    else if (a >= 1024 && a < 1024*1024) return `${(a/1024).toFixed(1)} Mb`
    else if (a >= 1024*1024 && a < 1024*1024*1024) return `${(a/(1024*1024)).toFixed(1)} Gb`
}

const Row = ({folderId}) => {

    const files = useSelector(state => state.files)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFiles(folderId))
    }, [])


    let sortedDirs = sortByAlphabet([...files].filter(dot => !dot.name.includes('.')))
    let sortedFiles = sortByAlphabet([...files].filter(dot => dot.name.includes('.')))

    let sotedFiles = sortedDirs.concat(sortedFiles)
    
    return (
        sotedFiles.map(file => 
            <tr>
                <td>{file.name}</td>
                <td>{file.name.includes('.') ? calculateWeigth(file.weight) : `<DIR>`}</td>
            </tr>
        )       
    )
}
export default Row
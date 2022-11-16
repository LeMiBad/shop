import { useStore } from 'effector-react'
import { useState } from 'react'
import { $data, updateSubCategory } from '../../store/allDataModel'
import CrossSvg from '../svg/CrossSvg'
import css from './../../styles/Admin.module.sass'

const AdminModalSubCat:React.FC<{url: number[], close: Function}> = ({url, close}) => {
    const data = useStore($data)
    
    const [name, setName] = useState(String(data[url[0]-1].subcategory[url[1]-1].name))
    const [desc, setDesc] = useState(String(data[url[0]-1].subcategory[url[1]-1].desc))

    const save = () => {
        updateSubCategory({id: [url[0], url[1]], name, desc})
        close(0)
    }

    return (open)? <div className={css.wrapper}>
        <div onClick={() => {close(0)}} style={{position: 'absolute', right: '10px', top: '10px'}} className={'svgWrapper'}>
            <CrossSvg/>
        </div>
        <input onChange={(e: any) => {setName(e.currentTarget.value)}} value={name} placeholder='Название'/>
        <input onChange={(e: any) => {setDesc(e.currentTarget.value)}} value={desc} placeholder='Описание'/>
        <button onClick={save}>Сохранить</button>
    </div> : <></>
}

export default AdminModalSubCat
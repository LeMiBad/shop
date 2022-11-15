import { useState } from 'react'
import { createSubCategory } from '../../store/allDataModel'
import css from './../../styles/Admin.module.sass'

const CreateAdminModalSubCat:React.FC<{url: number, close: Function}> = ({url, close}) => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const save = () => {
        createSubCategory({id: url, name, desc})
        close(0)
    }

    return (open)? <div className={css.wrapper}>
        <input onChange={(e: any) => {setName(e.currentTarget.value)}} value={name} placeholder='Название'/>
        <input onChange={(e: any) => {setDesc(e.currentTarget.value)}} value={desc} placeholder='Описание'/>
        <button onClick={save}>Сохранить</button>
    </div> : <></>
}

export default CreateAdminModalSubCat
import { useState } from 'react'
import { createCategory } from '../../store/allDataModel'
import css from './../../styles/Admin.module.sass'

const CreateAdminModalCat:React.FC<{close: Function}> = ({close}) => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')

    const save = () => {
        createCategory({name, desc, img})
        close(0)
    }

    return (open)? <div className={css.wrapper}>
        <input onChange={(e: any) => {setName(e.currentTarget.value)}} value={name} placeholder='Название'/>
        <input onChange={(e: any) => {setDesc(e.currentTarget.value)}} value={desc} placeholder='Описание'/>
        <input onChange={(e: any) => {setImg(e.currentTarget.value)}} value={img} placeholder='Ссылка на картинку'/>
        <button onClick={save}>Сохранить</button>
    </div> : <></>
}

export default CreateAdminModalCat
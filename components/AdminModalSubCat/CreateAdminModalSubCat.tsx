import { useState } from 'react'
import { createSubCategory } from '../../store/allDataModel'
import CrossSvg from '../svg/CrossSvg'
import css from './../../styles/Admin.module.sass'

const CreateAdminModalSubCat:React.FC<{url: number, close: Function}> = ({url, close}) => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const save = () => {
        createSubCategory({id: url, name, desc})
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

export default CreateAdminModalSubCat
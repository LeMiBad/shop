import { useStore } from 'effector-react'
import { useState } from 'react'
import { $data, updateCategory } from '../../store/allDataModel'
import CrossSvg from '../svg/CrossSvg'
import css from './../../styles/Admin.module.sass'

const AdminModalCat:React.FC<{url: number[], close: Function}> = ({url, close}) => {
    const data = useStore($data)
    
    const [name, setName] = useState(String(data[url[0]-1].name))
    const [desc, setDesc] = useState(String(data[url[0]-1].desc))
    const [img, setImg] = useState(String(data[url[0]-1].img))
    
    const save = () => {
        updateCategory({id: url[0], name, desc, img})
        close(0)
    }

    return (open)? <div className={css.wrapper}>
        <div onClick={() => {close(0)}} style={{position: 'absolute', right: '10px', top: '10px'}} className={'svgWrapper'}>
            <CrossSvg/>
        </div>
        <input onChange={(e: any) => {setName(e.currentTarget.value)}} value={name} placeholder='Название'/>
        <input onChange={(e: any) => {setDesc(e.currentTarget.value)}} value={desc} placeholder='Описание'/>
        <input onChange={(e: any) => {setImg(e.currentTarget.value)}} value={img} placeholder='Ссылка на картинку'/>
        <button onClick={save}>Сохранить</button>
    </div> : <></>
}

export default AdminModalCat
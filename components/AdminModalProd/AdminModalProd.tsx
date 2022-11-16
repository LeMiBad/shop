import { useStore } from 'effector-react'
import { useRef, useState } from 'react'
import { $data, updateProd } from '../../store/allDataModel'
import CrossSvg from '../svg/CrossSvg'
import css from './../../styles/Admin.module.sass'

const AdminModalProd:React.FC<{url: number[], close: Function}> = ({url, close}) => {
    const data = useStore($data)
    


    const [name, setName] = useState(String(data[url[0]-1].subcategory[url[1]-1].products[url[2]-1].name))
    const [desc, setDesc] = useState(String(data[url[0]-1].subcategory[url[1]-1].products[url[2]-1].desc))
    const [price, setPrice] = useState(String(data[url[0]-1].subcategory[url[1]-1].products[url[2]-1].price))
    const [images, setImages] = useState(data[url[0]-1].subcategory[url[1]-1].products[url[2]-1].images)
    const [bigDesc, setBigDesc] = useState(String(data[url[0]-1].subcategory[url[1]-1].products[url[2]-1].bigDesc))
    const [info, setInfo] = useState(data[url[0]-1].subcategory[url[1]-1].products[url[2]-1].info)
    
    const save = () => {
        updateProd({
            id: url,
            name,
            desc,
            price,
            images,
            bigDesc,
            info
        })
        close(0)
    }

    const saveImages = (form: any) => {
        let images = []
        for(let el of form.currentTarget.children) {
            images.push(el.children[0].value)
        }
        setImages(images)
    }

    const deleteImg = (i: number) => {
        const newImages = [...images]
        newImages.splice(i, 1)
        setImages(newImages)
    }

    const saveInfo = (form: any) => {
        let info = []
        for(let el of form.currentTarget.children) {
            if(el) {
                info.push({name: el.children[0].value, body: el.children[1].value})
            }
        }
        setInfo(info)
    }

    const deleteInfo = (i: number) => {
        const newInfo = [...info]
        newInfo.splice(i, 1)
        setInfo(newInfo)
    }

    return (open)? <div className={css.wrapper}>
        <div onClick={() => {close(0)}} style={{position: 'absolute', right: '10px', top: '10px'}} className={'svgWrapper'}>
            <CrossSvg/>
        </div>
        <input onChange={(e: any) => {setName(e.currentTarget.value)}} value={name} placeholder='Название'/>
        <input onChange={(e: any) => {setDesc(e.currentTarget.value)}} value={desc} placeholder='Описание'/>
        <input onChange={(e: any) => {setPrice(e.currentTarget.value)}} value={price} placeholder='Цена'/>
        <form style={{width: '100%'}} onChange={(e: any) => {saveImages(e)}}>
            {images.map((img, i) => <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }} key={i}><input onChange={() => {}} value={img} 
            placeholder={`Ссылка на картинку ${i+1}`} /> 
            <div onClick={() => {deleteImg(i)}} className='svgWrapper'><CrossSvg/></div> </div>)}
        </form>
        <button type='button' onClick={() => {setImages([...images, ''])}}>Добавить картинку</button>
        <input onChange={(e: any) => {setBigDesc(e.currentTarget.value)}} value={bigDesc} placeholder='Большое описание'/>
        <form onChange={(e: any) => {saveInfo(e)}} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            {info.map((info, i) => <div style={{display: 'flex', alignItems: 'center'}} key={i}>
                <input onChange={() => {}} value={info.name} placeholder={`Заголовок ${i+1}`}/>
                <input onChange={() => {}} value={info.body} placeholder={`Описание ${i+1}`}/>
                <div onClick={() => {deleteInfo(i)}} className='svgWrapper'><CrossSvg/></div>
            </div>)}
        </form>
        <button type='button' onClick={() => {setInfo([...info, {name: '', body: ''}])}}>Добавить доп. описание</button>
        <button style={{backgroundColor: 'green'}} onClick={save}>Сохранить</button>
    </div> : <></>
}

export default AdminModalProd
import { useState } from 'react'
import css from './../../styles/ProductInfo.module.sass'

interface ProductInfoProps {
    name: string 
    desc: string
    id: number
}

const ProductInfo:React.FC<ProductInfoProps> = ({name, desc, id}) => {
    const [isOpen, setIsOpen] = useState(false)

    
    const isOpenHandler = () => {
        if(isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    return <>
        <div style={{borderTop: (id === 0)? '1px solid #dfdfdf' : 0}} onClick={isOpenHandler} className={css.wrapper}>
            <div className={css.nameWrapper}>
                <h1>{name}</h1>
                <div className={css.svgWrapper}><svg className={(isOpen)? css.open : css.close} width={'24'} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="m12.0003 15.5996-5.7857-5.785 1.414-1.4143 4.3717 4.3711 4.3717-4.3711 1.4141 1.4143-5.7858 5.785z"></path></svg></div>
            </div>
            {(isOpen)? <h2 onClick={isOpenHandler} className={css.desk}>{desc}</h2> : <></>}
        </div>
    </>
}

export default ProductInfo
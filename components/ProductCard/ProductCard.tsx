import { useRouter } from 'next/router'
import { useState } from 'react'
import WhiteArrowSvg from '../svg/WhiteArrowSvg'
import css from './../../styles/ProductCard.module.sass'

interface ProductCardProps {
    name: string
    desc: string
    price: string
    images: string[]
    id: number
    subId: number
    prodId: number
}

const ProductCard:React.FC<ProductCardProps> = ({name, desc, price, images, id, subId, prodId}) => {
    const router = useRouter()
    const [imgIndex, setImgIndex] = useState(0)

    
    return <div onClick={() => {router.push(`/product/${id}/${subId}/${prodId}`)}} className={css.wrapper}>
        <div onMouseLeave={() => {setImgIndex(0)}} onMouseEnter={() => {setImgIndex(1)}} style={{background: `url('${images[imgIndex]}')`}} 
        className={css.card}></div>

        <div className={css.propsWrapper}>
            <div>
                <h2>{name}</h2>
                <h3>{desc}</h3>
                <h1>{price}<span style={{fontSize: '16px'}}>₽</span></h1>
            </div>
            <div className={css.iconWrapper}>
                <WhiteArrowSvg/>
            </div>
        </div>
    </div>
}

export default ProductCard
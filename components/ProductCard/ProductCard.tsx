import { useRouter } from 'next/router'
import WhiteArrowSvg from '../svg/WhiteArrowSvg'
import css from './../../styles/ProductCard.module.sass'

const ProductCard = () => {
    const router = useRouter()

    return <div onClick={() => {router.push('/buy')}} className={css.wrapper}>
        <div className={css.card}></div>
        <div className={css.propsWrapper}>
            <div>
                <h2>Сметана</h2>
                <h3>Удобная вещь в быту</h3>
                <h1>56250<span style={{fontSize: '16px'}}>₽</span></h1>
            </div>
            <div className={css.iconWrapper}>
                <WhiteArrowSvg/>
            </div>
        </div>
    </div>
}

export default ProductCard
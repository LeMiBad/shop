import css from './../../styles/SmallCategory.module.sass'
import Arrow from '../svg/ArrowSvg'
import Slider from '../Slider/Slider'
import { useRouter } from 'next/router'

interface CategoryProps {
    name: string
    desk: string
}

const SmallCategory = ({name, desk}: CategoryProps) => {
    const router = useRouter()

    return <>
        <div className={css.wrapper}>
            <div className={css.nameWrapper}>
                <h1 onClick={() => {router.push('/product')}}>{name}</h1>
                <div className={'svgWrapper'}>
                    <Arrow/>
                </div>
            </div>
            <div className={css.imgWrapper}>
                <div className={css.deskWrapper}>
                    <h2>{desk}</h2>
                    <Slider/>
                </div>
            </div>
        </div>
    </>
}

export default SmallCategory
import css from './../../styles/Category.module.sass'
import Arrow from '../svg/ArrowSvg'
import Slider from '../Slider/Slider'

interface MainPageProps {
    name: string
    desk: string
}

const Category = ({name, desk}: MainPageProps) => {
    return <>
        <div className={css.wrapper}>
            <div className={css.nameWrapper}>
                <h1>{name}</h1>
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

export default Category
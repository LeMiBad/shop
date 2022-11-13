import css from './../../styles/Subcategory.module.sass'
import Arrow from '../svg/ArrowSvg'
import Slider from '../Slider/Slider'
import { useRouter } from 'next/router'

interface CategoryProps {
    name: string
    desk: string
    products: {
        name: string;
        desc: string;
        price: string;
        images: string[];
        bigDesc: string;
        info: {
            name: string;
            body: string;
        }[];
    }[]
    id: number
}

const Subcategory = ({name, desk, products, id}: CategoryProps) => {
    const router = useRouter()

    const handleLink = () => router.push(`/productlist/${router.query.id}/${id+1}`)

    return <>
        <div className={css.wrapper}>
            <div className={css.nameWrapper}>
                <h1 onClick={handleLink}>{name}</h1>
                <div onClick={() => {router.push(`/productlist/${router.query.id}/${id+1}`)}} className={'svgWrapper'}>
                    <Arrow/>
                </div>
            </div>
            <div className={css.imgWrapper}>
                <div className={css.deskWrapper}>
                    <h2>{desk}</h2>
                    <Slider id={Number(router.query.id)} subId={id} products={products}/>
                </div>
            </div>
        </div>
    </>
}

export default Subcategory
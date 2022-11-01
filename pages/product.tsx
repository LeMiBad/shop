import ProductCard from '../components/ProductCard/ProductCard'
import css from './../styles/kinds.module.sass'

const Kinds = () => {
    const products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]



    return (
        <>
            <div className={css.row}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className={css.row}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className={css.row}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </>
    )
}

export default Kinds
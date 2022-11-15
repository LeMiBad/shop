import { useStore } from 'effector-react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ProductCard from '../../../components/ProductCard/ProductCard'
import { $data } from '../../../store/allDataModel'
import css from './../../../styles/kinds.module.sass'


const Kinds = () => {
    const data = useStore($data)
    const router = useRouter()
    const {id, subId} = router.query
    
    let products
    let title
    
    for(let i = 0; i < data.length; i++) {
        if(id === String(data[i].id)) {
            for(let j = 0; j < data[i].subcategory.length; j++) {
                if(subId === String(data[i].subcategory[j].id)) {
                    products = data[i].subcategory[j].products
                    title = data[i].subcategory[j].name
                }
            }
        }
    }

    

    const productsWithRow = []
    let beetweenArr: any = []
    let counter = 0
    if(products) {
        products.forEach(item => {
            if(counter === 4) {
                counter = 0
                productsWithRow.push(beetweenArr)
                beetweenArr = []
            }
            counter+=1
            beetweenArr.push(item)
        })
    }

    for(let i = beetweenArr.length; i < 4; i++) {
        beetweenArr.push(null)
    }
    
    productsWithRow.push(beetweenArr)

    return (
        <>
            <Head>
                <title>{`YOVOY - ${title}`}</title>
            </Head>
            {
                productsWithRow.map((item, i) => <div key={i} className={css.row}>
                    {item.map((prod: any, ind: number) => (prod)? <ProductCard key={ind} id={Number(id)} subId={Number(subId)} prodId={prod.id} 
                    name={prod.name} images={prod.images} desc={prod.desc} 
                    price={prod.price}/> : <div key={ind} className={css.ProductCardStub}></div>)}
                </div>)
            }
        </>
    )
}

export default Kinds
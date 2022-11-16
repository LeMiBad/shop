import css from './../../styles/Header.module.sass'
import FindIcon from '../svg/FindSvg'
import { useState } from 'react'
import { useStore } from 'effector-react'
import { $data } from '../../store/allDataModel'
import { useRouter } from 'next/router'

const HeaderFinder = () => {
    const [input, setInput] = useState('')
    const router = useRouter()

    const data = useStore($data)

    let filterCategory = () => {
        const beetween: any = []
        data.forEach((cat) => {
            cat.subcategory.forEach((subCat) => {
                let isCan = false
                for(let i = 0; i < subCat.products.length; i++) {
                    if(subCat.products[i].name.toLowerCase().includes(input.toLowerCase())) {
                        isCan = true
                    }
                }

                if(isCan) beetween.push({
                    name: subCat.name,
                    id: cat.id,
                    subId: subCat.id,
                    products: subCat.products.filter((prod: any) => prod.name.toLowerCase().includes(input.toLowerCase()))
                })
            })
        })
        return beetween
    }

    const categoryRedirect = (url: number[]) => {
        setInput('')
        router.push(`/productlist/${url[0]}/${url[1]}`)
    }

    const prodRedirect = (url: number[]) => {
        setInput('')
        router.push(`/product/${url[0]}/${url[1]}/${url[2]}`)
    }

    const close = () => setInput('')

    const CategorySvg = () => <svg style={{marginRight: '20px', width: '20px', height: '20px', marginTop: '5px'}}  viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0L1.5 20" stroke="black" strokeWidth="2"/><path d="M20 0V20" stroke="black" strokeWidth="2"/><path d="M24 4V24" stroke="black" strokeWidth="2"/><line x1="1" y1="19" x2="21" y2="19" stroke="black" strokeWidth="2"/><line x1="5" y1="23" x2="25" y2="23" stroke="black" strokeWidth="2"/><path d="M28 8V28" stroke="black" strokeWidth="2"/><line x1="9" y1="27" x2="29" y2="27" stroke="black" strokeWidth="2"/><line x1="1" y1="1" x2="21" y2="1" stroke="black" strokeWidth="2"/></svg>
    const ProdSvg = () => <svg style={{marginRight: '20px', width: '24px', height: '24px', marginTop: '5px'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.9994 4h-.5621l-.2922.4802-3.357 5.517h-5.069l.3107 1.2425 1.6212 6.4851c.334 1.3355 1.5339 2.2724 2.9105 2.2724h10.8769c1.3766 0 2.5765-.9369 2.9104-2.2724l1.6213-6.4851.3106-1.2425h-5.0695l-3.3574-5.517L13.5618 4h-2.5624zm3.8707 5.9972L12.4376 6h-.8761L9.1292 9.9972h5.7409zm-9.2787 7.2425-1.3106-5.2425h15.4384l-1.3106 5.2425a1 1 0 0 1-.9701.7575H6.5615a1 1 0 0 1-.97-.7575z"></path></svg>

    return  <>
            {input? <div onClick={close} className={css.backInput}></div> : <></>}
            <div className={css.inputWrapper}>
                <input onChange={(e: any) => {setInput(e.currentTarget.value)}} value={input} placeholder='Что вы ищете?'/>
                {input? <div className={css.findProdWrapper}>
                    {filterCategory().map((subCat: any, i: number) => {
                        return <div key={i}>
                            <div onClick={() => {categoryRedirect([subCat.id, subCat.subId])}} className={css.catWrapper}>
                                <CategorySvg/>
                                <h1>{subCat.name}</h1>
                            </div>
                            {subCat.products.map((prod: any) => {
                            return <div onClick={() => {prodRedirect([subCat.id, subCat.subId, prod.id])}} key={prod.id} className={css.prodWrapper}>
                                        <ProdSvg/>
                                        <h2>{prod.name}</h2>
                                    </div>
                            })}
                        </div>
                    })}
                </div> 
                : <></>}
                <FindIcon/>
            </div>
    </>
}

export default HeaderFinder
import { useStore } from "effector-react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import ProductInfo from "../../../../components/ProductInfo/ProductInfo"
import CrossSvg from "../../../../components/svg/CrossSvg"
import { $data } from "../../../../store/allDataModel"
import css from './../../../../styles/Buy.module.sass'

const Buy = () => {
    const [isOpen, setIsOpen] = useState(false)
    const data = useStore($data)
    const router = useRouter()
    const {id, subId, prodId} = router.query
    
    let prodData
    let prodInfo
    let title

    for(let i = 0; i < data.length; i++) {
        if(id === String(data[i].id)) {
            for(let j = 0; j < data[i].subcategory.length; j++) {
                if(subId === String(data[i].subcategory[j].id)) {
                    for(let k = 0; k < data[i].subcategory[j].products.length; k++) {
                        if(prodId === String(data[i].subcategory[j].products[k].id)) {
                            prodData = data[i].subcategory[j].products[k]
                            prodInfo = data[i].subcategory[j].products[k].info
                            title = data[i].subcategory[j].products[k].name
                        }
                    }
                }
            }
        }
    }



    const modalHandler = () => {
        if (!isOpen) setIsOpen(true)
        else setIsOpen(false)
    }

    const Modal = () => {
        if (isOpen) return <>
            <div className={css.modalWrapper}>
                <div className={css.modal}>
                    <div>
                        <div className={css.modalHeader}>
                            <div className={css.logo}></div>
                            <div onClick={modalHandler} className={'svgWrapper'}>
                                <CrossSvg />
                            </div>
                        </div>
                        <h1>Форма заказа</h1>
                        <input placeholder="Имя и фамилия"></input>
                        <input placeholder="Электронная почта"></input>
                        <input placeholder="Номер телефона"></input>
                        <input placeholder="Почтовый индекс"></input>
                    </div>
                    <button onClick={modalHandler} className={css.button}>Отправить</button>
                </div>
            </div>
        </>
    }


    return <>
        <Head>
            <title>{`YOVOY - ${title}`}</title>
        </Head>
        {Modal()}
        <div className={css.slider}>
            <div style={{background: `url('${prodData?.images[0]}')`}} className={css.photo}></div>
            <div className={css.buyWrapper}>
                <div>
                    <h1>{prodData?.name}</h1>
                    <h2>{prodData?.desc}</h2>
                </div>
                <div className={css.buy}>
                    <h1>{`${prodData?.price}₽`}</h1>
                    <button className={css.button} onClick={modalHandler}>Заказать</button>
                </div>
            </div>
        </div>
        {prodInfo?.map(({ name, body }, i) => <ProductInfo key={i} name={name} desc={body} id={i} />)}
    </>
}

export default Buy
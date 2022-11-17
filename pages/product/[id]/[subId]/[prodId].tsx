import { useStore } from "effector-react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import ProductInfo from "../../../../components/ProductInfo/ProductInfo"
import Subcategory from "../../../../components/Subcategory/Subcategory"
import CrossSvg from "../../../../components/svg/CrossSvg"
import { $data } from "../../../../store/allDataModel"
import css from './../../../../styles/Buy.module.sass'

const Buy = () => {
    const [isOpen, setIsOpen] = useState(false)
    const data = useStore($data)
    const router = useRouter()
    const {id, subId, prodId} = router.query
    const [imgI, setImgI] = useState(0)
    
    let prodData
    let prodInfo
    let title
    let sliderInfo

    for(let i = 0; i < data.length; i++) {
        if(id === String(data[i].id)) {
            for(let j = 0; j < data[i].subcategory.length; j++) {
                if(subId === String(data[i].subcategory[j].id)) {
                    sliderInfo = data[i].subcategory[j]
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

    let images: any = []

    if(prodData) {
        images = prodData?.images
    }

    return <>
        <Head>
            <title>{`YOVOY - ${title}`}</title>
        </Head>
        {Modal()}
        <div className={css.slider}>
            <div className={css.photoMobileWrapper}>
                {images.map((img: string, i: number) => (i !== images.length-1)? <div key={i} style={{background: `url('${img}') 0% 0% / contain`, marginRight: 10}} className={css.mobilePhoto}></div> : 
                <div key={i} style={{background: `url('${img}') 0% 0% / contain`, margin: '0'}} className={css.mobilePhoto}></div>)}
            </div>
            <div className={css.photoWrapper}>
                <div style={{background: `url('${prodData?.images[imgI]}')`}} className={css.photo}></div>
                <div className={css.photoHandler}>
                    {(prodData)? prodData.images.map((img: string, i: number) => <div key={i} onClick={() => setImgI(i)} className={css.photoHandlerItem} style={{background: `url('${img}')`}}></div>): <></>}
                </div>
            </div>
            <div className={css.buyWrapper}>
                <div>
                    <h1>{prodData?.name}</h1>
                    <h2>{prodData?.desc}</h2>
                </div>
                {prodInfo?.map(({ name, body }, i) => (i)? <ProductInfo key={i} name={name} desc={body} id={i} /> : <ProductInfo key={i} name={name} desc={body} id={i} />)}
                <div className={css.buy}>
                    <h1>{`${prodData?.price}₽`}</h1>
                    <button className={css.button} onClick={modalHandler}>Заказать</button>
                </div>
            </div>
        </div>
        {(sliderInfo)? <Subcategory name='Смотрите также' desc={sliderInfo.desc} products={sliderInfo.products} id={sliderInfo.id-1}/> : <></>}
    </>
}

export default Buy
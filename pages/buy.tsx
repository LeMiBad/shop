import { useState } from "react"
import ProductInfo from "../components/ProductInfo/ProductInfo"
import CrossSvg from "../components/svg/CrossSvg"
import css from './../styles/buy.module.sass'

const productInfo = [{name: 'Размеры', desc: '100x100см'}, {name: 'Производитель', desc: 'ООО "Северный луч'}]

const Buy = () => {
    const [isOpen, setIsOpen] = useState(false)

    const modalHandler = () => {
        if(!isOpen) setIsOpen(true)
        else setIsOpen(false)
    }

    const Modal = () => {
        if(isOpen) return <>
            <div className={css.modalWrapper}>
                <div className={css.modal}>
                    <div>
                        <div className={css.modalHeader}>
                            <div className={css.logo}></div>
                            <div onClick={modalHandler} className={'svgWrapper'}>
                                <CrossSvg/>
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
        {Modal()}
        <div className={css.slider}>
            <div className={css.photo}></div>
            <div className={css.buyWrapper}>
                <div>
                    <h1>Товар</h1>
                    <h2>Краткое описание данного товара, например размеры или производитель</h2>
                </div>
                <div className={css.buy}>
                    <h1>56250₽</h1>
                    <button className={css.button} onClick={modalHandler}>Заказать</button>
                </div>
            </div>
        </div>
        {productInfo.map(({name, desc}, i) => <ProductInfo key={i} name={name} desc={desc} id={i}/>)}
    </>
}

export default Buy
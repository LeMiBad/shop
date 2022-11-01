import { useRouter } from 'next/router'
import css from './../../styles/Category.module.sass'

const Category = () => {
    const router = useRouter()

    return <>
        <div onClick={() => { router.push('/kinds') }} className={css.wrapper}>
            <div className={css.img}></div>
            <div className={css.linkWrapper}>
                <div>
                    <h1>Домашний текстиль</h1>
                    <h3>Домашний текстиль - это все то, что делает дом теплым, комфортным и уютным. Это покрывала и пледы, декоративные подушки, халаты и туники, постельное белье, полотенца, шторы, скатерти и салфетки</h3>
                </div>
                <div className={css.arrowWrapper}>
                    <svg width="20" height="20" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5H25V10.5H0V13.5Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    </>
}

export default Category
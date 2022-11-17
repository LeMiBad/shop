import { useState } from 'react'
import Categories from '../Categories/Categories'
import css from './../../styles/Header.module.sass'
import BurgerIcon from '../svg/BurgerSvg'
import CrossIcon from '../svg/CrossSvg'

import { useStore } from 'effector-react'
import { $selectedCategory } from '../../store/burgerModel'
import { useRouter } from 'next/router'
import { $data } from '../../store/allDataModel'
import HeaderFinder from '../HeaderFinder/headerFiner'

const Header = () => {
    const [isOpen, setIsOpen] = useState(css.burgerStart)
    const categories = useStore($data)
    const selectedCategory = useStore($selectedCategory)

    const router = useRouter()

    const url = () => {
        const url: any = []
        const names = []

        for(let urlItem in router.query) {
            if(router.query[urlItem]) url.push(router.query[urlItem])
        }

        if(url.length === 1) names[0] = {name: categories[+url[0]-1].name, id: url[0], url}
        if(url.length === 2) {
            names[0] = {name: categories[+url[0]-1].name, id: url[0], url}
            names[1] = {name: categories[+url[0]-1].subcategory[+url[1]-1].name, id: url[1], url}
        }
        if(url.length === 3) {
            names[0] = {name: categories[+url[0]-1].name, id: url[0], url}
            names[1] = {name: categories[+url[0]-1].subcategory[+url[1]-1].name, id: url[1], url}
            names[2] = {name: categories[+url[0]-1].subcategory[+url[1]-1].products[+url[2]-1].name, id: url[2], url}
        }

        return names
    }

    const breadHandler = (url: number[], i: number) => {
        if(i === 2) router.push(`/subcategory/${url[0]}`)
        if(i === 3) router.push(`/productlist/${url[0]}/${url[1]}`)
    }

    const openBurger = () => setIsOpen(css.burgerOpen)
    const closeBurger = () => setIsOpen(css.burgerClose)

    return <>
        <div className={`${css.burger} ${isOpen}`}>
            <div className={css.burgerHeader}>
                <div className={css.logo}></div>
                <div onClick={closeBurger} className={'svgWrapper'}>
                    <CrossIcon/>
                </div>
            </div>
            {categories.map((category, i) => <Categories closeFunc={closeBurger} key={i} id={i} name={category.name} smallCategories={(i === selectedCategory)? category.subcategory.map((sub) => sub.name) : []}/>)}
        </div>
        {(isOpen === css.burgerOpen)? <div onClick={closeBurger} className={css.blackout}></div> : <></>}
        <header className={css.header}>
            <div onClick={() => {router.push('/')}} className={css.logo}></div>
            {HeaderFinder()}
            <div>
                <div onClick={openBurger} style={{marginLeft: '30px'}} className={'svgWrapper'}>
                    <BurgerIcon/>
                </div>
            </div>
        </header>
        {/* <span>Бытовая химия</span><span>Крахмал - спрей для белья, одежды</span><span>Чехол для гладильной доски</span> */}
        <div className={css.bread}><span onClick={() => {router.push('/')}}>Главная</span>{url().map((item, i) => <span onClick={() => {breadHandler(item.url, i+2)}} key={i}>{item.name}</span>)}</div>
    </>
}

export default Header
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
    </>
}

export default Header
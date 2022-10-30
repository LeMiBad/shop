import { useState } from 'react'
import Categories from '../Categories/Categories'
import css from './../../styles/Header.module.sass'
import BurgerIcon from '../svg/BurgerSvg'
import CrossIcon from '../svg/CrossSvg'
import FindIcon from '../svg/FindSvg'
import { useStore } from 'effector-react'
import { $categories, $selectedCategory } from '../../store/burgerModel'

const Header = () => {
    const [input, setInput] = useState('')
    const [isOpen, setIsOpen] = useState(css.burgerStart)
    const categories = useStore($categories)
    const selectedCategory = useStore($selectedCategory)


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
            {categories.map((category, i) => <Categories key={i} id={i} name={category.name} smallCategories={(i === selectedCategory)? category.smallCategories : []}/>)}
        </div>
        {(isOpen === css.burgerOpen)? <div onClick={closeBurger} className={css.blackout}></div> : <></>}
        <header className={css.header}>
            <div className={css.logo}></div>
            <div className={css.inputWrapper}>
                <input onChange={(e: any) => setInput(e.value)} value={input} placeholder='Что вы ищете?'/>
                <FindIcon/>
            </div>
            <div>
                <div onClick={openBurger} style={{marginLeft: '30px'}} className={'svgWrapper'}>
                    <BurgerIcon/>
                </div>
            </div>
        </header>
    </>
}

export default Header
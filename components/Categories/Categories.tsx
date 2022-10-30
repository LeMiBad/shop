import { useStore } from 'effector-react'
import { $selectedCategory, selectCategory } from '../../store/burgerModel'
import css from './../../styles/Categories.module.sass'

interface CategoriesProps {
    name: string
    smallCategories?: Array<string>
    id: number
}

const Categories: React.FC<CategoriesProps> = ({name, smallCategories, id}) => {
    const selectedCategory = useStore($selectedCategory)

    const crossHandler = () => {
        if(selectedCategory === -1) selectCategory(id)
        else if(selectedCategory === id) selectCategory(-1)
        else selectCategory(id)
    }

    const smallCategory = () => {
        if(smallCategories) {
            if(smallCategories.length) return (
                <div className={css.smallCatWrapper}>
                    {smallCategories.map((item, i) => <h2 className={css.item} key={i}>{item}</h2>)}
                </div>
            )
        }
    }

    return <>
        <div onClick={crossHandler} className={css.wrapper}>
            <h1>{name}</h1>
            <svg className={(selectedCategory === id)? css.open : css.close} width={'24'} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="m12.0003 15.5996-5.7857-5.785 1.414-1.4143 4.3717 4.3711 4.3717-4.3711 1.4141 1.4143-5.7858 5.785z"></path></svg>
        </div>
        {smallCategory()}
    </>
}

export default Categories
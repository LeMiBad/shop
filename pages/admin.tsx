import { useStore } from "effector-react"
import { $data, renameCategory, renameSubCategory } from "../store/allDataModel"
import css from './../styles/Admin.module.sass'

const Admin = () => {
    const data = useStore($data)
    
    return (
        <div style={{marginLeft: '10%', display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
            {data.map(cat => <><h1 key={cat.id} className={css.category}>{cat.name}
                <button onClick={() => renameCategory({id: cat.id, newName: 'sr'})}>Настроить</button>
                <button>Удалить</button>
            </h1>
            {cat.subcategory.map(subCat => <div key={subCat.id} className={css.subCategoryWrapper}>
                <h2 className={css.subCategory}>{subCat.name}
                    <button onClick={() => renameSubCategory({id: [cat.id, subCat.id], newName: 'ППЕПЕПЕ'})}>Настроить</button>
                    <button>Удалить</button>
                    {subCat.products.map(prod => <h3 className={css.prod} key={prod.id}>{prod.name}
                        <button>Настроить</button>
                        <button>Удалить</button>
                    </h3>)}
                    <button style={{marginLeft: '80px'}}>Новый товар</button>
                </h2>
            </div>)} </>)}
        </div>
    )
}

export default Admin
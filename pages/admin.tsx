import { useStore } from "effector-react"
import { useState } from "react"
import AdminModalCat from "../components/AdminModalCat/AdminModalCat"
import CreateAdminModalCat from "../components/AdminModalCat/CreateAdminModalCat"
import AdminModalProd from "../components/AdminModalProd/AdminModalProd"
import CreateAdminModalProd from "../components/AdminModalProd/CreateAdminModalProd"
import AdminModalSubCat from "../components/AdminModalSubCat/AdminModalSubCat"
import CreateAdminModalSubCat from "../components/AdminModalSubCat/CreateAdminModalSubCat"
import { $data, deleteCategory, deleteProd, deleteSubCategory, updateSubCategory } from "../store/allDataModel"
import css from './../styles/Admin.module.sass'

const Admin = () => {
    const data = useStore($data)
    const [modalType, setModalType] = useState('')
    const [url, setUrl] = useState<number[]>([])
    
    const modalHandler = () => {
        if(!modalType) return <></>
        if(modalType === 'AdminModalCat') return <AdminModalCat url={url} close={setModalType}/>
        if(modalType === 'CreateAdminModalCat') return <CreateAdminModalCat close={setModalType}/>
        if(modalType === 'AdminModalSubCat') return <AdminModalSubCat url={url} close={setModalType}/>
        if(modalType === 'CreateAdminModalSubCat') return <CreateAdminModalSubCat url={url[0]} close={setModalType}/>
        if(modalType === 'AdminModalProd') return <AdminModalProd url={url} close={setModalType}/>
        if(modalType === 'CreateAdminModalProd') return <CreateAdminModalProd url={url} close={setModalType}/>
    }

    return (
        <>
            {modalHandler()}
            <div style={{marginLeft: '10%', display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                {data.map(cat => <div key={cat.id}><div className={css.category}>{cat.name}
                    <button onClick={() => {setModalType('AdminModalCat'); setUrl([cat.id])}}>Настроить</button>
                    <button onClick={() => {deleteCategory(cat.id)}}>Удалить</button>
                </div>
                {cat.subcategory.map(subCat => <div key={subCat.id} className={css.subCategoryWrapper}>
                    <div className={css.subCategory}>{subCat.name}
                        <button onClick={() => {setModalType('AdminModalSubCat'); setUrl([cat.id, subCat.id])}}>Настроить</button>
                        <button onClick={() => {deleteSubCategory([cat.id, subCat.id])}}>Удалить</button>
                        {subCat.products.map(prod => <div className={css.prod} key={prod.id}>{prod.name}
                            <button onClick={() => {setModalType('AdminModalProd'); setUrl([cat.id, subCat.id, prod.id])}}>Настроить</button>
                            <button onClick={() => {deleteProd([cat.id, subCat.id, prod.id])}}>Удалить</button>
                        </div>
                        )}
                    </div>
                    <button onClick={() => {setModalType('CreateAdminModalProd'); setUrl([cat.id, subCat.id])}} style={{marginLeft: '120px'}}>Новый товар</button>
                </div>)}
                <button onClick={() => {setModalType('CreateAdminModalSubCat'); setUrl([cat.id])}}>Создать подкатегорию</button>
                </div>)}
                <button onClick={() => {setModalType('CreateAdminModalCat')}}>Создать категорию</button>
            </div>
        </>
    )
}

export default Admin
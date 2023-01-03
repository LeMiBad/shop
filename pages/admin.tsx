import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import AdminModalCat from "../components/AdminModalCat/AdminModalCat"
import CreateAdminModalCat from "../components/AdminModalCat/CreateAdminModalCat"
import AdminModalProd from "../components/AdminModalProd/AdminModalProd"
import CreateAdminModalProd from "../components/AdminModalProd/CreateAdminModalProd"
import AdminModalSubCat from "../components/AdminModalSubCat/AdminModalSubCat"
import CreateAdminModalSubCat from "../components/AdminModalSubCat/CreateAdminModalSubCat"
import { $isAcces, checkAcces } from "../store/adminAcces"
import { $data, deleteCategory, deleteProd, deleteSubCategory, getData } from "../store/allDataModel"
import css from './../styles/Admin.module.sass'

const Admin = () => {
    const data = useStore($data)
    const [modalType, setModalType] = useState('')
    const [modalError, setModalError] = useState(false)
    const [url, setUrl] = useState<number[]>([])
    const [accesInput, setAccesInput] = useState('')
    const isAcces = useStore($isAcces)

    const accesInputHandler = (e: any) => {
        setAccesInput(e.currentTarget.value)
    }

    const modalHandler = () => {
        if(!modalType) return null
        if(modalType === 'AdminModalCat') return <AdminModalCat url={url} close={setModalType}/>
        if(modalType === 'CreateAdminModalCat') return <CreateAdminModalCat close={setModalType}/>
        if(modalType === 'AdminModalSubCat') return <AdminModalSubCat url={url} close={setModalType}/>
        if(modalType === 'CreateAdminModalSubCat') return <CreateAdminModalSubCat url={url[0]} close={setModalType}/>
        if(modalType === 'AdminModalProd') return <AdminModalProd url={url} close={setModalType}/>
        if(modalType === 'CreateAdminModalProd') return <CreateAdminModalProd url={url} close={setModalType}/>
    }

    const modalTypeHandler = (type: string, url=[1]) => {
        if(modalType) {
            setModalError(true)
            setTimeout(() => {
                setModalError(false)
            }, 1000)
        }
        else {
            setModalType(type)
            setUrl(url)
        }
    }

    return (
        <>
            {isAcces? 
                <>
                    {(modalError)? <div className={css.errorModal}>Сохраните изменения</div> : <></>}
                    {modalHandler()}
                    <div style={{marginLeft: '10%', display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                        {data.map(cat => <div key={cat.id}><div className={css.category}>{cat.name}
                            <button onClick={() => {modalTypeHandler('AdminModalCat', [cat.id])}}>Настроить</button>
                            <button onClick={() => {deleteCategory(cat.id)}}>Удалить</button>
                        </div>
                        {cat.subcategory.map(subCat => <div key={subCat.id} className={css.subCategoryWrapper}>
                            <div className={css.subCategory}>{subCat.name}
                                <button onClick={() => {modalTypeHandler('AdminModalSubCat', [cat.id, subCat.id])}}>Настроить</button>
                                <button onClick={() => {deleteSubCategory([cat.id, subCat.id])}}>Удалить</button>
                                {subCat.products.map(prod => <div className={css.prod} key={prod.id}>{prod.name}
                                    <button onClick={() => {modalTypeHandler('AdminModalProd', [cat.id, subCat.id, prod.id])}}>Настроить</button>
                                    <button onClick={() => {deleteProd([cat.id, subCat.id, prod.id])}}>Удалить</button>
                                </div>
                                )}
                            </div>
                            <button onClick={() => {modalTypeHandler('CreateAdminModalProd', [cat.id, subCat.id])}} style={{marginLeft: '120px'}}>Новый товар</button>
                        </div>)}
                        <button onClick={() => {modalTypeHandler('CreateAdminModalSubCat', [cat.id])}}>Создать подкатегорию</button>
                        </div>)}
                        <button onClick={() => {modalTypeHandler('CreateAdminModalCat')}}>Создать категорию</button>
                    </div>
                </> 
                : 
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input onChange={(e) => {accesInputHandler(e)}} placeholder='Код доступа' value={accesInput}/>
                    <button onClick={() => checkAcces(accesInput)} type="button">Проверить</button>
                </div>
            }
        </>
    )
}

export default Admin
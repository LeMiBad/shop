import { useStore } from "effector-react"
import Head from "next/head"
import { useRouter } from "next/router"
import Subcategory from "../../components/Subcategory/Subcategory"
import { $data } from "../../store/allDataModel"


const SubCategorys = () => {
    const router = useRouter()
    const data = useStore($data)
    const {id} = router.query
    
    let catData
    let title

    for(let i = 0; i < data.length; i++) {
        if(id === String(data[i].id)) {
            catData = data[i]
            title = data[i].name
        }
    }
    

    return (
        <>
            <Head>
                <title>{`YOVOY - ${title}`}</title>
            </Head>
            {catData?.subcategory.map((subCategor, key) => <Subcategory key={key} id={key} name={subCategor.name} products={subCategor.products} desc={subCategor.desc}/>)}
        </>
    )
}

export default SubCategorys
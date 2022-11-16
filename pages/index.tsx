import { useStore } from "effector-react"
import Head from "next/head"
import Category from "../components/Category/Category"
import { $data } from "../store/allDataModel"

const Main = () => {
    const data = useStore($data)

    

    return (
        <>
            <Head>
                <title>YOVOY</title>
            </Head>
            {data.map(category => <Category key={category.id} img={category.img} id={category.id} name={category.name} desc={category.desc}/>)}
        </>
    )
}

export default Main
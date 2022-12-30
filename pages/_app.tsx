import { useStore } from 'effector-react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { $isAcces } from '../store/adminAcces'
import { getData, saveData } from '../store/allDataModel'
import './../styles/globals.css'

export default function App({ Component, pageProps }: any) {
    const router = useRouter()
    const isAcces = useStore($isAcces)

    

    useEffect(() => {
        if(!isAcces) {
            getData()
        }
    }, [isAcces])


    return <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="apple-mobile-web-app-title" content="Snippit"/>
            <meta name="application-name" content="<APP NAME>"/>
            <meta name="msapplication-TileColor" content="#ffc40d"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Header/>
        {isAcces? 
            <div className={'modalAdmin'}>
                <button onClick={() => router.push('/admin')} type='button'>В админку</button>
                <button onClick={() => saveData()} type='button'>Сохранить</button>
            </div> 
            : 
        <></>}
        <Component {...pageProps} />
        <Footer/>
    </>
}
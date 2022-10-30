import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import MainPage from "../components/Category/Category"
import './../styles/globals.css'

const App = () => {
    return (
        <>
            <Header/>
            <MainPage desk="Домашний текстиль - это все то, что делает дом теплым, комфортным и уютным. Это покрывала и пледы, декоративные подушки, халаты и туники, постельное белье, полотенца, шторы, скатерти и салфетки" name="Текстиль для дома"/>
            <MainPage desk="Бытовая химия - это непродовольственные химические вещества, средства ухода за одеждой, помещениями, автомобилями, посудой и тому подобным, которые обычно встречаются и используются в домохозяйстве" name="Бытовая химия"/>
            <Footer/>
        </>
    )
}

export default App
import { useRef } from 'react'
import css from './../../styles/Slider.module.sass'

const images = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const Slider = () => {
    const arrowLeft = () => {
        return <svg style={{transform: "rotate(180deg)"}} width="20" height="20" viewBox="0 0 27 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5H25V10.5H0V13.5Z" fill="white"/>
        </svg>
    }
    const arrowRight = () => {
        return <svg width="20" height="20" viewBox="0 0 27 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807612 14.9792 0.807612 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5H25V10.5H0V13.5Z" fill="white"/>
        </svg>
    }

    const scroll = useRef() as any
    
    const leftSlide = () => {
        const width = scroll.current.offsetWidth 
        scroll.current.scrollBy({
            left: -width,
            behavior : "smooth"
        })
    }
    
    const rightSlide = () => {
        const width = scroll.current.offsetWidth
        scroll.current.scrollBy({
            left: width,
            behavior : "smooth"
        })
    }
    


    return <>
        <div ref={scroll} className={css.imgContainer}>
            <div className={css.control}>
                <div onClick={leftSlide} className={css.arrowContainer}>{arrowLeft()}</div>
                <div onClick={rightSlide} className={css.arrowContainer}>{arrowRight()}</div>
            </div>
            {images.map((item, i) => {
                return <div key={i} className={css.imgWrapper}>
                    <div style={{marginRight: (i === images.length-1)? '0' : '30px'}} className={css.img}></div>
                    <h5>Товар</h5>
                </div>
            })}
        </div>
    </>
}

export default Slider
import css from './../../styles/Footer.module.sass'

const Footer = () => {
    return <>
        <div className={css.footer}>
            <div></div>
            <div className={css.navbar}>
                <h5>г. Казань, ул. КрасноАрмейская, дом 45</h5>
                <h5>Почта: 79872121399.yandex@gmail.com</h5>
                <h5>Номер: +7(756)-555-45-15</h5>
                <h5>Телеграмм: t.me/yovoy</h5>
            </div>
        </div>
    </>
}

export default Footer
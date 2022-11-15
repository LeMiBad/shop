import css from './../../styles/Header.module.sass'
import FindIcon from '../svg/FindSvg'
import { useState } from 'react'
import { useStore } from 'effector-react'
import { $data } from '../../store/allDataModel'

const HeaderFinder = () => {
    const [input, setInput] = useState('')
    const data = useStore($data)

    return  <div className={css.inputWrapper}>
                <input onChange={(e: any) => setInput(e.value)} value={input} placeholder='Что вы ищете?'/>
                <FindIcon/>
            </div>
}

export default HeaderFinder
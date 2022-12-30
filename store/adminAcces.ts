import axios from "axios"
import { createEvent, createStore } from "effector"


export const checkAcces = createEvent<string>()
export const acces = createEvent()
export const $isAcces = createStore(false)
    .on(checkAcces, (_, accesToken) => {
        axios.get('http://localhost:3100/acces', {
            headers: {'Content-Type': 'application/json'},
            params: {
                token: accesToken
            }
        }).then(data => {
            if(data.data) acces()
        })
    })
    .on(acces, () => {
        return true
    })
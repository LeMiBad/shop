import { createEvent, createStore } from "effector"


export const selectCategory = createEvent<number>()
export const $selectedCategory = createStore(-1)
    .on(selectCategory, (_, i) => i)

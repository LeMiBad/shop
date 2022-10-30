import { createEvent, createStore } from "effector"


interface smallCategoriesType {
    name: string
    smallCategories: Array<string>
}

const initialState = [
    {
        name: 'Текстиль для дома',
        smallCategories: [
            'Чехлы для гладильных досок',
            'Гладильные принадлежности',
            'Аксессуары для стирки',
            'Прихватки',
            'Фартуки',
            'Подушки',
        ]
    },
    {
        name: 'Бытовая Химия',
        smallCategories: [
            'Чехлы для гладильных досок',
            'Гладильные принадлежности',
            'Аксессуары для стирки',
            'Прихватки',
            'Фартуки',
            'Подушки',
        ]
    },
]
export const $categories = createStore<Array<smallCategoriesType>>(initialState)

export const selectCategory = createEvent<number>()
export const $selectedCategory = createStore(-1)
    .on(selectCategory, (_, i) => i)

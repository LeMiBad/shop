import { createEvent, createStore } from "effector"



const data = [
    {
        id: 1,
        name: 'Текстиль для дома',
        desc: 'Текстиль для дома - это все то, что делает дом теплым, комфортным и уютным. Это покрывала и пледы, декоративные подушки, халаты и туники, постельное белье, полотенца, шторы, скатерти и салфетки',
        img: 'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
        subcategory: [
            {
                id: 1,
                name: 'Чехлы для гладильных досок',
                desc: 'Чехол предназначен для защиты поверхности гладильной доски и обеспечения комфортного процесса глажки',
                products: [
                    {
                        id: 1,
                        name: 'Звёздочки',
                        desc: 'Удобная вещь в быту',
                        price: '500',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://www.ikea.com/jp/en/images/products/ruter-ironing-board-white__0909517_pe629616_s5.jpg?f=xxxs'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            },
                            {
                                name: 'Цвет',
                                body: 'Зелёный'
                            },
                            {
                                name: 'Страна',
                                body: 'Россия'
                            },
                            {
                                name: 'Материал',
                                body: 'Металл'
                            },
                            {
                                name: 'Осталось',
                                body: '10'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'С помпочками',
                        desc: 'Удобная вещь в быту',
                        price: '1400',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://www.ikea.com/jp/en/images/products/lagt-ironing-board-cover-yellow__0909548_pe629618_s5.jpg?f=xxxs'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Бананы',
                        desc: 'Удобная вещь в быту',
                        price: '2300',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: 'С помпочками',
                        desc: 'Удобная вещь в быту',
                        price: '8600',
                        images: [
                            'https://www.ikea.com/jp/en/images/products/lagt-ironing-board-cover-grey__0909627_pe629617_s5.jpg?f=xxxs',
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: 'С цветами',
                        desc: 'Удобная вещь в быту',
                        price: '8600',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: 'С цветами',
                        desc: 'Удобная вещь в быту',
                        price: '8600',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 7,
                        name: 'С цветами',
                        desc: 'Удобная вещь в быту',
                        price: '8600',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 8,
                        name: 'С цветами',
                        desc: 'Удобная вещь в быту',
                        price: '8600',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            },
            {
                id: 2,
                name: 'Фартуки',
                desc: 'Гладильная доска приспособление для того, чтобы на нём гладить',
                products: [
                    {
                        id: 1,
                        name: 'Гладильная доска(Стандарт)',
                        desc: 'Удобная вещь в быту',
                        price: '1000',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Гладильная доска(Эко)',
                        desc: 'Красивый с рисунком',
                        price: '850',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            },
            {
                id: 3,
                name: 'Прихватки',
                desc: 'Чехол предназначен для защиты поверхности гладильной доски и обеспечения комфортного процесса глажки',
                products: [
                    {
                        id: 1,
                        name: 'Хрень доска для гольфа',
                        desc: 'Удобная вещь в быту',
                        price: '1000',
                        images: [
                            'https://www.ikea.com/images/c4/62/c462bbc57d72f27ff7d5df3285cbe5bd.jpg?f=xs',
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Чехол для гладильной доски',
                        desc: 'Красивый с рисунком',
                        price: '850',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            },
            {
                id: 4,
                name: 'Подушки',
                desc: 'Чехол предназначен для защиты поверхности гладильной доски и обеспечения комфортного процесса глажки',
                products: [
                    {
                        id: 1,
                        name: 'Хрень доска для гольфа',
                        desc: 'Удобная вещь в быту',
                        price: '1000',
                        images: [
                            'https://www.ikea.com/images/c4/62/c462bbc57d72f27ff7d5df3285cbe5bd.jpg?f=xs',
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Чехол для гладильной доски',
                        desc: 'Красивый с рисунком',
                        price: '850',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            },
            {
                id: 5,
                name: 'Акссесуары для стирки',
                desc: 'Чехол предназначен для защиты поверхности гладильной доски и обеспечения комфортного процесса глажки',
                products: [
                    {
                        id: 1,
                        name: 'Хрень доска для гольфа',
                        desc: 'Удобная вещь в быту',
                        price: '1000',
                        images: [
                            'https://www.ikea.com/images/c4/62/c462bbc57d72f27ff7d5df3285cbe5bd.jpg?f=xs',
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Чехол для гладильной доски',
                        desc: 'Красивый с рисунком',
                        price: '850',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            },
            {
                id: 6,
                name: 'Гладильные принадлежности',
                desc: 'Чехол предназначен для защиты поверхности гладильной доски и обеспечения комфортного процесса глажки',
                products: [
                    {
                        id: 1,
                        name: 'Хрень доска для гольфа',
                        desc: 'Удобная вещь в быту',
                        price: '1000',
                        images: [
                            'https://www.ikea.com/images/c4/62/c462bbc57d72f27ff7d5df3285cbe5bd.jpg?f=xs',
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Чехол для гладильной доски',
                        desc: 'Красивый с рисунком',
                        price: '850',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Бытовая химия',
        desc: 'Домашний текстиль - это все то, что делает дом теплым, комфортным и уютным. Это покрывала и пледы, декоративные подушки, халаты и туники, постельное белье, полотенца, шторы, скатерти и салфетки',
        img: 'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg',
        subcategory: [
            {
                id: 1,
                name: 'Отбеливатели и пятновыводители',
                desc: 'Чехол предназначен для защиты поверхности гладильной доски и обеспечения комфортного процесса глажки',
                products: [
                    {
                        id: 1,
                        name: 'Вызвонить доска',
                        desc: 'Удобная вещь в быту',
                        price: '1000',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Чехол для гладильной доски',
                        desc: 'Красивый с рисунком',
                        price: '850',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            },
            {
                id: 2,
                name: 'Стиральные порошки',
                desc: 'Чехол предназначен для защиты поверхности гладильной доски и обеспечения комфортного процесса глажки',
                products: [
                    {
                        id: 1,
                        name: 'Вызвонить доска',
                        desc: 'Удобная вещь в быту',
                        price: '1000',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Чехол для гладильной доски',
                        desc: 'Красивый с рисунком',
                        price: '850',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            },
            {
                id: 3,
                name: 'Крахмал - спрей для белья, одежды',
                desc: 'Чехол предназначен для защиты поверхности гладильной доски и обеспечения комфортного процесса глажки',
                products: [
                    {
                        id: 1,
                        name: 'Вызвонить доска',
                        desc: 'Удобная вещь в быту',
                        price: '1000',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Чехол для гладильной доски',
                        desc: 'Красивый с рисунком',
                        price: '850',
                        images: [
                            'https://forte-plast.by/assets/images/catalog/furnitura/gladilnaya-doska-s-6611-w.png',
                            'https://idei.club/uploads/posts/2021-08/1629980968_12-idei-club-p-kvadratnaya-spalnya-gostinaya-interer-kras-14.jpg'
                        ],
                        bigDesc: 'Краткое описание данного товара, например размеры или производитель',
                        info: [
                            {
                                name: 'Размеры',
                                body: '100x100см'
                            },
                            {
                                name: 'Производитель',
                                body: 'ООО "Северный луч"'
                            }
                        ]
                    },
                ]
            }
        ]
    }
]

export const createCategory = createEvent<{name: string, desc: string, img: string}>()
export const updateCategory = createEvent<{id: number, name: string, desc: string, img: string}>()
export const deleteCategory = createEvent<number>()
export const createSubCategory = createEvent<{id: number, name: string, desc: string}>()
export const updateSubCategory = createEvent<{id: number[], name: string, desc: string}>()
export const deleteSubCategory = createEvent<number[]>()
export const createProd = createEvent<{id: number[], name: string, desc: string, price: string, images: string[], bigDesc: string, info: {name: string, body: string}[]}>()
export const updateProd = createEvent<{id: number[], name: string, desc: string, price: string, images: string[], bigDesc: string, info: {name: string, body: string}[]}>()
export const deleteProd = createEvent<number[]>()

export const $data = createStore(data)
    .on(createCategory, (data, {name, desc, img}) => {
        data.push({
            id: data.length+1,
            name: name,
            desc: desc,
            img: img,
            subcategory: []
        })
        return [...data]
    })
    .on(updateCategory, (data, {id, name, desc, img}) => {
        data[id-1].name = name
        data[id-1].desc = desc
        data[id-1].img = img
        return [...data]
    })
    .on(deleteCategory, (data, id) => {
        data.splice(id-1, 1)
        data.forEach((_, i) => {
            data[i].id = i+1
        })
        
        return [...data]
    })
    .on(createSubCategory, (data, {id, name, desc}) => {
        data[id-1].subcategory.push({
            id: data[id-1].subcategory.length+1,
            name,
            desc,
            products: []
        })
        return [...data]
    })
    .on(updateSubCategory, (data, {id, name, desc}) => {
        data[id[0]-1].subcategory[id[1]-1].name = name
        data[id[0]-1].subcategory[id[1]-1].desc = desc
        return [...data]
    })
    .on(deleteSubCategory, (data, id) => {
        data[id[0]-1].subcategory.splice(id[1]-1, 1)
        data[id[0]-1].subcategory.forEach((subCat, i) => {
            subCat.id = i+1
        })
        return [...data]
    })
    .on(createProd, (data, {id, name, desc, price, images, bigDesc, info}) => {
        data[id[0]-1].subcategory[id[1]-1].products.push({
            id: data[id[0]-1].subcategory[id[1]-1].products.length+1,
            name,
            desc,
            price,
            images,
            bigDesc,
            info
        })
        return [...data]
    })
    .on(updateProd, (data, {id, name, desc, price, images, bigDesc, info}) => {
        data[id[0]-1].subcategory[id[1]-1].products[id[2]-1].name = name
        data[id[0]-1].subcategory[id[1]-1].products[id[2]-1].desc = desc
        data[id[0]-1].subcategory[id[1]-1].products[id[2]-1].price = price
        data[id[0]-1].subcategory[id[1]-1].products[id[2]-1].images = images
        data[id[0]-1].subcategory[id[1]-1].products[id[2]-1].bigDesc = bigDesc
        data[id[0]-1].subcategory[id[1]-1].products[id[2]-1].info = info
        return [...data]
    })
    .on(deleteProd, (data, id) => {
        console.log(id)
        data[id[0]-1].subcategory[id[1]-1].products.splice(id[2]-1, 1)
        data[id[0]-1].subcategory[id[1]-1].products.forEach((prod, i) => {
            data[id[0]-1].subcategory[id[1]-1].products[i].id = i + 1
        })
        return [...data]
    })
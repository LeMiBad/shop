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

export const renameCategory = createEvent<{id: number, newName: string}>()
export const renameSubCategory = createEvent<{id: number[], newName: string}>()

export const $data = createStore(data)
    .on(renameCategory, (data, {id, newName}) => {
        data[id-1].name = newName
        return data
    })
    .on(renameSubCategory, (data, {id, newName}) => {
        const newData = Object.assign(data)

        data.forEach((category, i) => {
            if(category.id === id[0]) {
                category.subcategory.forEach(subCat => {
                    if(subCat.id === id[1]) newData[id[0]-1].subcategory[id[1]-1].name = newName
                })
            }
        })

        return newData
    })
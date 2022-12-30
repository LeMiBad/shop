import axios from "axios"
import { createEvent, createStore } from "effector"



const data = [
    {
        id: 1,
        name: '',
        desc: '',
        img: '',
        subcategory: [
            {
                id: 1,
                name: '',
                desc: '',
                products: [
                    {
                        id: 1,
                        name: '',
                        desc: '',
                        price: '',
                        images: [
                            '',
                            ''
                        ],
                        bigDesc: '',
                        info: [
                            {
                                name: '',
                                body: ''
                            }
                        ]
                    }
                ]
            },
        ]
    }
]

export const setData = createEvent()
export const saveData = createEvent()
export const createCategory = createEvent<{name: string, desc: string, img: string}>()
export const updateCategory = createEvent<{id: number, name: string, desc: string, img: string}>()
export const deleteCategory = createEvent<number>()
export const createSubCategory = createEvent<{id: number, name: string, desc: string}>()
export const updateSubCategory = createEvent<{id: number[], name: string, desc: string}>()
export const deleteSubCategory = createEvent<number[]>()
export const createProd = createEvent<{id: number[], name: string, desc: string, price: string, images: string[], bigDesc: string, info: {name: string, body: string}[]}>()
export const updateProd = createEvent<{id: number[], name: string, desc: string, price: string, images: string[], bigDesc: string, info: {name: string, body: string}[]}>()
export const deleteProd = createEvent<number[]>()


export function getData () {
    axios.get('http://localhost:3100/', {
        headers: {'Content-Type': 'application/json'}
    }).then(data => {
        setData(data.data)
    })
}


export const $data = createStore(data)
    .on(setData, (_, data) => {
        return data
    })
    .on(saveData, (state) => {
        const newState = [...state]
        axios.post('http://localhost:3100/save', {
            params: {
                "body": 'gtregert'
            }
        })
    })
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
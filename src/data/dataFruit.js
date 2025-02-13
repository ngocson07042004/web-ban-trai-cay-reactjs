import quaDua from '../image/fruits/anh-dua.png'
import quaKiwi from '../image/fruits/anh-kiwi.png'
import quaNho from '../image/fruits/anh-nho.png'
import quaXoai from '../image/fruits/anh-xoai.png'
import Chuoi from '../image/fruits/chuoi.png'
import DauTay from '../image/fruits/dau-tay.png'
import DuaHau from '../image/fruits/dua-hau.png'
import quaCam from '../image/fruits/qua-cam.png'
import quaDuaXap from '../image/fruits/anh-dua.png'
import quaNa from '../image/fruits/qua-na.png'

const dataFruits = [
    {
        id: 1,
        image: quaDua,
        title: "Dứa",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "quả",
        quantity: 1
    },

    {
        id: 2,
        image: quaKiwi,
        title: "Kiwi",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "kg",
        quantity: 1
    },

    {
        id: 3,
        image: quaNho,
        title: "Nho",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "chùm",
        quantity: 1
    },

    {
        id: 4,
        image: quaXoai,
        title: "Xoài",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "kg",
        quantity: 1
    },

    {
        id: 5,
        image: Chuoi,
        title: "Chuối",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "nải",
        quantity: 1
    },

    {
        id: 6,
        image: DauTay,
        title: "Dâu Tây",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "quả",
        quantity: 1
    },

    {
        id: 7,
        image: DuaHau,
        title: "Dưa Hấu",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "quả",
        quantity: 1
    },

    {
        id: 8,
        image: quaCam,
        title: "Cam",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "kg",
        quantity: 1
    },

    {
        id: 9,
        image: quaDuaXap,
        title: "Dừa",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "quả",
        quantity: 1
    },

    {
        id: 10,
        image: quaNa,
        title: "Na",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "kg",
        quantity: 1
    }
]

export default dataFruits
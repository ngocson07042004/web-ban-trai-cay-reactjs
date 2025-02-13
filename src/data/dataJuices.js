import caChua from '../image/juices/nuoc-ep-ca-chua.png'
import CaRotAnhDua from '../image/juices/nuoc-ep-ca-rot-va-dua.png'
import Cam from '../image/juices/nuoc-ep-cam.png'
import Dao from '../image/juices/nuoc-ep-dao.png'
import DuaHau from '../image/juices/nuoc-ep-dua-hau.png'

const dataJuices = [
    {
        id: 1,
        image: caChua,
        title: "Nước Ép Cà Chua",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    },

    {
        id: 2,
        image:  CaRotAnhDua,
        title: "Nước Ép Cà Rốt và Dứa",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    },

    {
        id: 3,
        image: Cam,
        title: "Nước Ép Cam",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    },

    {
        id: 4,
        image: Dao,
        title: "Nước Ép Đào",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    },

    {
        id: 5,
        image: DuaHau,
        title: "Nước Ép Dưa Hấu",
        price: (Math.floor(Math.random() * 5) + 30),
        unit: "ly",
        quantity: 1
    }
]

export default dataJuices
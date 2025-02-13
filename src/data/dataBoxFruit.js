import box1 from '../image/box-fruit/anh-chom-chom-nhan-dua.png'
import box2  from '../image/box-fruit/anh-chom-chom-nhan-dua.png'
import box3 from '../image/box-fruit/hop-chanh-muoi.png'
import box4  from '../image/box-fruit/nhan-ngam-nuoc-duong.png'
import box5 from '../image/box-fruit/vai-thieu-ngam-nuoc-duong.png'

const dataBoxFruits = [
    {
        id: 1,
        image: box1,
        title: "Chôm Chôm Nhân Dứa",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    },

    {
        id: 2,
        image: box2,
        title: "Cootail Trái Cây",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    },

    {
        id: 3,
        image: box3,
        title: "Hộp Chanh Muối",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    },

    {
        id: 4,
        image: box4,
        title: "Nhãn Ngâm Nước Đường",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    },

    {
        id: 5,
        image: box5,
        title: "Vải Thiều Ngâm Nước Đường",
        price: (Math.floor(Math.random() * 5) + 40),
        unit: "hộp",
        quantity: 1
    }
]

export default dataBoxFruits
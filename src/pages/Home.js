import Slider from 'react-slick'
import banner from '../image/banner-trai-cay.jpg'
import MenuTab from '../components/MenuTab'
import ProductList from '../components/ProductList'
import dataFruits from '../data/dataFruit'
import dataBoxFruit from '../data/dataBoxFruit'
import dataJuices from '../data/dataJuices'
import './cssPages/home.css'

const dataProduct = [...dataFruits, ...dataJuices, ...dataBoxFruit]
for(let i = 0; i < dataProduct.length; i++)
  dataProduct[i].id = i + 1

function Home(){
  document.title = "Fruit Mart| Thiên đường mua sắm"
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 4000
  }
  return (
    <>
      <div className="container-banner">
        <img src={banner} alt="Banner đại diện trái cây" />
        <button>Mua ngay</button>
      </div>
      
      <div className="content-slider">
        <Slider {...settings}>
          {dataProduct.map(item => (
            <div className="item-slider" key={item.id}>
              <img src={item.image} alt={item.title}/>
              <h5>{item.title}</h5>
            </div>
          ))}
        </Slider>
      </div>

      <MenuTab/>
      <ProductList/>
    </>
  )
}

export default Home
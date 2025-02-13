import ItemProduct from './ItemProduct'
import dataFruits from '../data/dataFruit'
import dataBoxFruits from '../data/dataBoxFruit'
import dataJuices from '../data/dataJuices'
import './css/productList.css'
function ProductList(){
    return(
        <>
            <div class="fruit-category category">
                {dataFruits.map((product) => (
                    <ItemProduct
                        key={product.id}
                        product={product}
                    />
                ))} 
            </div>

            <div class="juice-category category">
                {dataJuices.map((product) => (
                    <ItemProduct
                        key={product.id}
                        product={product}
                    />
                ))} 
            </div>

            <div class="box-fruit-category category">
                {dataBoxFruits.map((product) => (
                    <ItemProduct
                        key={product.id}
                        product={product}
                    />
                ))} 
            </div>
        </>
    )
}

export default ProductList
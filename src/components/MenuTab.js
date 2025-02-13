import { useState } from 'react'
import './css/MenuTab.css'
import ItemProduct from './ItemProduct'
import dataFruits from '../data/dataFruit'
import dataBoxFruits from '../data/dataBoxFruit'
import dataJuices from '../data/dataJuices'

function MenuTab(){
    const [activeItem, setActiveItem] = useState("Trái cây tươi")
    const handleMenuClick = (item) => {
        setActiveItem(item)
    }

    const renderContent = (choice) =>{
        switch(choice){
            case "Trái cây tươi":
                return(
                    dataFruits.map((product) => (
                        <ItemProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                )
    
            case "Nước ép":
                return(
                    dataJuices.map((product) => (
                        <ItemProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                )
    
            case "Trái cây đóng hộp":
                 return(
                    dataBoxFruits.map((product) => (
                        <ItemProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                )
    
            default:
                return(
                    dataFruits.map((product) => (
                        <ItemProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                )
        }
    }


    return (
        <>
        <div className="content-tabs">
            <ul className="tabs">
                <li
                    className="tab"
                    id={activeItem === "Trái cây tươi" ? "active" : ""}
                    onClick={() => handleMenuClick("Trái cây tươi")}
                >Trái cây tươi</li>

                <li 
                    className="tab"
                    id={activeItem === "Nước ép" ? "active" : ""}
                    onClick={() => handleMenuClick("Nước ép")}
                >Nước ép</li>

                <li
                    className="tab"
                    id={activeItem === "Trái cây đóng hộp" ? "active" : ""}
                    onClick={() => handleMenuClick("Trái cây đóng hộp")}
                >Trái cây đóng hộp</li>
            </ul>
        
            <div className="tab-content">
                { renderContent(activeItem) }
            </div>
        </div>
    </>
    )
}

export default MenuTab
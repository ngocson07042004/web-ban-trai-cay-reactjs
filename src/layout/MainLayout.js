import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuSlider from '../components/MenuSlider'
import MenuBottom from '../components/MenuBottom'

function MainLayout({children}){
    return(
        <>
            <Header/>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
            <MenuSlider/>
            <MenuBottom/>
            <div className="overlay" id="overlay"></div>
        </>
    )
}
export default MainLayout
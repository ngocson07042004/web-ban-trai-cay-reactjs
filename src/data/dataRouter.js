import Home from '../pages/Home'
import Introduction from '../pages/Introduction'
import Product from '../pages/Product'
import Question from '../pages/Question'
import Recruitment from '../pages/Recruitment'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ChangePassword from '../pages/ChangePassword'
import Cart from '../components/Cart'
import Favorite from '../components/Favorite'
import Shuffle from '../components/Shuffle'

const Router = [
    {id: 1, path: "/", page: Home, layout: "public"},
    {id: 2, path: "/introduction", page: Introduction, layout: "public"},
    {id: 3, path: "/product", page: Product, layout: "public"},
    {id: 4, path: "/question", page: Question, layout: "public"},
    {id: 5, path: "/recruitment", page: Recruitment, layout: "public"},
    {id: 6, path: "/contact", page: Contact, layout: "public"},
    {id: 7, path: "/login", page: Login, layout: "private"},
    {id: 8, path: "/signup", page: SignUp, layout: "private"},
    {id: 9, path: "/change-password", page: ChangePassword, layout: "private"},
    {id: 10, path: "/cart", page: Cart, layout: "protected"},
    {id: 11, path: "/favorite", page: Favorite, layout: "protected"},
    {id: 12, path: "/shuffle", page: Shuffle, layout: "protected"}
]

export { Router }
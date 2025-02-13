import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { setLogin } from '../pages/Login'
import './css/Notify.css'

function Notify(){
    const [isLogin, setIsLogin] = useState(setLogin)

    const navigate = useNavigate()

    const isUserClassName = () =>{
        if(!isLogin.state)
            return "fa-solid fa-user"
        else
            return "fa-solid fa-right-from-bracket"
    }

    const isUserLink = () =>{
        if(!isLogin.state)
            return "/login"
        else
            return ""
    }

    const handlerLogOut = () =>{
        if(isLogin.state === true){
            setIsLogin({
                state: false,
                user: "Đăng nhập"
            })
            navigate("/")
        }
    }
    return(
        <>
            <div className="contact-notify">
                <div className="icon-phone">
                    <i className="fa-solid fa-phone"></i>
                </div>
                    
                <div className="contact-title">
                    <h4 className="title">Hỗ trợ liên hệ</h4>
                    <Link to="">1900 1024</Link>
                </div>
            </div>

            <div className="user-notify">
                <div className="icon-user">
                    <i 
                        className={isUserClassName()}
                        onClick={handlerLogOut}
                    ></i>
                </div>

                <div className="user-title">
                    <h4 className="title">Xin chào!</h4>
                    <Link to={isUserLink()}>{isLogin.user}</Link>
                </div>
            </div>
        </>
    )
}

export default Notify
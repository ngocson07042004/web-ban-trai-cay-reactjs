import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import dataUser from '../data/dataUser'
import './cssPages/login.css'

export const setLogin = {
    user: "Đăng nhập",
    state: false
}

function Login(){
    document.title = "Đăng nhập hệ thống"
    
    let homeNav = useNavigate()
    let signUpNav = useNavigate()
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const handlerLogin = (e) => {
        e.preventDefault();

        const user = dataUser.find((user) => user.username === username && user.password === password)

        if (user){
            alert("Đăng nhập thành công!");
            homeNav("/")
            setLogin.user = username
            setLogin.state = true
        }
        else
            alert("Thông tin đăng nhập không chính xác!");
    }

    const handlerClick = () =>{
        if(!show) setShow(true)
        else setShow(false)
    }
    return(
        <main>
            <div className="form-group-login">
                <div className="title-form">
                    <i className="fa-solid fa-user"></i>
                    <h5>Đăng nhập</h5> 
                </div>

                <div className="input-group">
                    <div className="username input-data">
                        <div className="icon">
                            <i className="fa-solid fa-user"></i> 
                        </div>

                        <input 
                            type="text"
                            id="username"
                            placeholder="Tên đăng nhập"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="password input-data">
                        <div className="password-show">
                            <div className="icon">
                                <i className="fa-solid fa-lock"></i> 
                            </div>

                            <input 
                                type={show === true ? "text" : "password"}
                                value={password}
                                placeholder="Mật khầu"
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                                id="password"
                            />

                            <button className="btn-hidden" onClick={handlerClick}>
                                <i 
                                    className={show === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                                ></i>
                            </button>
                        </div>
                        <span className="link"><Link to="/change-password">Quên mật khẩu?</Link></span>
                    </div>

                    <div className="btn-group">
                        <button className="btn-submit" onClick={handlerLogin}>Đăng nhập</button>
                        <span className="link" onClick={() => {signUpNav("/signup")}}>Đăng ký</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
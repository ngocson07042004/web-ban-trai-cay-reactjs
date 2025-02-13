import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import dataUser from '../data/dataUser'
import './cssPages/signup.css'

function SignUp(){
    document.title = "Đăng ký"
    let loginNav = useNavigate()
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const handlerClick1 = () =>{
        if(!show1) setShow1(true)
        else setShow1(false)
    }

    const handlerClick2 = () =>{
        if(!show2) setShow2(true)
        else setShow2(false)
    }

    const handlerSignUp = () =>{
        dataUser.push({
            id: dataUser.length + 1,
            username: username,
            password: password1,
            corfimPassword: password2
        })
        setUsername("")
        setPassword1("")
        setPassword2("")
        alert("Đăng ký tài khoản thành công!")
    }

    return(
        <main>
            <div className="form-group-signup">
                <div className="title-form">
                    <i className="fa-solid fa-user"></i>
                    <h5>Đăng ký</h5> 
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
                                type={show1 === true ? "text" : "password"}
                                value={password1}
                                placeholder="Mật khầu"
                                onChange={(e) => setPassword1(e.target.value)} 
                                required
                                id="password"
                            />

                            <button className="btn-hidden" onClick={handlerClick1}>
                                <i 
                                    className={show1 === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                                ></i>
                            </button>
                        </div>
                    </div>

                    <div className="password input-data">
                        <div className="password-show">
                            <div className="icon">
                                <i className="fa-solid fa-lock"></i> 
                            </div>

                            <input 
                                type={show2 === true ? "text" : "password"}
                                value={password2}
                                placeholder="Nhập lại mật khầu"
                                onChange={(e) => setPassword2(e.target.value)} 
                                required
                                id="cofimPassword"
                            />

                            <button className="btn-hidden" onClick={handlerClick2}>
                                <i 
                                    className={show2 === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                                ></i>
                            </button>
                        </div>
                    </div>

                    <div className="btn-group">
                        <button className="btn-submit" onClick={handlerSignUp}>Đăng ký</button>
                        <span className="link" onClick={() => {loginNav("/login")}}>Đăng nhập</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUp
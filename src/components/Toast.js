import './css/Toast.css'

function ToastSuccess(){
    return(
        <div className="toast toast-success" id="toast-success">
            <div className="icon"><i className="fa-solid fa-circle-check"></i></div>
            <div className="body">
                <h4 className="title">Thành công</h4>
                <span className="message">Đã thêm thành công!</span>
            </div>
            <button className="btn-close" id="btn-close"><i className="fa-solid fa-xmark"></i></button>
        </div>
    )
}

function ToastDanger(){
    return(
        <div className="toast toast-danger" id="toast-danger">
            <div className="icon"><i className="fa-solid fa-circle-xmark"></i></div>
            <div className="body">
                <h4 className="title">Huỷ bỏ</h4>
                <span className="message">Đã huỷ thành công!</span>
            </div>
            <button className="btn-close" id="btn-close"><i className="fa-solid fa-xmark"></i></button>
        </div>
    )
}

export { ToastSuccess, ToastDanger }
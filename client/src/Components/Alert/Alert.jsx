import style from "./Alert.module.css"

const Alert=(props)=>{

    const onClose = (event) =>{
        event.target
    }

    <div className={style.Alert}>
        <p>Fill in the following fields: </p>
        <li></li>
        <button onClick={onClose}>Close</button>

    </div>
}



export default Alert;
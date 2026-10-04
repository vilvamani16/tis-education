import {useState} from "react"

import { CgCloseO } from "react-icons/cg";
import "./index.css"

const Chatbot = () => {
    const [close, setClose] = useState(true)
    const onClickClose = () => {
        setClose(false)
    }
    return(
        <section>
            <div className="chatbot-content">
                {close && (<div className="greeting-content">
                    <button type="button" onClick={onClickClose} className="close-btn">
                        <CgCloseO size={20} color="black" className="close-icon"/>
                    </button>
                    <p className="greeting-msg">
                        Hey I'm Eva your admission assistant
                    </p>
                </div>)}
                <img src="./chatbot.jpg" alt="chatbot" className="chatbot-image"/>
            </div>
        </section>
    )
}


export default Chatbot
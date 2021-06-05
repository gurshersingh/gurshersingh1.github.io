import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"
export default function Topbar() {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> Gursher</a>
                

                <div className="itemcontainer">
                <Person className="icon"/>
                <span> +61 416 554 255</span>
                </div>

                <div className="itemcontainer">
                <Mail className="icon"/>
                <span> gursher.patti@gmail.com</span>
                </div>
                </div>
                <div className="right">
                    hi
                </div>
            </div>
        </div>
    )
}

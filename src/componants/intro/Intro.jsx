//import { Menu } from '@material-ui/core'
import './intro.scss'
import { init } from 'ityped'
import { useEffect,useRef } from 'react'


export default function Intro() {
    
    const textRef = useRef();
    
    useEffect(()=>{
        init(textRef.current, { 
            //showCursor: true, 
            backDelay:1500,
            backSpeed:50,
            showCursor: true,
            strings: [ ' React', ' Express',' MongoDB',' Node js' ] });
    },[])

    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imagecontainer">
                    <img src="assets/me.png" alt="" />
                </div>
            </div>
            <div className="right">

                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Gursher Singh</h1>
                    <h3>Full Stack Developer  <span ref={ textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

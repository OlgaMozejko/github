import "../../style/colors.css"
import "./Intro.css"

import { motion, useDragControls } from "framer-motion"
import { useState } from "react"

const Intro = (props) => {

    // TODO - pass this in app and open it when clicked on logo
    const [ isOpened, setIsOpened ] = useState(true)
    const [ isDragged, setIsDragged ] = useState(false)
    const [ resized, setResized ] = useState(false)

    const containerSize = resized ? "80" : "50"
    const containerStyle = {
        height: containerSize + "vh",
        width: containerSize + "vw"
    }

    const dragControls = useDragControls()

    const startDrag = (e) => {
        dragControls.start(e)
    }

    const pointer = isDragged ? "grab" : "pointer"
    const pointerStyle = { cursor: pointer }

    return(
        <>
            {isOpened ? (
                <motion.div 
                    style={containerStyle}
                    className="intro-wrapper" 
                    onPointerDown={startDrag} 
                    drag dragControls={dragControls}
                    dragTransition={{ power: 0.5, bounceStiffness: 800, bounceDamping: 10 }}
                    dragConstraints={props.dragRef}
                    onDragStart={() => {setIsDragged(true)}}
                    onDragEnd={() => {setIsDragged(false)}}>
                        <div className="info-nav-wrapper" style={pointerStyle}>
                            <span className="info-title">intro bullshit</span>
                            <div className="info-nav">
                                <div className="info-nav-box" onClick={() => {setResized(false)}}>
                                    <div className="nav-icon"></div>
                                </div>
                                <div className="info-nav-box" onClick={() => {setResized(true)}}>
                                    <div className="nav-icon"></div>
                                    <div className="nav-icon plus-icon"></div>
                                </div>
                                <div className="info-nav-box" onClick={() => {setIsOpened(false)}}>
                                    <div className="nav-icon x-icon-1"></div>
                                    <div className="nav-icon x-icon-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="info-content-wrapper">
                            <div className="info-content">
                                <h1 className="welcome-text">✨Hello suckers✨</h1>
                            </div>
                        </div>
                    </motion.div>
            ) : null}
        </>
    )
}

export default Intro
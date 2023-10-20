import React, { useState } from 'react'

const DigitalWatch = () => {

    let time = new Date().toLocaleTimeString()

    const [currentTime, setCurrentTime] = useState(time)
const updateTime=()=>{
    time = new Date().toLocaleTimeString()
    setCurrentTime(time);
}
setInterval(updateTime,1000)
    return (
        <div className=''>
            <h1>Digital Watch</h1>
            <h1>
                {currentTime}
            </h1>
        </div>
    )
}

export default DigitalWatch
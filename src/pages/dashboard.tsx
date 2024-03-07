import { useState, useEffect } from 'react';
import BACKGROUND from '../assets/images/background.png'

const FIXED_HEIGHT = 3508
const FIXED_WIDTH = 4961

const STAKING_POS = {left: 28, top: 36, width:18, height: 11}

export default function Dashboard(){
    // const [windowSize, setWindowSize] = useState(getWindowSize())
    const [realWindowSize, setRealWindowSize] = useState(getRealWindowSize)
    useEffect(()=>{
        function handleWindowResize(){
            setRealWindowSize(getRealWindowSize());
        }
        window.addEventListener('resize', handleWindowResize)
        return ()=>{
          window.removeEventListener('resize', handleWindowResize)
        }
    },[])

    return (
        <div className='main-background'>
            <img style={{width: realWindowSize.realWidth+"px", height: realWindowSize.realHeight+"px"}} src ={BACKGROUND} alt="background"/>
            <a style={{
                left: STAKING_POS.left*realWindowSize.realWidth/100+"px",
                top: STAKING_POS.top*realWindowSize.realHeight/100+"px",
                width: STAKING_POS.width*realWindowSize.realWidth/100+"px",
                height: STAKING_POS.height*realWindowSize.realHeight/100+"px"
            }} href='https://staking.sagaratsalpha.xyz'></a>
        </div>
    )
}

function getWindowSize(){
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight}
}

function getRealWindowSize(){
    const {innerWidth, innerHeight} = window;
    const realWidth = innerWidth/innerHeight > FIXED_WIDTH / FIXED_HEIGHT ? innerWidth : innerHeight*(FIXED_WIDTH / FIXED_HEIGHT)
    const realHeight = innerWidth/innerHeight > FIXED_WIDTH / FIXED_HEIGHT ? innerWidth * (FIXED_HEIGHT / FIXED_WIDTH) : innerHeight
    console.log(realWidth, realHeight)
    return {realWidth, realHeight}
}
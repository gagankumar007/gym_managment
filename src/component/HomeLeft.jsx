import React from 'react'
import HomeTypeAnimation from './HomeTypeAnimation'
import { IoIosFitness } from "react-icons/io";
import DashboardImage from "../assets/Dashboard-img.png"

export default function HomeLeft() {
    return (
        <div className="left">
            <label>Muscle Foundry <IoIosFitness className="home-fit-icon"/></label>
            <div className="greet">
                <HomeTypeAnimation/>
            </div>
            <img src="https://e1.pxfuel.com/desktop-wallpaper/227/135/desktop-wallpaper-six-pack-group-with-60-items-natural-bodybuilding.jpg" alt="" className='dash-img-male'/>
            
        </div>
    )
}

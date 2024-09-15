import React, { useState } from 'react'
import HomeRight from '../component/HomeRight'
import HomeLeft from '../component/HomeLeft'
import Goals from '../component/Goals'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

export default function HomePage() {
    const [display, setDisplay] = useState(true);

    const handleDisplay = ()=>{
        setDisplay(!display);
    }

    return (
        <div>
            <main>
                <HomeLeft />
                {display ? <HomeRight handleDisplay={handleDisplay}/> : <Outlet />}
            </main>
            <Goals />
            <section className='motivation'>
                <div className='motivation-text'>
                    <div>
                        <h1>Break Out of Old Habits</h1>
                        <p>It’s never too late to start focusing on your health. It’s just a matter of getting started. With our no-obligation, contract-free memberships, it’s easy to get your healthy habits going without the pressure. Feel the best you ever have. It all starts here.</p>
                        <button>Join Now</button>
                    </div>
                </div>
                <div className='motivation-img'>
                    <img src="https://assets.website-files.com/6214787aae0f89e8420f3841/62147f826237bf1df2431153_Image%2015.png" alt="" />
                </div>
            </section>
            <section>
                
            </section>

            <Footer />
        </div>
    )
}

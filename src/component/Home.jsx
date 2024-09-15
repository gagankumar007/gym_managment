import React from 'react'
import Pricing from './Pricing'
import { useContext } from 'react';
import AuthContext from '../context/AuthenticationContext/auth.context';
import { Navigate } from 'react-router-dom';

export default function Home() {

    const { packageDetails } = useContext(AuthContext);
    console.log(packageDetails)

    const handleOnClick = ()=>{
        return <Navigate to="/dashboard" />
    }
  return (
    <div className='dash-home'>
        <section className='sec-1'>
            <div>
                <p>
                The only <span>impossible journey</span>  is the one you <span>never begin.</span> 
                </p>
                <button className='btn' onClick={handleOnClick}> Get Started</button>
            </div>
            
            <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8b0ce0e7016e080b40ff5_Video%402x.jpg" alt="" />
            
        </section>
        <section className='sec-2'>
            <h1>Who are We</h1>
            <div className='div-2'>
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8b15f06da4229b47e80b4_Video-1%402x.jpg" alt="" />
                <div>
                <p>At Muscle Foundry we believe Crossfitters come in all shapes and sizes, we are all on a journey towards our own personal best health and fitness levels. A journey that makes us better as athletes, friends and people. Our facility is unlike any other gym you’ve been to before.
                </p>
                
                <p>We pride ourselves not only in providing world class CrossFit training, but we also believe in creating a motivating and dynamic environment.</p>  
                    
                <p>We are the community dedicated to your human evolution, one workout at a time.Come in for a free trial class! Lose some body fat, gain some friends, and get fit for life!</p>
                </div>
                
            </div>
        </section>
        <section className='sec-3'>
            <h1>Meet the Team</h1>
            <div className="flex">
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8b76da529ab676fcb0265_alora-griffiths-069YKHTulsU-unsplash_72.jpg" alt="" />
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8b8b5b5b27bf65d20c839_glen-anthony--sLulnMYYZc-unsplash_72dpi.jpg" alt="" />
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8b81d53955f753d67f156_filip-mroz-C3Qs4MbxeKY-unsplash_72dpi.jpg" alt="" />
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8b98c06da4270567ecd56_luemen-carlson-to5OvWiyOUs-unsplash_72dpi.jpg" alt="" />
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8b92006da42174c7eca0a_jahir-martinez-YFJn6-GZVuw-unsplash_72dpi.jpg" alt="" />
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8ba61a529ab010bcb235f_sam-sabourin-PiFA6HIAfBA-unsplash_72dpi.jpg" alt="" />
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8bab2133808558270f77e_jesper-aggergaard-rA5aJvQ2l6g-unsplash_72dpi.jpg" alt="" />
                <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5de8b7c8133808394d70d876_bruce-mars-jY-GlbKeTDs-unsplash_72dpi.jpg" alt="" />
            </div>
        </section>

        <section className='sec-4'>
                <h1>MemberShip</h1>
                <div className='cards'>
                    <div className='card-1 card'>
                        <div className='card-div'>
                            <h1>{packageDetails[0].packageName}</h1>
                            <p>{packageDetails[0].price}</p>
                            <div>
                                <p>12 Classes Per Month</p>
                                <p>3 Classes Per Week</p>
                                <p>No joining fees</p>
                            </div>

                            <button>Join Now</button>
                        </div>
                    </div>
                    <div className='card-3 card'>
                        <div className='card-div'>
                            <h1>{packageDetails[2].packageName}</h1>
                            <p>{packageDetails[2].price}</p>
                            <div>
                                <p>20 Classes Per Month</p>
                                <p>5Classes Per Day</p>
                                <p>No joining fees</p>
                            </div>

                            <button>Join Now</button>
                        </div>
                    </div>
                    <div className='card-2 card'>
                        <div className='card-div'>
                            <h1>{packageDetails[1].packageName}</h1>
                            <p>{packageDetails[1].price}</p>
                            <div>
                                <p>Unlimited Classes Per Month</p>
                                <p>3 Classes Per Day</p>
                                <p>No joining fees</p>
                            </div>

                            <button>Join Now</button>
                        </div>
                    </div>

                </div>
            </section>
    </div>
  )
}

import { useContext } from 'react';
import AuthContext from '../context/AuthenticationContext/auth.context';
export default function Pricing() {    
    const { packageDetails } = useContext(AuthContext);
    console.log(packageDetails)
    

    return (
        <div className='dash-home'>
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
        </div >
    )
}

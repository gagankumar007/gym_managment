import { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthenticationContext/auth.context';

export default function Pricing() {
    const { packageDetails } = useContext(AuthContext);
    const [selectedOptions, setSelectedOptions] = useState({
        time: {},
        trainer: {}
    });
    const [trainers, setTrainers] = useState([]); // State for storing trainers

    // Ensure packageDetails is loaded and has at least 3 elements
    if (!packageDetails || packageDetails.length < 3) {
        return <p>Loading packages...</p>;
    }

    // Fetch trainers from API
    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await fetch('http://localhost:8181/user/get-all-trainer'); // Replace with actual API endpoint
                const data = await response.json();
                setTrainers(data.objectData); // Use the 'objectData' array from the response
            } catch (error) {
                console.error('Error fetching trainers:', error);
            }
        };

        fetchTrainers();
    }, []); // Empty dependency array ensures this runs once on mount

    // Handle dropdown changes
    const handleDropdownChange = (pkgName, type, event) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [type]: {
                ...prevState[type],
                [pkgName]: event.target.value
            }
        }));
    };

    return (
        <div className='dash-home'>
            <section className='sec-4'>
                <h1>Membership</h1>
                <div className='cards'>
                    {/* Map through packageDetails to dynamically create card elements */}
                    {packageDetails.map((pkg, index) => (
                        <div key={pkg.packageName} className={`card-${index + 1} card`}>
                            <div className='card-div'>
                                <h1>{pkg.packageName}</h1>
                                {/* Display price with ₹ symbol */}
                                <p>{`₹${pkg.price}`}</p>
                                <div>
                                    {/* Display classes per month and week/day based on availability */}
                                    <p>{pkg.classesPerMonth} Classes Per Month</p>
                                    <p>{pkg.classesPerWeek || pkg.classesPerDay} Classes Per Week</p>
                                    <p>No joining fees</p>
                                </div>
                                {/* Time selection dropdown */}
                                <div className='dropdown-container'>
                                    <label htmlFor={`time-dropdown-${pkg.packageName}`}>Select Time:</label>
                                    <select
                                        id={`time-dropdown-${pkg.packageName}`}
                                        value={selectedOptions.time[pkg.packageName] || ''}
                                        onChange={(event) => handleDropdownChange(pkg.packageName, 'time', event)}
                                    >
                                        <option value="">Select a time</option>
                                        <option value="morning">Morning</option>
                                        <option value="afternoon">Afternoon</option>
                                        <option value="evening">Evening</option>
                                    </select>
                                </div>
                                {/* Trainer selection dropdown */}
                                <div className='dropdown-container'>
                                    <label htmlFor={`trainer-dropdown-${pkg.packageName}`}>Select Trainer:</label>
                                    <select
                                        id={`trainer-dropdown-${pkg.packageName}`}
                                        value={selectedOptions.trainer[pkg.packageName] || ''}
                                        onChange={(event) => handleDropdownChange(pkg.packageName, 'trainer', event)}
                                    >
                                        <option value="">Select a trainer</option>
                                        {/* Populate trainers from API */}
                                        {trainers.map(trainer => (
                                            <option key={trainer.id} value={trainer.id}>
                                                {trainer.trainerName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Join button */}
                                <button>Join Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

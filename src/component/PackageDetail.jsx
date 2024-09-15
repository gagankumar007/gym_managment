import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PackageDetail = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch package data from the API
    axios.post('http://localhost:8181/user/get-package')
      .then(response => {
        setPackages(response.data.objectData);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={styles.loading}>Loading...</div>;
  if (error) return <div style={styles.error}>Error: {error.message}</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Package Details</h1>
      <div style={styles.packageGrid}>
        {packages.map(pkg => (
          <div key={pkg.id} style={styles.packageCard}>
            <h2 style={styles.packageTitle}>{pkg.packageName}</h2>
            <p style={styles.packageText}><strong>Price:</strong> {pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("https://media.istockphoto.com/id/1322158059/photo/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?s=612x612&w=0&k=20&c=CIdh6LPGwU6U6lbvKCdd7LcppidaYwcDawXJI-b0yGE=")', // Replace with actual image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: '2.5rem',
    marginBottom: '20px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  packageGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  packageCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  packageTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  packageText: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#555',
  },
  loading: {
    color: '#fff',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '50px',
  },
  error: {
    color: '#f00',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default PackageDetail;

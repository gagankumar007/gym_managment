import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.post('http://localhost:8181/user/get-admin-dashboard')
      .then(response => {
        setData(response.data);
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
      <h1 style={styles.header}>Admin Dashboard</h1>
      <div style={styles.cardGrid}>
        {data.map(item => (
          <div key={item.objectData.id} style={styles.card}>
            <h2 style={styles.cardTitle}>{item.objectData.name}</h2>
            <p style={styles.cardText}><strong>Email:</strong> {item.objectData.email}</p>
            <p style={styles.cardText}><strong>Age:</strong> {item.objectData.age}</p>
            <p style={styles.cardText}><strong>Address:</strong> {item.objectData.address || 'N/A'}</p>
            <p style={styles.cardText}><strong>Contact:</strong> {item.objectData.contact || 'N/A'}</p>
            <p style={styles.cardText}><strong>Role:</strong> {item.objectData.role || 'N/A'}</p>
            {item.bookingData.length > 0 && (
              <>
                <h3 style={styles.subTitle}>Booking Details</h3>
                <p style={styles.cardText}><strong>Package Name:</strong> {item.packageData?.packageName || 'N/A'}</p>
                <p style={styles.cardText}><strong>Price:</strong> {item.packageData?.price || 'N/A'}</p>
                <p style={styles.cardText}><strong>Booking Date:</strong> {item.bookingData[0].bookingDate}</p>
                <p style={styles.cardText}><strong>Slot Time:</strong> {item.bookingData[0].slotTime}</p>
                <p style={styles.cardText}><strong>Trainer:</strong> {item.trainer?.trainerName || 'N/A'}</p>
              </>
            )}
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
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
    },
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  cardText: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#555',
  },
  subTitle: {
    fontSize: '1.2rem',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#333',
  },
  loading: {
    color: '#fff',
    textAlign: 'center',
    marginTop: '50px',
  },
  error: {
    color: '#ff0000',
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Trainer() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8181/user/get-all-trainer')
      .then(response => {
        setTrainers(response.data.objectData);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch trainer data.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Trainers</h1>
      <div style={styles.cardsContainer}>
        {trainers.map(trainer => (
          <div key={trainer.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{trainer.trainerName}</h3>
            <p style={styles.cardText}>Certification: <span style={styles.cardHighlight}>{trainer.trainnerCrfct}</span></p>
            <p style={styles.cardText}>Experience: <span style={styles.cardHighlight}>{trainer.trainerExp}</span></p>
            <p style={styles.cardText}>Type: <span style={styles.cardHighlight}>{trainer.trainnerType}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg")',
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
    marginBottom: '30px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
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
  cardHighlight: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  loading: {
    color: '#fff',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '20%',
  },
  error: {
    color: '#ff4d4d',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '20%',
  },
};

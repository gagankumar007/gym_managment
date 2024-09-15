import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminSettings() {
  const navigate = useNavigate();

  const cardStyles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerhDb_cP8YcKiq39beydxlENJ_uGijfp5W8rzoFDJ-uUGSd_3pakcXvVr33sFbMmPEp8&usqp=CAU")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      width: '280px',
      margin: '15px',
      padding: '20px',
      textAlign: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: '700',
      marginBottom: '10px',
      color: '#333',
    },
    cardContent: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '20px',
    },
    button: {
      padding: '12px 20px',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      fontSize: '16px',
      fontWeight: '500',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    buttonActive: {
      transform: 'scale(0.98)',
    },
    '@media (max-width: 768px)': {
      container: {
        flexDirection: 'column',
      },
      card: {
        width: '90%',
        margin: '10px auto',
      },
    },
  };

  return (
    <div style={cardStyles.container}>
      <div
        style={cardStyles.card}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h2 style={cardStyles.cardTitle}>Trainer Info</h2>
        <p style={cardStyles.cardContent}>Manage and view details of trainers.</p>
        <button
          style={cardStyles.button}
          onClick={() => navigate('/trainer')}
          onMouseDown={(e) => e.currentTarget.style.transform = cardStyles.buttonActive.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = cardStyles.button.transform}
          aria-label="View Trainer Info"
        >
          View Trainer Info
        </button>
      </div>

      <div
        style={cardStyles.card}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h2 style={cardStyles.cardTitle}>User Info</h2>
        <p style={cardStyles.cardContent}>Manage and view user details.</p>
        <button
          style={cardStyles.button}
          onClick={() => navigate('/userinfo')}
          onMouseDown={(e) => e.currentTarget.style.transform = cardStyles.buttonActive.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = cardStyles.button.transform}
          aria-label="View User Info"
        >
          View User Info
        </button>
      </div>

      <div
        style={cardStyles.card}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h2 style={cardStyles.cardTitle}>Package Details</h2>
        <p style={cardStyles.cardContent}>Manage and view package details.</p>
        <button
          style={cardStyles.button}
          onClick={() => navigate('/package')}
          onMouseDown={(e) => e.currentTarget.style.transform = cardStyles.buttonActive.transform}
          onMouseUp={(e) => e.currentTarget.style.transform = cardStyles.button.transform}
          aria-label="View Package Details"
        >
          View Package Details
        </button>
      </div>
    </div>
  );
}

import React from "react";

function Cancel() {
  return (
    <div>
           <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}> Payment Canceled</h1>
        <p style={styles.message}>Your payment was not completed. Try again.</p>
        <button style={styles.button} onClick={() => window.location.href = "/client/your-quote"}>Go Back</button>
      </div>
    </div>
    
    </div>
  );
}

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
    },
    card: {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      textAlign: "center",
      maxWidth: "400px",
      animation: "fadeIn 4s ease-in-out",
    },
    title: {
      color: "red",
      fontSize: "2rem",
    },
    message: {
      color: "#555",
      fontSize: "1.2rem",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#003366",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
    },
  };

export default Cancel;

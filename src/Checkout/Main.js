import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51R32lXEzHZXHb7T05F7iW6VZBu3wjro3SxtkzRhNGlamDjakG7rH974D3lhBvoKVF2m3MWXz2IiyVz10y3CP5zE300yOTsTEDl"); // Use your actual Stripe public key

const Main = () => {
  const [bidId, setBidId] = useState(""); // Store bid ID input
  const [stripe, setStripe] = useState(null);

  const accessToken = localStorage.getItem("access_token");

  // Ensure Stripe is initialized before calling it
  useEffect(() => {
    async function loadStripeInstance() {
      const stripeInstance = await stripePromise;
      setStripe(stripeInstance);
    }
    loadStripeInstance();
  }, []);

  const handleCheckout = async () => {
    if (!bidId) {
      alert("Please enter a Bid ID");
      return;
    }
    
    try {
      const response = await fetch(`https://backend.homecert.ie/api/checkout-session/${bidId}/`, {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data = await response.json();
      console.log("API Response:", data); // ✅ Debugging response

      if (data.checkout_session_id) {
        if (!stripe) {
          console.error("Stripe is not initialized yet.");
          return;
        }
        console.log("Redirecting to Stripe Checkout...");
        await stripe.redirectToCheckout({ sessionId: data.checkout_session_id });
      } else {
        console.error("Error: No session ID returned");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  return (
    <div>
      <h2>Enter Bid ID to Checkout</h2>
      <input
        type="text"
        placeholder="Enter Bid ID"
        value={bidId}
        onChange={(e) => setBidId(e.target.value)}
      />
      <button onClick={handleCheckout} disabled={!stripe}>Proceed to Payment</button>
    </div>
  );
};

export default Main;

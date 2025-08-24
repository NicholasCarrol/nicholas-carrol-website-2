import React, { useState } from 'react';


export default function NewsLetter() {
    console.log("Newsletter component loaded");
 }

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    try {
      const response = await fetch('https://api.beehiiv.com/v1/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_BEEHIIV_API_KEY`, // Replace with your actual API key
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Subscription successful!');
        setEmail(''); // Clear input
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      setMessage('Failed to connect to the server.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
};
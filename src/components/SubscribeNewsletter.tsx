import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const apiKey:any = process.env.REACT_APP_API_KEY;
  // alert(apiKey)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email address
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      // Perform API request to submit the form data to the backend
      const response = await fetch(`${apiUrl}/subscribe/`, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for subscribing!');
        setErrorMessage(null);
      } else {
        const data = await response.json();
        if (response.status === 409 && data.message === 'Already subscribed') {
          setErrorMessage('You are already subscribed to our newsletter.');
        } else {
          setErrorMessage(data.message || 'Something went wrong. Please try again.');
        }
        setSuccessMessage(null);
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setSuccessMessage(null);
    }

    // Reset form fields
    setEmail('');
  };

  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="bg-gray-800 py-8 px-4 my-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-center text-white mb-8">
          Stay updated with the latest news, events, and promotions from the Electrical Exhibition.
        </p>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-medium">
              Subscribe
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 mt-2 bg-red-100 py-1 px-3 rounded-md">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 mt-2 bg-green-100 py-1 px-3 rounded-md">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;

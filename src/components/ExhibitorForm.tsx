import React, { useState } from "react";

const ExhibitorForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    contact_number: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const apiKey: any = process.env.REACT_APP_API_KEY;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Form validation
    const { name, company_name, email, contact_number } = formData;
    if (!name || !company_name || !email || !contact_number) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Submit the form to the backend
    try {
      setIsSubmitting(true);

      const response = await fetch(`${apiUrl}/exhibitors/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form submission success
        setSuccessMessage('Form submitted successfully!');
 
        setFormData({
          name: "",
          company_name: "",
          email: "",
          contact_number: "",
        });
        setErrorMessage("");
      } else {
        // Form submission error
        const errorData = await response.json();
        
        if ( errorData) {
            const errorMessages:any = Object.values(errorData).flat();
            setErrorMessage(errorMessages[0] || 'Something went wrong. Please try again.');
          } else {
            setErrorMessage('Something went wrong. Please try again.');
          }
          setSuccessMessage('');
      }

    } catch (error) {
     
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-800 font-semibold mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="company_name"
          className="block text-gray-800 font-semibold mb-1"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-800 font-semibold mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-800 font-semibold mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="contact_number"
          value={formData.contact_number}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      {errorMessage && <p className="text-red-500  bg-red-100 p-4 mb-4 rounded-md">{errorMessage}</p>}
      {successMessage && (
  <p className="text-green-500 bg-green-100 p-4 mb-4 rounded-md">{successMessage}</p>
)}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ExhibitorForm;

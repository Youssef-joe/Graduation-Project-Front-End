"use client";
import '../../../styles/globals.css'
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your actual form submission logic
    try {
      const response = await fetch('/api/contact', { // Update this URL when implementing the back-end
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setErrorMessage('There was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form mx-auto p-5">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {successMessage && <p className="text-green-600">{successMessage}</p>}
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <label htmlFor="name" className="flex flex-col">
          <span className="font-medium">Name</span>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          />
        </label>
        <label htmlFor="email" className="flex flex-col">
          <span className="font-medium">Email</span>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          />
        </label>
        <label htmlFor="message" className="flex flex-col">
          <span className="font-medium">Message</span>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 rounded p-2"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className={`bg-red-900 text-white p-2 rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React from "react";
import LocationMap from "./LocationMap";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>123 Main Street, City, Country</p>
            <div className="mt-4">
              {/* Embedded map */}
              {/* <iframe
                title="Map Location"
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1630918714164!2d38.7787719034883!3d9.004099599427894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8507daa5eac3%3A0x43d941c2419a94ed!2sAtlas%20International%20Hotel!5e0!3m2!1sen!2sde!4v1688794484299!5m2!1sen!2sde"
              ></iframe> */}
            </div>
              <LocationMap />
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
            <p className="text-gray-700 mb-4">
              We are glad to hear from you. Please fill out the form below:
            </p>
            <form>
              {/* Form fields */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

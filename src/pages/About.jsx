import React from 'react';
import { FaRegSmileBeam, FaUsers, FaTools, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';

const About = () => {
  return (
    <div>
<Header/>
    <div className="container mx-auto px-4 py-12">
      {/* About Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">Learn more about our team, services, and how we can help you succeed.</p>
      </header>

      {/* Our Mission Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mx-auto max-w-3xl">
          We are committed to providing high-quality courses and learning experiences that will help students reach their
          full potential. Our goal is to create a positive and inclusive learning environment.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-500 text-center mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center bg-white shadow-lg rounded-lg p-6">
            <FaUsers className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">John Doe</h3>
            <p className="text-gray-600">Lead Instructor</p>
          </div>
          <div className="text-center bg-white shadow-lg rounded-lg p-6">
            <FaUsers className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">Jane Smith</h3>
            <p className="text-gray-600">Course Designer</p>
          </div>
          <div className="text-center bg-white shadow-lg rounded-lg p-6">
            <FaUsers className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">Mark Johnson</h3>
            <p className="text-gray-600">Developer</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 p-8 mb-16 rounded-lg">
        <h2 className="text-3xl font-semibold text-blue-500 text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center bg-white shadow-lg rounded-lg p-6">
            <FaTools className="text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">Interactive Learning</h3>
            <p className="text-gray-600">Engaging, hands-on courses to enhance your skills.</p>
          </div>
          <div className="text-center bg-white shadow-lg rounded-lg p-6">
            <FaRegSmileBeam className="text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">Expert Instructors</h3>
            <p className="text-gray-600">Learn from the best with industry professionals.</p>
          </div>
          <div className="text-center bg-white shadow-lg rounded-lg p-6">
            <FaUsers className="text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">Community Support</h3>
            <p className="text-gray-600">Join a supportive community of learners and mentors.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Contact Us</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex items-center">
            <FaPhoneAlt className="text-3xl text-blue-500 mr-3" />
            <p className="text-lg text-gray-600">+1 234 567 890</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-3xl text-blue-500 mr-3" />
            <p className="text-lg text-gray-600">info@ourcompany.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center">
        <p className="text-gray-500">&copy; 2025 Our Company. All Rights Reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default About;

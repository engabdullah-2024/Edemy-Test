import React from 'react';
import { FaBook, FaChalkboardTeacher, FaClock, FaTags, FaStar } from 'react-icons/fa';
import Header from '../components/Header';

const Courses = () => {
  return (
    <div>
<Header/>
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Explore Our Courses</h1>
        <p className="text-lg text-gray-600">Choose from a variety of courses to expand your knowledge and skills.</p>
      </header>

      {/* Course List Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaBook className="text-blue-500 text-2xl mr-2" />
            <h2 className="text-2xl font-semibold text-blue-500">Web Development</h2>
          </div>
          <p className="text-gray-600 mb-4">Learn full-stack web development with hands-on projects.</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <FaClock className="mr-1 text-blue-500" />
              <span>3 months</span>
            </div>
            <div className="flex items-center">
              <FaTags className="mr-1 text-orange-500" />
              <span>Free</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaBook className="text-blue-500 text-2xl mr-2" />
            <h2 className="text-2xl font-semibold text-blue-500">Data Science</h2>
          </div>
          <p className="text-gray-600 mb-4">Master the art of data analysis and machine learning.</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <FaClock className="mr-1 text-blue-500" />
              <span>4 months</span>
            </div>
            <div className="flex items-center">
              <FaTags className="mr-1 text-orange-500" />
              <span>$199</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center mb-4">
            <FaBook className="text-blue-500 text-2xl mr-2" />
            <h2 className="text-2xl font-semibold text-blue-500">UI/UX Design</h2>
          </div>
          <p className="text-gray-600 mb-4">Learn to design intuitive user interfaces and seamless experiences.</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <FaClock className="mr-1 text-blue-500" />
              <span>2 months</span>
            </div>
            <div className="flex items-center">
              <FaTags className="mr-1 text-orange-500" />
              <span>$129</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Info Section */}
      <section className="mt-16 bg-gray-100 py-8">
        <h2 className="text-3xl text-center font-bold text-blue-500 mb-4">Meet Your Instructors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">John Doe</h3>
            <p className="text-gray-600">Web Development Expert</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">Jane Smith</h3>
            <p className="text-gray-600">Data Science Specialist</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">Mark Johnson</h3>
            <p className="text-gray-600">UI/UX Design Guru</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">What Our Students Say</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-lg rounded-lg p-6 w-72">
            <FaStar className="text-yellow-500 text-2xl mb-2" />
            <p className="text-gray-600 mb-2">"The Web Development course was excellent! I learned so much and built amazing projects."</p>
            <p className="font-semibold text-gray-800">Alice Johnson</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-72">
            <FaStar className="text-yellow-500 text-2xl mb-2" />
            <p className="text-gray-600 mb-2">"The Data Science course gave me the skills to start my career in data analysis. Highly recommend!"</p>
            <p className="font-semibold text-gray-800">Bob Brown</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Courses;

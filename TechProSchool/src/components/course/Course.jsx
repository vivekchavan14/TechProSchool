import React from 'react';
import PropTypes from 'prop-types';
import './Course.css'; 

const Course = ({ title, image, price }) => {
  return (
    <div className="course">
      <img src={image} alt={title} className="course-image" />
      <h3 className="course-title">{title}</h3>
      <p className="course-price">${price}</p>
      <button className="enroll-button" onClick={()=>{ alert(`Enrolled to Course ${title}  [Should be redirected to razorpay or any other payment provider]`)}}>Enroll</button>
    </div>
  );
};

Course.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Course;

import  { useState } from 'react';
import Course from '../course/Course';
import './CourseList.css'; 

const CourseList = () => {
  const initialCourses = [
    {
      id: 1,
      title: 'Web Development',
      image: 'https://via.placeholder.com/150',
      price: 49.99,
    },
    {
      id: 2,
      title: 'ML & AI',
      image: 'https://via.placeholder.com/150',
      price: 59.99,
    },
    {
      id: 3,
      title: 'DS & Algo',
      image: 'https://via.placeholder.com/150',
      price: 39.99,
    },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredCourses = initialCourses.filter(course =>
      course.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div className="course-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Courses..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="courses-container">
        {courses.map(course => (
          <Course
            key={course.id}
            title={course.title}
            image={course.image}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;

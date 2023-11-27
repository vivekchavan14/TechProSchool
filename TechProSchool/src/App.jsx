import React from 'react';
import CourseList from './components/courseList/CourseList.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <h1>Available Courses</h1>
        <CourseList />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import './About.css';

export const About = () => {
  return (
    <>
      <div className="background"></div>
      <div className="content">
        <h2 className="gradient-text">About My Todos List</h2>
        <p>
          Welcome to the My Todos List app! This application is designed to help you manage your daily tasks and stay organized. With My Todos List, you can easily add, delete, and keep track of your todos in a simple and efficient manner.
        </p>
        <h3 className="gradient-text">Features</h3>
        <ul>
          <li>Add new todos with a title and description</li>
          <li>Delete todos that you have completed or no longer need</li>
          <li>View all your todos in one place</li>
          <li>Persistent storage using local storage, so your todos are saved even if you close the browser</li>
        </ul>
        <h3 className="gradient-text">How to Use</h3>
        <p>
          To get started, simply add a new todo by filling out the title and description fields and clicking the "Add Todo" button. Your todos will be displayed in a list, where you can easily delete them once they are completed.
        </p>
        <h3 className="gradient-text">Technologies Used</h3>
        <ul>
          <li>React: A JavaScript library for building user interfaces</li>
          <li>React Router: A library for routing in React applications</li>
          <li>Local Storage: A web storage API for persisting data in the browser</li>
        </ul>
        <p>
          We hope you find this app useful for managing your tasks and staying organized. Thank you for using My Todos List!
        </p>
      </div>
    </>
  );
};

export default About;

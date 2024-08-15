import React from 'react'
import './Footer.css'; // Import the CSS file
export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "80vh",
    width: "100%",
    border: "2px solid red",
    backgroundColor: "#ffffff", // Dark background color
    color: "#343a40", // White text color
    padding: "10px 0" // Padding for top and bottom
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com

      </p>
    </footer>
  )
}

export default Footer

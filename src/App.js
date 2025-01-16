import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios from 'axios'; // Axios import
import './App.css'; // Make sure to create and import the CSS for styling

function App() {
  const [formData, setFormData] = useState({
    Age: '',
    Income: '',
    FamilySize: '',
    HotelStar: '',
    TravelFrequency: '',
    PreviousBookings: '',
    VacationSpendLastYear: '',
    ChildrenCount: '',
    StayDuration: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation: ensure all fields are filled and are numbers
    for (let field in formData) {
      if (formData[field] === '' || isNaN(formData[field])) {
        setError('Please fill all fields with valid numbers.');
        return;
      }
    }
    
    setError(null); // Clear any previous errors
    try {
      // Make the POST request to the FastAPI backend
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Set the prediction response
      setPrediction(response.data.BookingStatus); // Assuming API returns "BookingStatus"
    } catch (error) {
      console.error("Error:", error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center">AI Booking Prediction</h1>

      <form onSubmit={handleSubmit} className="mx-auto col-md-6">
        <div className="form-group">
          {/* Form Inputs */}
          <input type="number" name="Age" className="form-control mb-3" placeholder="Age" value={formData.Age} onChange={handleChange} />
          <input type="number" name="Income" className="form-control mb-3" placeholder="Income" value={formData.Income} onChange={handleChange} />
          <input type="number" name="FamilySize" className="form-control mb-3" placeholder="Family Size" value={formData.FamilySize} onChange={handleChange} />
          <input type="number" name="HotelStar" className="form-control mb-3" placeholder="Hotel Star" value={formData.HotelStar} onChange={handleChange} />
          <input type="number" name="TravelFrequency" className="form-control mb-3" placeholder="Travel Frequency" value={formData.TravelFrequency} onChange={handleChange} />
          <input type="number" name="PreviousBookings" className="form-control mb-3" placeholder="Previous Bookings" value={formData.PreviousBookings} onChange={handleChange} />
          <input type="number" name="VacationSpendLastYear" className="form-control mb-3" placeholder="Vacation Spend Last Year" value={formData.VacationSpendLastYear} onChange={handleChange} />
          <input type="number" name="ChildrenCount" className="form-control mb-3" placeholder="Children Count" value={formData.ChildrenCount} onChange={handleChange} />
          <input type="number" name="StayDuration" className="form-control mb-3" placeholder="Stay Duration" value={formData.StayDuration} onChange={handleChange} />

          <button type="submit" className="btn btn-primary w-100">Predict</button>
        </div>
      </form>

      {/* Show error message if there's one */}
      {error && (
        <div className="text-center mt-3 text-danger">
          <h4>{error}</h4>
        </div>
      )}

      {/* Display prediction if available */}
      {prediction !== null && (
        <div className="text-center mt-3">
          <h2>{prediction === 1 ? 'Booked' : 'Not Booked'}</h2>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p className="footer-text">
            Designed by <span className="signature">Kevin Özşimşek</span> - AI Project
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

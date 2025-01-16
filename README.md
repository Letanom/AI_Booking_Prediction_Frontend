AI Booking Prediction Frontend
This repository contains the frontend part of the AI Booking Prediction project, which is designed to help businesses predict whether a user is likely to book based on their input. The frontend is built with ReactJS for the user interface and communicates with a backend FastAPI service to get the predictions.

Key Features
User Input Form: A form where users enter their details such as age, income, family size, preferences for hotels, and frequency of travel to assess the likelihood of a booking.
AI-Powered Prediction: The frontend communicates with the backend to send the collected user data, which then uses machine learning to make the booking prediction.
Responsive and Modern Design: The frontend uses Bootstrap to ensure a responsive, mobile-friendly design that's consistent across all device sizes.
Real-Time Feedback: After submitting the data, users are immediately shown the prediction on whether they're likely to make a booking or not.
Technologies Used
Frontend: ReactJS, Bootstrap
Backend Communication: Axios for making HTTP requests to the FastAPI server.
Prediction Source: FastAPI backend (assumed to be connected with the AI model for predictions).
Prerequisites
Before running the project locally, make sure you have these tools installed:

Node.js (version 14 or later)
npm (Node Package Manager)
A running FastAPI backend that accepts the prediction requests
Setup Instructions
To get the project running locally, follow the steps below:

Clone the repository to your local machine:

git clone https://github.com/Letanom/AI_Booking_Prediction_Frontend.git

cd AI_Booking_Prediction_Frontend

npm install


The app will run on http://localhost:3000

Usage
Once the app is running, you'll see a form where you can input your data. After entering the required information, you can submit the form to get a prediction. The result will indicate whether the booking is likely to be made or not.
 

AI Booking Prediction Frontend

This repository contains the frontend part of the AI Booking Prediction project, designed to help businesses predict whether a user is likely to book based on their input.

 The frontend is built with ReactJS for the user interface and communicates with a backend FastAPI service to get the predictions.

Key Features
User Input Form: A form where users enter their details such as age, income, family size, preferences for hotels, and frequency of travel to assess the likelihood of a booking.

AI-Powered Prediction: The frontend sends the collected user data to the backend, which uses machine learning to make the booking prediction.

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

git clone https://github.com/Letanom/AI_Booking_Prediction_Frontend.git

cd AI_Booking_Prediction_Frontendnpm install

npm install
npm start

This app launch at http://localhost:3000.

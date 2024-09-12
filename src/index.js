// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import App from './App';

const container = document.getElementById('root');  // Get the root DOM element
const root = createRoot(container);  // Create the root
root.render(<App />);  // Render the App component

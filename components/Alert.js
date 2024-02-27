"use client"
import React, { useState, useEffect } from 'react';

const AlertsDisplay = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch alerts from your API
    fetch('/api/alerts')
      .then((response) => response.json())
      .then((data) => {
        setAlerts(data);
      })
      .catch((error) => {
        console.error('Error fetching alerts:', error);
      });
  }); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>TradingView Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>
            <p>{alert.message}</p>
            <small>Received on: {new Date(alert.date).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsDisplay;

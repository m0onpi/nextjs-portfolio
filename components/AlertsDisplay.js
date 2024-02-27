"use client"
import React, { useState, useEffect } from 'react';

const AlertsDisplay = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('/api/alerts')
      .then((response) => response.json())
      .then(setAlerts)
      .catch((error) => console.error('Error fetching alerts:', error));
  }, []);

  return (
    <div>
      <h2>TradingView Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id}>
            <p>{alert.message}</p>
            <small>Received on: {new Date(alert.date).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsDisplay;

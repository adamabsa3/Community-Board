import React from 'react';
import EventList from './components/EventList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Community Events Board</h1>
      <EventList />
    </div>
  );
};

export default App;

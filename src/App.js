import React from 'react';
import './App.css';
import PrimeNumberComponent from './PrimeNumber';
import DownloadURLComponent from './DownloadURL';
function App() {
  return (
    <div className="App">
      <h2>Find 100th Prime number. change the no in the state to get any another number.</h2>
      <PrimeNumberComponent />
      <h6>-----------------------------------------------------------------</h6>
      <h2>Local storage </h2>
      <h5>Used List of public github repositories API. the number input signifies the The integer ID of the last repository that you've seen.</h5>
      <h5>To prevent adding too much data in the localstorage, only the name of the repositories are stored in the localstorage</h5>
      <h5>If the data for a specific number is already fetched it will not call the API.</h5>
      <DownloadURLComponent />
    </div>
  );
}

export default App;

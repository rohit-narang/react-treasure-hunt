import React from 'react';
import './App.css';
import World from './views/World';
import backgroundLook from './views/World/Maps/back3.jpg'
function App() {
  return (
    <>
    <style>
                {`
                        body > div,
                        body > div > div,
                        body > div > div.myBack {
                            height: 100%
                        }
                        `}
            </style>
    <div className = 'myBack' style={{ backgroundImage: `url('${backgroundLook}')`, backgroundSize: 'cover', minHeight: '100%' }}>
    <World />
    </div>
    </>
  );
}

export default App;

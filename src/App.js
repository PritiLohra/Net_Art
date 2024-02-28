import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" alt="C.R.I. PUMPS Logo" className="App-logo" />
        <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018</h3>
        <h4>for the 4th time</h4>
      </header>

      <section className="Content">
        <div className="Image Image-left">
          <img src="/1.png" alt="Image 1" width="400" height="300" />
        </div>
        <div className="Text centre-align">
          <p>
            C.R.I.'s energy-efficient products are well recognized by various Government Institutions, as trustworthy
            products for various projects across the globe to save energy. C.R.I. is the highest contributor in the
            country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps
            with 5 Star rated energy-efficient smart pumps with IoT enabled control panel.
          </p>
        </div>
        <div className="Image Image-right">
          <img src="/2.png" alt="Image 2" width="500" height="350" />
        </div>

        <p>
          Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint
          Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
          Raj Kumar Singh, Honorable Minister of State.
        </p>

        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN
          9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
      </section>

      <div className="Image-grid">
        <div className="Image Image-center">
          <img src="/3.png" alt="Image 3" width="900" height="400" />
          <h2>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</h2>
          <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          <ul>
            <li>CHEMICALS & PROCESS</li>
            <li>POWER</li>

          </ul>
        </div>
      </div>

      <footer>
        <p>Toll Free 1800 200 1234</p>
        <p>www.facebook.com/cripumps</p>
        <p>www.crigroups.com</p>

      </footer>
    </div>
  );
}

export default App;


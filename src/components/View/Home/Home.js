import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home" id="home">
        <div className="text-3xl font-bold">
        <h1>
            I am <span className="text-rose-600">Chima Ikegbulam</span>.
        </h1>
        <h1>
           A Frontend-Developer ready to turn ideas <br/>into reality.
        </h1>
        </div>
        <div className="flex flex-row gap-3 mt-3 text-white">
        <button class="bg-rose-600 hover:bg-rose-400 rounded p-2">Click to find out more</button>
        <button class="bg-rose-600 hover:bg-rose-400 rounded p-2">Contact me</button>
        </div>
    </div>
  )
}

export default Home;
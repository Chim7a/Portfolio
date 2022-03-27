import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col p-20" id="home">
        <div className="text-3xl font-bold">
        <h1 className="">
            I am <span className="text-rose-600">Chima Ikegbulam</span>.
        </h1>
        <h1 className="">
           A Frontend-Developer ready to turn visions <br/>into reality.
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
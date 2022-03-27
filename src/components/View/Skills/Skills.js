import React from 'react';


const Skills = () => {
  return (
    <div className="flex flex-col bg-slate-300 p-5" id="skills">
    <div className="text-2xl font-bold text-center">
        <h1>My Dev. Skills</h1>
    </div>
    <div className="flex flex-row justify-center gap-5 m-10">
        <img src="https://i.stack.imgur.com/PgcSR.png" height="auto" width="80px" alt="HTML" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63s_TKNEbSDyCnpko2aIn2c4cCiuvh1chFaxyXPpChmvugRWHqyje2cMi-d0FuEYkYu8&usqp=CAU" height="auto" width="90px" alt="CSS" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFFjtYIl7BYgTkanKFI__Vaqbzr5JkKjVxwAmJcdXceW16zqKjLfCa3Xj2BrnorHcLd4&usqp=CAU" height="auto" width="90px" alt="React" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" height="auto" width="100px" alt="Redux" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnWjJ6NuYgr0NQgHVzq55uPhGa7bbGsFU3_Is8hMaCZHoFw3rctcRT2RSGPNCfSK5Q4g&usqp=CAU" height="auto" width="90px" alt="Bootstrap" />
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--zKQJKp9C--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/1jqa96mtdymq7ydgjqf1.png" height="auto" width="90px" alt="Tailwind" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" height="auto" width="80px" alt="Javascript" />    
    
    </div>
        </div>
  )
}

export default Skills
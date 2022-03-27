import React from 'react';
import Tilt from 'react-parallax-tilt';


const About = () => {
  return (
    <div className="sm:flex sm:flex-col lg:flex lg:flex-row bg-rose-600 text-white pt-5 pb-5 lg:pt-5 lg:pb-5 lg:space-x-20" id="about">
            <div className="text-center">
            <span className="text-3xl font-bold">ABOUT ME</span>
            </div>
        <div className="lg:m-5">
        <div className="sm:flex sm:flex-col lg:flex md:flex ">
        
        <Tilt>
        <img className="" src="chima.jpg" height="auto" width="250px" alt="Chima'simage" />
        </Tilt>
        <p className="p-10 text-l"> Lorem ipsum dolor sit ameugfuyuyt, consectetur adipiscing elit. Sed id magna ac urna lobortis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ac risus massa. Duis sodales lobortis ex sed rutrum. Pellentesque bibendum justo fringilla, ultrices nisl nec, accumsan massa. In ultrices vel libero a efficitur. Etiam tempor, justo non viverra iaculis, metus enim commodo turpis, nec efficitur mi nibh placerat elit. Quisque ullamcorper, felis vel dapibus posuere, lacus tellus vestibulum lorem, quis lacinia lorem tortor eu tortor. In congue finibus nunc, ut auctor ex. Sed eget ipsum ut ex rhoncus ornare. Maecenas fringilla neque lorem, eget euismod massa ultricies vel. Integer non augue mauris. Nulla facilisi.

            Mauris ullamcorper venenatis diam, tristique semper erat ornare et. Pellentesque tempor nec est non cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed auctor scelerisque orci, dictum ornare nisi. Proin vitae vulputate eros. Morbi blandit dapibus nunc, ut eleifend diam tempor nec. Sed scelerisque diam non sapien egestas dictum. Donec tempus vestibulum orci ut fringilla. Vivamus nec enim justo. Cras semper nisl metus, nec volutpat leo lacinia nec. </p>

        </div>        
        </div>
    </div>
  )
}

export default About;
import React from 'react';
import Contact from '../components/Contact'; // Adjust the import path based on your project structure
import Footer from '../components/Footer'; // Correctly import Footer component
const abgvideo = '/images/abgvideo.mp4';
const logo ='/images/logo.png';

export default function About() {
  return (
    <div>
        {/* Background video */}
        <video 
                src={abgvideo} 
                className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                autoPlay 
                loop 
                playsInline
            ></video>
      <section className="my-8 bg-black bg-opacity-20 dark:bg-gray-100 dark:bg-opacity-50 text-gray-100 dark:text-gray-800">
      <p className="px-6 py-2 pirate text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-gray-300 dark:text-gray-700">
            "ADHI COLLEGE OF ENGINEERING AND TECHNOLOGY"
          </p>
        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
          
        <img 
            src={logo} 
            alt='logo' 
            className="w-90 h-40" // Adjusted image size class
          />
            
          
            <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
            <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
          
            <h4 className="blueline text-5xl -mt-1.5 font-bold text-white text-center">Department Of Artificial Intelligence and Data Science</h4>


          <p className="text-gray-300 dark:text-gray-700" style={{ fontSize: '18px' }}>
            Intelista is an annual tech fest organized by the Department of Artificial Intelligence and Data Science at Adhi College of Engineering and Technology. Taking place on September 13, 2024, this National Level Technical Symposium invites students to explore a variety of activities and challenges that combine fun with cutting-edge technology.

            Participants will engage with industry experts, attend workshops, and showcase their skills in exciting competitions. Inspired by the Trojan Horse, Intelista embodies innovation and strategic thinking, providing a unique platform to connect with like-minded individuals and learn about the latest advancements in AI and data science. Join us to unlock new opportunities and shape a future full of possibilities!
          </p>
        </div>
      </section>

      <section className="my-8 bg-black bg-opacity-10 dark:bg-gray-100 dark:bg-opacity-10 text-gray-100 dark:text-gray-800">
        <Contact />
      </section>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

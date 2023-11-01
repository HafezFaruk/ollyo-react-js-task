import React from 'react';

const Footer = () => {


  return (
    <div className="bg-gray-900 mt-[100px] pt-[60px] px-5">
      <footer className="container mx-auto">
        <div className="px-5 sm:px-0 text-white">
          <div className="  flex-col justify-center items-center text-center border-b-2 border-white ">
            <h2 className="text-3xl sm:text-4xl md:text-[57px] lg:leading-[70px]  font-bold mb-10">Let's work together</h2>
            <button className="px-8 py-3 text-black font-bold text-[20px] bg-white text-center rounded-full sm:mb-[127px] mb-16 hover:bg-black hover:text-white  transition-all duration-500 ease-in-out">Get in touch</button>
          </div>
          <div className="mt-[65px] ">

            <div className="flex flex-wrap justify-between gap-9 mb-20">
              <a className="font-bold text-xl lg:text-5xl" href="/" rel="noopener noreferrer">
                DVELOP.ME
              </a>


              <div>
                <p className="font-medium text-xl mb-5">Location</p>
                <div className="space-y-2 text-lg font-normal">

                  <p>Bangladesh</p>
                  <p> Burichang </p>
                  <p>Cumilla</p>
                </div>
              </div>


              <div >
                <p className="font-medium text-xl mb-5">Page</p>
                <ul className="flex flex-col gap-y-2 text-lg font-normal">
                  <a href="#"> <li>Products</li></a>
                  <a href="#"> <li>Contact Us</li></a>
                  <a href="#"><li>About Us</li></a>
                  <a href="#"><li>Blog</li></a>
                </ul>
              </div>
              <div >
                <p className="font-medium text-xl mb-5">Social</p>
                <ul className="flex flex-col gap-y-2 text-lg font-normal">
                  <a href="#"><li>Facebook</li></a>
                  <a href="#"><li>Instagram</li></a>
                  <a href="#"><li>Twitter</li></a>
                  <a href="#"><li>linkedin</li></a>
                </ul>
              </div>

            </div>
            <p className="text-center text-xl font-normal pb-10 text-gray-400">© 2023. All Rights Reserved</p>

          </div>



        </div>
      </footer>
    </div>
  )
};

export default Footer;

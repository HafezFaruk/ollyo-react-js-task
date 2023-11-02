import React from 'react';

const Footer = () => {


  return (
    <div className="bg-gray-900 mt-10 lg:mt-[100px] pt-[60px] px-5">
      <footer className="container mx-auto">
        <div className="text-white">
          <div className="flex-col justify-center items-center text-center  ">
            <h2 className="text-3xl sm:text-4xl md:text-[57px] lg:leading-[70px]  font-bold mb-10">Let's Work Together</h2>
            <a href='https://github.com/HafezFaruk' target='_blank' className="px-8 py-3 text-black font-bold text-[20px] bg-white text-center rounded-full sm:mb-[127px] mb-16 hover:bg-gray-300  transition-all duration-500 ease-in-out">Get in touch</a>
          </div>
          <hr className='my-16'/>
          <div>

            <div className="flex flex-wrap justify-between gap-9 mb-20">
              <a className="font-bold text-xl lg:text-5xl" href="https://github.com/HafezFaruk" target='_blank'  >
                DEVELOP.ME
              </a>


              <div>
                <p className="font-medium text-2xl mb-5">Location</p>
                <div className="space-y-2 text-lg font-normal">

                  <p>Bangladesh</p>
                  <p> Burichang </p>
                  <p>Cumilla</p>
                </div>
              </div>


              <div >
                <p className="font-medium text-2xl mb-5">Support</p>
                <ul className="flex flex-col gap-y-2 text-lg font-normal">
                   <li>Web Design</li>
                  <li>Web App Development</li>
                 <li>Mobile App</li>
                 <li>UI/UX Design</li>
                </ul>
              </div>
              <div >
                <p className="font-medium text-2xl mb-5">Social</p>
                <ul className="flex flex-col gap-y-2 text-lg font-normal">
                  <a className="hover:text-green-300" target='_blank' href="https://www.facebook.com/HafezFarukBD/"><li>Facebook</li></a>
                  <a className="hover:text-green-300" target='_blank' href="https://www.instagram.com/hafez_faruk/"><li>Instagram</li></a>
                  <a className="hover:text-green-300" target='_blank' href="https://twitter.com/HafezFaruk5"><li>Twitter</li></a>
                  <a className="hover:text-green-300" target='_blank' href="https://www.linkedin.com/in/hafez-faruk/"><li>Linkedin</li></a>
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

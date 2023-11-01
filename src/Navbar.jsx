import React from 'react';

const Layout = () => {


    return (
        <>
          

                <nav className="relative z-[999] text-white  py-7">
                    <div className="container text-black mx-auto px-5">
                        <div className="flex justify-between items-center">
                            <a className="font-semibold sm:font-bold text-base sm:text-xl lg:text-5xl" href="#" rel="noopener noreferrer">
                                DVELOP.ME
                            </a>
                            <ul className="flex items-center space-x-6">


                                <li className="text-[20px] hidden sm:block">
                                    <a href="#" >Project Details</a>
                                </li>

                                <li className="group">
                                    <a
                                        href="#"
                                        className="pl-[51px] pr-[13px] py-[10px] group-hover:pl-[13px] group-hover:pr-[51px] group-hover:bg-gray-950 group-hover:text-white transition-all duration-1000 ease-in-out border border-black group-hover:border-white  cursor-pointer rounded-full font-medium text-[24px] leading-8 text-[#000000]  relative"
                                        role="button"
                                    >
                                        <span
                                            className="absolute top-[7px] left-0 group-hover:left-[79%] transition-all duration-1000 ease-in-out  border border-dark group-hover:border-white w-[38px] h-[38px] rounded-full inline-block"
                                        >
                                            <svg
                                                className="my-2 mx-2 group-hover:stroke-white transition-all duration-1000 ease-in-out "
                                                width="22"
                                                height="22"
                                                viewBox="0 0 23 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0 7.5H22M22 7.5C19.5905 7.04545 14.7714 4.90909 14.7714 0M22 7.5C19.5905 7.95455 14.7714 10.0909 14.7714 15"
                                                    className="group-hover:stroke-white transition-all duration-1000 ease-in-out "
                                                    stroke="black"
                                                    stroke-width="1.5"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        Start Project</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
          
        </>
    );
};

export default Layout;

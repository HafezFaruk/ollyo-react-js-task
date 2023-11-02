import React from 'react';
import OllyoLogo from '@/assets/images/ollyo.svg'
const Navbar = () => {


    return (
        <>
            <nav className="relative z-[999] text-white  py-7">
                <div className="container text-black mx-auto px-5">
                    <div className="flex justify-between items-center">
                    
                        <a href="https://github.com/HafezFaruk" target='_blank' className="font-semibold sm:font-bold text-base sm:text-xl lg:text-5xl"   >
                            DEVELOP.ME
                        </a>
                        <a href="https://ollyo.com/" target='_blank' className="group flex items-center gap-x-2">
                            <img className='sm:w-10 h-10' width={24} height={24} loading='lazy' src={OllyoLogo} alt="ollyo logo" />
                            <div

                                className="pl-12 sm:pl-[51px] pr-[13px] py-2 sm:py-[10px] group-hover:pl-[13px] group-hover:pr-[51px] group-hover:bg-gray-950 group-hover:text-white transition-all duration-1000 ease-in-out border border-black group-hover:border-white  cursor-pointer rounded-full font-medium  text-black text-lg sm:text-2xl relative"
                                
                            >

                                <span
                                    className="absolute top-[7px] left-0 group-hover:left-[72%] transition-all duration-1000 ease-in-out  border border-dark group-hover:border-white w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full inline-flex items-center justify-center"
                                >

                                    <svg
                                        className=" group-hover:stroke-white transition-all duration-1000 ease-in-out "
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
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                Hire us

                            </div>
                        </a>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;

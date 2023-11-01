import React from 'react';

const Projects = () => {
    const projectsThumb = [
        { src: "https://i.ibb.co/RHmwZmQ/1.png" },
        { src: "https://i.ibb.co/3hTCxFt/2.png" },
        { src: "https://i.ibb.co/0cSLpmT/3.png" },
        { src: "https://i.ibb.co/hymqbK9/4.png" },
        { src: "https://i.ibb.co/2qvxcPn/5.png" },
        { src: "https://i.ibb.co/8BbZgxx/6.png" },
        { src: "https://i.ibb.co/mzkV4xW/7.png" },
        { src: "https://i.ibb.co/2jJdHDn/8.png" },
        { src: "https://i.ibb.co/2P1Wfnp/9.png" },
        { src: "https://i.ibb.co/RPcHRtS/10.png" },
    ]

    return (
        <>
            <div className="container mx-auto">
                <section
                    className="bg-gray-900  p-20  mt-[120px] rounded-3xl"
                >
                    <div className="group  max-w-[195px] mx-auto mb-10">
                        <a
                            href="#"
                            className="pl-[51px] pr-[13px] py-[10px] group-hover:pl-[13px] group-hover:pr-[51px] group-hover:bg-gray-950 group-hover:text-white transition-all duration-1000 ease-in-out border border-black group-hover:border-white  cursor-pointer rounded-full font-medium text-[24px] leading-8 text-[#000000]  relative bg-white"
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
                            All Projects</a>
                    </div>

                    
                    <h2 className="text-center  text-white  text-[40px] lg:text-[88px] leading-[50px] lg:leading-[100px] font-bold ">
                        Take a Look at The Latest
                        Projects I’ve Done
                    </h2>


                    <div
                        className="columns-1 md:columns-2 mt-[80px] lg:mt-[120px] gap-[40px] space-y-[40px]"
                    >
                        {projectsThumb.map((image, index) => (
                            <div
                                key={image.index}
                                className="break-inside-avoid relative group hover:-rotate-3 duration-300 transition-all ease-in-out"
                            >
                                <div
                                    className="bg-black bg-opacity-50 rounded-[30px] cursor-pointer absolute inset-0 invisible group-hover:visible transition-all duration-300 ease-in-out"
                                >
                                    <div
                                        className="absolute left-[50%] text-white top-[50%] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 group-hover:lg:top-[80%] group-hover:top-[70%] group-hover:left-[5%]"
                                    >
                                        <h2 className="text-[34px] lg:text-[44px] lg:leading-[44px]">
                                            Mobile
                                        </h2>
                                        <p
                                            className="text-[20px] lg:text-[24px] leading-[26px] lg:leading-[32px]"
                                        >
                                            Trading Website Development for Dark X
                                        </p>
                                    </div>
                                    <div
                                        className="absolute top-[50%] right-[50%] group-hover:top-0 group-hover:right-0 invisible group-hover:visible transform ease-in-out duration-1000 opacity-0 group-hover:opacity-100 bg-[#000000]/40 w-[135px] h-[135px] rounded-full flex justify-center items-center"
                                    >
                                        <svg width="70" height="56" viewBox="0 0 70 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.17376 54.4552L67.9452 8.60137M67.9452 8.60137C59.7058 12.2745 40.7259 15.9788 30.7214 1.41045M67.9452 8.60137C61.5585 14.9724 51.2862 31.3565 61.2906 45.9248" stroke="white" stroke-width="3" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <img className="w-full h-full rounded-lg " src={image.src} alt={`Image ${index}`} />

                            </div>
                        ))}

                    </div>

                    <div
                        className=" mb-[45px] mx-auto group mt-[100px] flex justify-center items-center"
                    >
                        <div className="flex items-center justify-center space-x-4">

                            <svg className="mt-2 group-hover:-rotate-[8deg] transition duration-300 ease-in-out" width="38" height="25" viewBox="0 0 38 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12.5H36.6667M36.6667 12.5C32.6508 11.7424 24.619 8.18182 24.619 0M36.6667 12.5C32.6508 13.2576 24.619 16.8182 24.619 25" stroke="white" stroke-width="2" stroke-linejoin="round" />
                            </svg>

                            <p
                                className="text-white group-hover:text-[#C5FFEE] border-b text-[24px] leading-[28px] lg:text-[40px] lg:leading-[40px]"

                            >
                                Browsing  Projects
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Projects;

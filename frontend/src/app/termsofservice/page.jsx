import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {
    return (
        <div>
            <div className="bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] bg-no-repeat" >
                <Navbar />
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                                <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeMiterlimit={10}
                                        points=" 8,5 8,1 16,1 16,5"
                                        strokeLinejoin="round"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeMiterlimit={10}
                                        points="9,15 1,15 1,5 23,5 23,15 15,15"
                                        strokeLinejoin="round"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeMiterlimit={10}
                                        points="22,18 22,23 2,23 2,18"
                                        strokeLinejoin="round"
                                    />
                                    <rect
                                        x={9}
                                        y={13}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeMiterlimit={10}
                                        width={6}
                                        height={4}
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    About Library Vault
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Welcome to ReactLibraries, your ultimate hub for discovering, exploring, and managing React libraries. In the ever-expanding world of React development, finding the right tools can be a challenge. We’re here to simplify that process and enhance your development journey.
                                </p>
                            </div>
                            <div>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center -mx-4 lg:pl-8">
                            <div className="flex flex-col items-end px-3">
                                <img
                                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                    src="https://files.ably.io/ghost/prod/2023/11/best-react-component-libraries.png"
                                    alt=""
                                />
                                <img
                                    className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                    src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*HAlvBKa96t9IYv0wDa7Elw.png"
                                    alt=""
                                />
                            </div>
                            <div className="px-3">
                                <img
                                    className="object-center w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                    src="https://www.jspanther.com/blog/app/uploads/2022/05/JS-Panthar-Blog-Image-React-UI-01-011-1-scaled.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 max-w-[80%] mb-6 mx-auto gap-x-10'>
                    <span>


                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Our Mission
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-6 text-justify">
                            Our mission is to empower developers by providing a comprehensive, user-friendly platform that offers detailed insights into the best React libraries available. We aim to make the React ecosystem more accessible and manageable for developers of all levels.
                        </p>
                    </span>
                    <span>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Our Vision
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            We envision a React development community that thrives on shared knowledge and resources. By connecting developers with the right tools and fostering community collaboration, we strive to enhance the overall quality and efficiency of React projects worldwide.


                        </p>
                    </span>
                </div>

                <div className='max-w-[80%] mx-auto mb-10'>
                    <h1 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>Join Us</h1>
                    <p className='text-base text-gray-700 md:text-lg'>Whether you’re a seasoned developer or just starting, [Your Website Name] is your partner in the React ecosystem. Join us in building a vibrant, resourceful community where great ideas and tools are shared and celebrated.</p>
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default About
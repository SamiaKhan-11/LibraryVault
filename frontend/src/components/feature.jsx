import React from 'react'

const feature = () => {
    return (
        <div>
            <div className='bg-orange-100  mx-auto mt-40 rounded-2xl'>
           
                {/* Card Blog */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <h1 className='text-center text-6xl font-bold m-10 -mt-2 text-white'>Popular Libraries</h1>
                    {/* Grid */}
                    <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                        {/* Card */}
                        <a
                            className="group block rounded-xl overflow-hidden focus:outline-none"
                            href="#"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img
                                        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="grow">
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                        Studio by Preline
                                    </h3>
                                    <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                        Produce professional, reliable streams easily leveraging Preline's
                                        innovative broadcast studio
                                    </p>
                                    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                                        Read more
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a
                            className="group block rounded-xl overflow-hidden focus:outline-none"
                            href="#"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img
                                        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="grow">
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                        Onsite
                                    </h3>
                                    <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                        Optimize your in-person experience with best-in-class capabilities
                                        like badge printing and lead retrieval
                                    </p>
                                    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                                        Read more
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a
                            className="group block rounded-xl overflow-hidden focus:outline-none"
                            href="#"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img
                                        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="grow">
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                        The complete guide to OKRs
                                    </h3>
                                    <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                        How to make objectives and key results work for your company
                                    </p>
                                    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                                        Read more
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* End Card */}
                        {/* Card */}
                        <a
                            className="group block rounded-xl overflow-hidden focus:outline-none"
                            href="#"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img
                                        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="grow">
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                        People program models
                                    </h3>
                                    <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                        Six approaches to bringing your People strategy to life
                                    </p>
                                    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                                        Read more
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* End Card */}
                        {/*Card*/}
                        <a
                            className="group block rounded-xl overflow-hidden focus:outline-none"
                            href="#"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img
                                        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="grow">
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                        Studio by Preline
                                    </h3>
                                    <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                        Produce professional, reliable streams easily leveraging Preline's
                                        innovative broadcast studio
                                    </p>
                                    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                                        Read more
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* End Card */}
                        {/*Card*/}
                        <a
                            className="group block rounded-xl overflow-hidden focus:outline-none"
                            href="#"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img
                                        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                        src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="grow">
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                        Studio by Preline
                                    </h3>
                                    <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                        Produce professional, reliable streams easily leveraging Preline's
                                        innovative broadcast studio
                                    </p>
                                    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                                        Read more
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* End Grid */}


                </div>
                {/* End Card Blog */}
            </div>

        </div>
    )
}

export default feature


// < div className = 'p-20 bg-amber-200' >
//     This is Feature Section
//         < div className = 'text-black text-center' >
//       <h1 className='text-6xl font-bold mb-10'>Top picks</h1>
//       <p className='mb-10'>Discover the most popular and trending React libraries handpicked by our us. These top picks are essential tools that can elevate your projects and streamline your development process. Stay ahead of the curve with the latest and most impactful libraries in the React ecosystem.</p>
//     </ >
// <div className='grid grid-cols-4 gap-x-7 gap-y-5 mb-10'>

//     <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hover:scale-110 focus:scale-110 transition-transform duration-700 ease-in-out h-fit" >
//         /*  hover:scale-110 focus:scale-105 transition-transform duration-500 ease-in-out*/
//         <img
//             className="w-40 h-40 rounded-t-xl mx-auto   "
//             src="https://mui.com/static/logo.png"
//             alt="Card Image"
//         />
//         <div className="p-4 md:p-5">
//             <h3 className="text-lg font-bold text-gray-800 dark:text-white">
//                 MUI
//             </h3>
//             <p className="mt-1 text-gray-500 dark:text-neutral-400">
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//             </p>
//             <a
//                 className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//                 href="#"
//             >
//                 Go somewhere
//             </a>
//         </div>
//     </div>
//     <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hover:scale-110 focus:scale-110 transition-transform duration-700 ease-in-out h-fit" >
//         /*  hover:scale-110 focus:scale-105 transition-transform duration-500 ease-in-out*/
//         <img
//             className="w-40 h-40 rounded-t-xl mx-auto   "
//             src="https://mui.com/static/logo.png"
//             alt="Card Image"
//         />
//         <div className="p-4 md:p-5">
//             <h3 className="text-lg font-bold text-gray-800 dark:text-white">
//                 MUI
//             </h3>
//             <p className="mt-1 text-gray-500 dark:text-neutral-400">
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//             </p>
//             <a
//                 className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//                 href="#"
//             >
//                 Go somewhere
//             </a>
//         </div>
//     </div>
//     <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hover:scale-110 focus:scale-110 transition-transform duration-700 ease-in-out">
//         <img
//             className="w-full h-auto rounded-t-xl"
//             src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
//             alt="Card Image"
//         />
//         <div className="p-4 md:p-5">
//             <h3 className="text-lg font-bold text-gray-800 dark:text-white">
//                 Card title
//             </h3>
//             <p className="mt-1 text-gray-500 dark:text-neutral-400">
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//             </p>
//             <a
//                 className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//                 href="#"
//             >
//                 Go somewhere
//             </a>
//         </div>
//     </div>
//     <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hover:scale-110 focus:scale-110 transition-transform duration-700 ease-in-out">
//         <img
//             className="w-full h-auto rounded-t-xl"
//             src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
//             alt="Card Image"
//         />
//         <div className="p-4 md:p-5">
//             <h3 className="text-lg font-bold text-gray-800 dark:text-white">
//                 Card title
//             </h3>
//             <p className="mt-1 text-gray-500 dark:text-neutral-400">
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//             </p>
//             <a
//                 className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//                 href="#"
//             >
//                 Go somewhere
//             </a>
//         </div>
//     </div>
// </div>
//   </div > 
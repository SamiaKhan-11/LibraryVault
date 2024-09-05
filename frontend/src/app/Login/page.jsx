'use client'
import axios from 'axios'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
    .matches(/[a-z]/, 'Must include lowercase')
    .matches(/[A-Z]/, 'Must include uppercase')
    .matches(/[0-9]/, 'Must include digits')
    .matches(/[\W]/, 'Must include special characters')
});

const Login = () => {

  const router = useRouter();


  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/user/authenticate', values)
        .then((response) => {
          toast.success('Login Successfully')
          const { role } = response.data;

          localStorage.setItem('token', response.data.token)
          if (role === 'admin') {
            router.push('/addlibrary')
          } else {

            router.push('/')
          }
        }).catch((err) => {
          console.log(err);
          toast.error(err.response.data.message)

        });

    },
    validationSchema: LoginSchema
  });
  return (
    <div className='bg-gradient-to-tr from-gray-700 via-blue-200 to-gray-800 '>

      <section className='overflow-hidden h-screen'>
        <div className="px-8 py-28 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="grid items-center py-8 gap-12 lg:grid-cols-2 lg:gap-24 bg-no-repeat 
          bg-white
          rounded-3xl  shadow-[0_10px_20px_-2px_black] md:bg-left lg:bg-left sm:bg-left"
            style={{ backgroundImage: "linear-gradient(0deg, #fffc, #fffc), url('/Lock2.jpg') " }}>

            {/* style={{ backgroundImage: "linear-gradient(0deg, #fffc, #fffc), url(' https://i.pinimg.com/736x/6d/2d/13/6d2d1301a2615992bfb52c3b383885dd.jpg'); " }} */}
            <div className="flex flex-col p-16 md:text-left text-center">
              <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
                Welcome Back <br />
              </h1>
              <p className='mt-3 text-lg font-medium'>Sign in to your account</p>
              <p className="mt-3 font-medium text-black">
                Let's get started
              </p>
            </div>
            <div className="p-4 bg-white rounded-3xl">
              <div className="p-6 rounded-2xl">
                <div>
                  <h1 className="font-bold text-3xl underline underline-offset-4 text-center text-black">
                    <span className='bg-clip-text bg-gradient-to-tr from-gray-800 via-blue-100 to-gray-900 text-transparent'>Sign In</span>
                  </h1>
                  <div className="relative py-4">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-400" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-2 text-sm text-black bg-white py-2">

                      </span>
                    </div>
                  </div>
                </div>
                <form onSubmit={LoginForm.handleSubmit} className='sm:w-full md:w-full lg:w-full' >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-3 text-sm font-medium text-black"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        onChange={LoginForm.handleChange}
                        value={LoginForm.values.email}
                        placeholder="Email Address"
                        className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border-2 border-blue-500  rounded-lg appearance-none bg-chalk hover:border-blue-200 placeholder-zinc-300 focus:border-cyan-500 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                        fdprocessedid="4tv9onj"
                      />
                      {
                        LoginForm.touched.email && (
                          <p className='text-xs text-red-300 mt-2'> {LoginForm.errors.email} </p>
                        )
                      }
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="password"
                        className="block mb-3 text-sm font-medium text-black"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        onChange={LoginForm.handleChange}
                        value={LoginForm.values.password}
                        className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border-2 border-blue-500 rounded-lg appearance-none bg-chalk hover:border-blue-200 placeholder-zinc-300 focus:border-cyan-500 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                        placeholder="Type password here..."
                        type="password"
                        fdprocessedid="u32mrir"
                      />{
                        LoginForm.touched.password && (
                          <p className='text-xs text-red-300 mt-2'> {LoginForm.errors.password} </p>
                        )
                      }
                    </div>
                    <div className="col-span-full">
                      <button
                        type="submit"
                        className="group flex w-full cursor-pointer select-none items-center justify-center rounded-md bg-gradient-to-tr from-gray-700 via-blue-100 to-gray-800 px-6 py-2 text-black transition"
                        fdprocessedid="evdvf6"
                      >
                        sign in

                        <svg
                          className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="flex mx-auto text-sm font-medium leading-tight text-center text-black">
                      Don't have an account!
                      <Link
                        className="ml-auto text-blue-500 hover:text-black"
                        href="Signup"
                      >
                        Sign up now
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Login







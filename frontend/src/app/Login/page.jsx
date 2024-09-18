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
    <div className='h-screen bg-gradient-to-l from-blue-50 to-blue-100 flex items-center justify-center'>
      <div className="relative flex w-96 flex-col rounded-xl bg-white text-gray-700 shadow-md">
        <div>
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-300 text-white shadow-lg shadow-blue-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug text-white underline underline-offset-4">
              Sign In
            </h3>
          </div>
          <form action="" onSubmit={LoginForm.handleSubmit} className='space-y-5'>
            <div className="flex flex-col gap-4 p-6">
              <div>
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="email"
                    onChange={LoginForm.handleChange}
                    value={LoginForm.values.email}
                    className="border-2 peer block w-full appearance-none rounded-lg border border-blue-400 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 hover:border-cyan-200 focus:border-cyan-500 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
                  >
                    {" "}
                    Enter Your Email{" "}
                  </label>
                </div>
                {LoginForm.touched.email && (
                  <p className='text-xs text-red-300 mt-2'>{LoginForm.errors.email}</p>
                )

                }
              </div>
              <div>
                <div className="relative mt-2 w-full">
                  <input
                    type="password"
                    id="password"
                    onChange={LoginForm.handleChange}
                    value={LoginForm.values.password}
                    className="border-2 peer block w-full appearance-none rounded-lg border border-blue-400 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 hover:border-cyan-200 focus:border-cyan-500 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
                  >
                    {" "}
                    Enter Your Password
                  </label>
                </div>
                {LoginForm.touched.password && (
                  <p className='text-xs text-red-300 mt-2'>{LoginForm.errors.password} </p>
                )}
              </div>

            </div>
            <div className="p-5 pt-0">
              <div className="">
                <button className="group flex w-full mx-auto cursor-pointer select-none items-center justify-center rounded-lg px-6 py-2 bg-gradient-to-tr from-blue-600 to-cyan-300 text-xs font-bold uppercase text-white transition focus:outline-none focus:ring focus:ring-indigo-200 w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40">
                  <a
                    href="#"
                    className="group flex w-fit items-center justify-center rounded py-1 text-center font-bold"
                  >
                    {" "}
                    Sign In{" "}
                  </a>
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
              <p className="mt-6 flex justify-center text-sm font-light text-inherit">
                Don't have an account?
                <Link className="ml-1 text-sm font-bold text-blue-500" href="/Signup">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
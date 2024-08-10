'use client'
import axios from 'axios'
import { useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email:Yup.string().email('Invalid email').required('Required'),
  password:Yup.string().required('Required')
  .matches(/[a-z]/,'Must include lowercase')
  .matches(/[A-Z]/,'Must include uppercase')
  .matches(/[0-9]/,'Must include digits')
  .matches(/[\W]/,'Must include special characters')
});

const Login = () => {


  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post( 'http://localhost:5000/user/authenticate',values)
      .then((response) => {
        toast.success('Login Successfully')
        localStorage.setItem('token', response.data.token)
      }).catch((err) => {
        console.log(err);
        toast.error(err.response.data.message)
        
      });

    },
    validationSchema:LoginSchema
  });
  return (
    <div className='h-screen'>

      <section>
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
                Welcome Back <br />
                <span>Sign in to your account</span>
              </h1>
              <p className="mt-4 text-base font-medium text-gray-500 text-pretty">
                Let's get started
              </p>
            </div>
            <div className="p-3 border bg-gray-50 rounded-3xl">
              <div className="p-6 bg-white border shadow-lg rounded-2xl">
                <div>
                  <h1 className="font-bold text-2xl underline underline-offset-4 text-center">
                    <span>Sign In</span>
                  </h1>
                  <div className="relative py-4">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-2 text-sm text-black bg-white py-2">
                       
                      </span>
                    </div>
                  </div>
                </div>
                <form onSubmit={LoginForm.handleSubmit}>
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
                        className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                        fdprocessedid="4tv9onj"
                      />
                      {
                        LoginForm.touched.email &&(
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
                        className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                        placeholder="Type password here..."
                        type="password"
                        fdprocessedid="u32mrir"
                      />{
                        LoginForm.touched.password &&(
                          <p className='text-xs text-red-300 mt-2'> {LoginForm.errors.password} </p>
                        )
                      }
                    </div>
                    <div className="col-span-full">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        fdprocessedid="evdvf6"
                      >
                        sign in
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







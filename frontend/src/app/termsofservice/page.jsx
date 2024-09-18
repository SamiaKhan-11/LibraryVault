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
    <div className="flex h-screen w-screen items-center justify-center bg-gray-500 px-2">
      {/* Login */}
      <div className="relative flex w-full max-w-md flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-md">
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-800">Sign In</h1>
          <p className="text-gray-500">Access your Library Vaulty account</p>
        </div>
        <form onSubmit={LoginForm.handleSubmit} className='space-y-5'>
          <div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="email"
                onChange={LoginForm.handleChange}
                value={LoginForm.values.email}
                className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-3 pt-4 pb-2 text-sm text-gray-800 placeholder-transparent focus:border-gray-500 focus:outline-none"
                placeholder="Enter Your Email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:scale-75"
              >
                Enter Your Email
              </label>
            </div>
            {LoginForm.touched.email && (
              <p className='text-xs text-red-400 mt-1'>{LoginForm.errors.email}</p>
            )}
          </div>

          <div>
            <div className="relative mt-2 w-full">
              <input
                type="password"
                id="password"
                onChange={LoginForm.handleChange}
                value={LoginForm.values.password}
                className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-3 pt-4 pb-2 text-sm text-gray-800 placeholder-transparent focus:border-gray-500 focus:outline-none"
                placeholder="Enter Your Password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:scale-75"
              >
                Enter Your Password
              </label>
            </div>
            {LoginForm.touched.password && (
              <p className='text-xs text-red-400 mt-1'>{LoginForm.errors.password} </p>
            )}
          </div>

          <div className="">
            <button className="w-full rounded-lg bg-gray-800 py-3 font-bold text-white hover:bg-gray-700 transition-all"
              type='submit'>
              Login
            </button>
          </div>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/Signup"
              className="font-semibold text-gray-800 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
      {/* /Login */}
    </div>
  )
}

export default Login;

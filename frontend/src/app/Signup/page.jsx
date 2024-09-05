'use client'
import axios from 'axios'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string().required('Required')
    .matches(/[a-z]/, 'must include lowercase')
    .matches(/[A-Z]/, 'must contain uppercase')
    .matches(/[0-9]/, 'must contain a number')
    .matches(/[\W]/, 'must contain special characters'),

  confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must match')
});
const SignUp = () => {

  const router = useRouter();

  const signupForm = useFormik({                                         //for using methods like handlesubmit & handlechange
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);



      axios.post('http://localhost:5000/user/add', values)
        .then((response) => {
          console.log(response.status);

          resetForm();
          toast.success('User Registerd');
          router.push('/Login');

        }).catch((err) => {
          console.log(err);
          if (err.response.data.code === 11000) {
            toast.error('Email already exists');
          }
          setSubmitting(false);
        });
    },
    validationSchema: SignupSchema
  });
  return (
    <div className="bg-gradient-to-tr from-gray-700 via-blue-200 to-gray-800">
      <div className="font-[sans-serif]  md:h-screen p-8 max-w-[70%] mx-auto">
        <div className="grid md:grid-cols-4  items-center shadow-[0_10px_20px_-2px_black] rounded-xl overflow-hidden mt-20 ">
          <div className="max-md:order-2 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full lg:px-8 px-4 py-4 bg-left md:col-span-2">
            <div className='' >
              <h4 className="text-white text-2xl font-semibold">
                Create Your Account
              </h4>
              <p className="text-[13px] text-white mt-3 leading-relaxed">
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
            <div>
              <h4 className="text-white text-2xl font-semibold">
                Simple &amp; Secure Registration
              </h4>
              <p className="text-[13px] text-white mt-3 leading-relaxed">
                Our registration process is designed to be straightforward and secure.
                We prioritize your privacy and data security.
              </p>
            </div>
          </div>
          <form onSubmit={signupForm.handleSubmit} className="md:col-span-2 w-full py-6 px-6 sm:px-16
    bg-white shadow-2xl shadow-inner ">
            <div className="mb-4">
              <h3 className="text-3xl font-bold underline underline-offset-4 text-black  ">
                <span className='bg-clip-text bg-gradient-to-tr from-gray-800 via-blue-100 to-gray-900 text-transparent'>
                Sign Up
                </span>
                </h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id='name'
                    onChange={signupForm.handleChange}
                    value={signupForm.values.name}
                    required=""
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={10} cy={7} r={6} data-original="#000000" />
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                {
                  signupForm.touched.name && (
                    <p className='text-xs text-red-600 mt-2'> {signupForm.errors.name} </p>
                  )
                }
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    id='email'
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email}
                    required=""
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000" />
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit={10}
                        strokeWidth={40}
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      />
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      />
                    </g>
                  </svg>
                </div>
                {
                  signupForm.touched.email && (
                    <p className='text-xs text-red-600 mt-2'> {signupForm.errors.email} </p>
                  )
                }
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    id='password'
                    onChange={signupForm.handleChange}
                    value={signupForm.values.password}
                    required=""
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                {
                  signupForm.touched.password && (
                    <p className='text-xs text-red-600 mt-2'> {signupForm.errors.password} </p>
                  )
                }
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    id='confirmpassword'
                    onChange={signupForm.handleChange}
                    value={signupForm.values.confirmpassword}
                    required=""
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Confirm Password"
                  />

                </div>
                {
                  signupForm.touched.confirmpassword && (
                    <p className='text-xs text-red-600 mt-2'> {signupForm.errors.confirmpassword} </p>
                  )
                }
              </div>
             
            </div>
            <div className="!mt-6">
              <button
                type="submit"
                disabled={signupForm.isSubmitting}
                className="group flex items-center justify-center rounded-md bg-gradient-to-tr from-gray-700 via-blue-100 to-gray-800 px-5 py-3 text-black transition focus:outline-none focus:ring focus:ring-indigo-200 w-full"
              >
                Create an account
                <svg
                  className="group-hover:translate-x-2 ml-3 h-5 w-5 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <p className="text-gray-800 text-sm mt-5 text-center">
              Already have an account?{" "}
              <Link
                href="/Login"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUp
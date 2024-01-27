import React from 'react';
import heroesbg from '../assets/about/heroes-bg.png';
import { Formik, Form, Field } from 'formik';
import { registerValidation } from '../validation/registerValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inisialValues = {
  username: '',
  email: '',
  password: '',
  cpassword: '',
  mobile: '',
};

const Register = () => {
  const bgStyle = {
    backgroundImage: `url(${heroesbg})`,
    alignItems: 'center',
    backgroundSize: 'unset',
  };
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/client/register',
        values
      );
      console.log('Registration successful:', response.data);
     alert("sucsess")
      navigate('/login');
      // Optionally, you can redirect the user or perform other actions upon successful registration.
    } catch (error) {
      console.error('Registration error:', error.response.data);
      
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="relative h-72 -mt-16 -z-10">
        <div
          className="absolute inset-0 bg-white opacity-40"
          style={{ ...bgStyle, zIndex: -1 }}
        ></div>
      </div>
      <nav aria-label="Breadcrumb" className="flex mx-14 -mt-36">
        <ol className="flex overflow-hidden rounded-lg  border border-gray-dark  text-gray-dark">
          <li className="flex items-center">
            <a
              href="/"
              className="flex h-10 items-center gap-1.5 bg-gray-light px-4 transition hover:text-gray-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ms-1.5 text-xs font-medium"> Home </span>
            </a>
          </li>
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-light [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
            <a
              href="/register"
              className="flex h-10 items-center bg-orange pe-4 ps-8 text-xs font-medium transition hover:text-gray-dark"
            >
              Register
            </a>
          </li>
        </ol>
      </nav>
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-5">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register account
                </h1>
                <Formik
                  initialValues={inisialValues}
                  validationSchema={registerValidation}
                  onSubmit={handleSubmit}
                >
                  {({ errors }) => (
                    <Form className="space-y-4 md:space-y-6">
                      <div>
                        <label
                          for="username"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Username
                        </label>
                        <Field
                          type="text"
                          name="username"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                        ></Field>
                        {errors.username && (
                          <small style={{ color: 'red' }}>
                            {errors.username}
                          </small>
                        )}
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                        ></Field>
                        {errors.email && (
                          <small style={{ color: 'red' }}>{errors.email}</small>
                        )}
                      </div>
                      <div>
                        <label
                          for="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                        ></Field>
                        {errors.password && (
                          <small style={{ color: 'red' }}>
                            {errors.password}
                          </small>
                        )}
                      </div>
                      <div>
                        <label
                          for="cpassword"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Confirm Password
                        </label>
                        <Field
                          type="password"
                          name="cpassword"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                        ></Field>
                        {errors.cpassword && (
                          <small style={{ color: 'red' }}>
                            {errors.cpassword}
                          </small>
                        )}
                      </div>
                      <div>
                        <label
                          for="mobile"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your phone number
                        </label>
                        <Field
                          type="text"
                          name="mobile"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                        ></Field>
                        {errors.mobile && (
                          <small style={{ color: 'red' }}>
                            {errors.mobile}
                          </small>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Register
                      </button>

                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        You have an account ?{' '}
                        <a
                          href="/login"
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Login
                        </a>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;

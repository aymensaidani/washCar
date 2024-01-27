import * as Yup from 'yup';

export const registerValidation = Yup.object({
  username: Yup.string().required('Please Enter username'),
  mobile: Yup.string().min(8).required('Please Enter phone number'),
  email: Yup.string()
    .email('Please enter Valid email')
    .required('Please Enter email'),
  password: Yup.string().min(5).required('Please Enter password'),
  cpassword: Yup.string().oneOf([Yup.ref('password')], 'Password not matched').required("Please enter confirm password"),
});

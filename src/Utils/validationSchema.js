import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(10).required()
});

export const signupSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(10).required(),
    gender: yup.string().min(3).required(),
    jobRole: yup.string().required(),
    department: yup.string().required(),
    address: yup.string().required()
});
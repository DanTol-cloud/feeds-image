import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Email is not valid'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must contain at least 8 characters')
});

export default yupResolver(schema);
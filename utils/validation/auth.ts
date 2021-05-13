import * as yup from 'yup';

import { UserPositions } from 'types/enums';

export const validateRegister = yup.object().shape({
  email: yup.string().email().max(128).required(),
  username: yup
    .string()
    .matches(/^[a-z]+$/, 'Username must be alphanumeric')
    .min(3)
    .max(30)
    .required(),
  password: yup.string().min(8).max(128).required(),
  repassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
  position: yup.string().oneOf(Object.values(UserPositions)),
});

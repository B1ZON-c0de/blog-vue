import * as yup from 'yup'

export const schema = yup.object({
  login: yup
    .string()
    .required('Логин обязателен')
    .min(3, 'Логин должен содержать не менее 3 символов'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
  confirmPassword: yup
    .string()
    .required('Подтверждение пароля обязателено')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
})

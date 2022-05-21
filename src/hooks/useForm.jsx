import { useState, useEffect } from 'react'
import * as yup from 'yup'

yup.setLocale({
  string: {
    email: 'Digite um email válido',
    min: 'Mínimo de 8 caracteres',
  },
  mixed: {
    required: 'Campo obrigatório',
  },
})

const emailSchema = yup.object({
  email: yup.string().email().required(),
})

const passwordSchema = yup.object({
  password: yup.string().required().min(8),
})

const initialForm = {
  isValid: false,
  values: {
    email: '',
    password: '',
  },
  touched: {
    email: false,
    password: false,
  },
  errors: {
    email: [],
    password: [],
  },
}

const validateField = async (fieldName, value) => {
  let errorArray = []
  if (fieldName === 'email') {
    await emailSchema.validate({ email: value }).catch((err) => {
      errorArray = err.errors
    })
  }

  if (fieldName === 'password') {
    await passwordSchema.validate({ password: value }).catch((err) => {
      errorArray = err.errors
    })
  }

  return errorArray
}

export const useForm = () => {
  const [form, setForm] = useState(initialForm)

  const handleChange = async (e) => {
    const { name, value } = e.target
    const error = await validateField(name, value)

    setForm((form) => ({
      ...form,
      values: {
        ...form.values,
        [name]: value,
      },
      touched: {
        ...form.touched,
        [name]: true,
      },
      errors: {
        ...form.errors,
        [name]: error,
      },
    }))
  }

  const getFieldError = (name) =>
    form.touched[name] && form.errors[name] && form.errors[name][0]

  useEffect(() => {
    setForm((form) => ({
      ...form,
      isValid: Boolean(
        form.errors.email?.length === 0 && form.errors.password?.length === 0
      ),
    }))
  }, [form.errors])

  return {
    form,
    handleChange,
    setForm,
    getFieldError,
  }
}

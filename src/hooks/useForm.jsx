import { useState, useEffect } from 'react'
import * as yup from 'yup'

yup.setLocale({
  string: {
    min: 'Mínimo de 8 caracteres',
  },
  mixed: {
    required: 'Campo obrigatório',
  },
})

const nameSchema = yup.object({
  name: yup.string().required(),
})

const passwordSchema = yup.object({
  password: yup.string().required().min(8),
})

const initialForm = {
  isValid: false,
  values: {
    name: '',
    password: '',
  },
  touched: {
    name: false,
    password: false,
  },
  errors: {
    name: [],
    password: [],
  },
}

const validateField = async (fieldName, value) => {
  let errorArray = []
  if (fieldName === 'name') {
    await nameSchema.validate({ name: value }).catch((err) => {
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

  const handleTouch = () => {
    Object.keys(form.touched).forEach(async (name) => {
      const error = await validateField(name, form.values[name])
      setForm((form) => ({
        ...form,
        touched: {
          ...form.touched,
          [name]: true,
        },
        errors: {
          ...form.errors,
          [name]: error,
        },
      }))
    })
  }

  const getFieldError = (name) =>
    form.touched[name] && form.errors[name] && form.errors[name][0]

  useEffect(() => {
    setForm((form) => ({
      ...form,
      isValid:
        form.touched.name &&
        form.errors.name?.length === 0 &&
        form.touched.password &&
        form.errors.password?.length === 0,
    }))
  }, [form.errors])

  return {
    form,
    handleChange,
    setForm,
    initialForm,
    getFieldError,
    handleTouch,
  }
}

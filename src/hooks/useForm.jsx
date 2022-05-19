import { useState, useEffect } from 'react'
import validate from 'validate.js'

export const useForm = ({ schema, initialForm }) => {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((form) => ({
      ...form,
      values: {
        ...form.values,
        [name]: ['phone', 'postalCode'].includes(name)
          ? value?.replace(/\D/g, '')
          : value,
      },
      touched: {
        ...form.touched,
        [name]: true,
      },
    }))
  }

  const handleValueChange = (name, value) => {
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
    }))
  }

  const handleTouch = () => {
    Object.keys(form.touched).forEach((name) => {
      setForm((form) => ({
        ...form,
        touched: {
          ...form.touched,
          [name]: true,
        },
      }))
    })
  }

  useEffect(() => {
    const errors = validate(form.values, schema, { fullMessages: false })
    setForm((form) => ({
      ...form,
      isValid: !errors,
      errors: errors || {},
    }))
  }, [form.values, setForm, schema])

  const getFieldError = (name) =>
    form.touched[name] && form.errors[name] && form.errors[name][0]

  return {
    form,
    handleChange,
    getFieldError,
    handleTouch,
    setForm,
    handleValueChange,
  }
}

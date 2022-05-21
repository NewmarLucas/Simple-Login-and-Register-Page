import { useForm } from '../../hooks/useForm'

export const useHooks = () => {
  const { form, handleChange, getFieldError } = useForm()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.isValid) return

    alert('Test')
  }

  return { form, handleChange, getFieldError, handleSubmit }
}

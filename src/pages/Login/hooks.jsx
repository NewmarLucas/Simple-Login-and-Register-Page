import { useForm } from '../../hooks/useForm'

export const useHooks = () => {
  const { form, handleChange, getFieldError, handleTouch } = useForm()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.isValid) return handleTouch()

    alert('Test')
  }

  return { form, handleChange, getFieldError, handleSubmit }
}

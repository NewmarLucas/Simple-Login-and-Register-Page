import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'

export const useHooks = () => {
  const { form, handleChange, getFieldError, handleTouch } = useForm()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.isValid) return handleTouch()

    alert('Test')
  }

  const goToCadaster = () => {
    navigate('/cadastro')
  }

  return { form, handleChange, getFieldError, handleSubmit, goToCadaster }
}

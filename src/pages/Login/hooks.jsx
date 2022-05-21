import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { translateErrorMessages } from '../../helpers/utils'

import { useForm } from '../../hooks/useForm'
import api from '../../middlewares/api'

export const useHooks = () => {
  const {
    form,
    handleChange,
    getFieldError,
    handleTouch,
    setForm,
    initialForm,
  } = useForm()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.isValid) return handleTouch()

    try {
      const res = await api.post('/login', form.values)
      if (res.data?.login) {
        setForm(initialForm)
        navigate('/home')
        return
      }

      swal({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Houve um erro ao fazer login. Por favor, tente novamente!',
      })
    } catch (error) {
      setForm(initialForm)
      swal({
        icon: 'error',
        title: translateErrorMessages(error?.response?.data?.why || ''),
      })
    }
  }

  const goToCadaster = () => {
    navigate('/cadastro')
  }

  return { form, handleChange, getFieldError, handleSubmit, goToCadaster }
}

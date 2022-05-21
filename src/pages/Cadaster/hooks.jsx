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
      const res = await api.post('/user/cadaster', form.values)
      if (res?.data?.user?.name) {
        setForm(initialForm)
        swal({
          icon: 'success',
          title: 'Cadastro realizado com sucesso!',
          text: 'Realize o login com a conta cadastrada pra continuar.',
          timer: 5000,
        })
        navigate('/')
        return
      }

      swal({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Houve um erro ao criar cadastro. Por favor, tente novamente!',
      })
    } catch (error) {
      setForm(initialForm)
      swal({
        icon: 'error',
        title: translateErrorMessages(error?.response?.data?.why || ''),
        timer: 2000,
      })
    }
  }

  return { form, handleChange, getFieldError, handleSubmit }
}

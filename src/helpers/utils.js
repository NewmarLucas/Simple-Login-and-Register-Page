export const translateErrorMessages = (errorMessage) => {
  switch (errorMessage) {
    case 'User already exists':
      return 'Usuário já cadastrado no sistema!'

    case 'format is wrong':
      return 'Os dados digitados não são aceitos. Tente novamente!'

    case 'Not found data!':
      return 'Os dados iseridos não foram encontrados no sistema.'

    default:
      return 'Houve um erro na requisição. Por favor, tente novamente!'
  }
}
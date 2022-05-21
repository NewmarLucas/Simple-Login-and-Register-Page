export const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    width: '90%',
    height: 600,
    maxWidth: 960,
    display: 'flex',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    borderRadius: '2rem',
    overflow: 'hidden',
  },
  section1Title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      objectFit: 'cover',
      width: 80,
      height: 80
    }
  },
  content1: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  section1Container: {
    display: 'flex',
    height: '70%',
    width: 'calc(100% - 6rem)',
    padding: '0 3rem',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    height: 200,
    maxWidth: 325,
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  submitButton: {
    marginTop: '1rem',
    borderRadius: '2rem'
  },
  registerButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    position: 'absolute',
    bottom: 15,
    '& button': {
      marginLeft: '5px'
    }
  }
}